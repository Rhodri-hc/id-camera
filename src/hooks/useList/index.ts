import { useEffect, useState } from 'react'
import type { IPageParams } from '@/types/common'
import type { RequestReturns } from '@/services'
import { InfiniteScrollProps } from '@antmjs/vantui'
import { isString } from '@/utils/is'

interface IBasicState<T = any> {
  fetchList: (
    ...args: any
  ) => RequestReturns<{ totalPage: number; count: number; totalSize: number; list: T[] } | any>
  pagination?: IPageParams
  queryParams?: any
}
const defaultState: Partial<IBasicState> = {
  pagination: { pageNum: 1, pageSize: 10 },
  queryParams: { pageNum: 1, pageSize: 10 }
}
const useList = (options: IBasicState) => {
  const [pageParams, setPageParams] = useState(
    (options?.queryParams && { ...defaultState.queryParams, ...options.queryParams }) ||
      defaultState.queryParams
  )
  const [currentTotal, setCurrentTotal] = useState<number>(0)
  const [initRequest, setInitRequest] = useState<boolean>(true)
  const [list, setList] = useState<any[]>([])

  /**
   * @desc 合并配置项
   */
  const mergeDefaultOptions = (options: any, props: any): IBasicState => {
    for (const key in options) {
      if (!Object.getOwnPropertyDescriptor(props, key)) {
        props[key] = options[key]
      }
    }
    return props
  }
  const state = mergeDefaultOptions(defaultState, options)

  const fetchList = async (fetchParams?: { isRefresh?: boolean; queryParams?: any }) => {
    const { isRefresh = false, queryParams = {} } = fetchParams || {}
    const params = { ...pageParams, ...queryParams }

    console.log('before set hasmore', isRefresh, currentTotal, params.pageNum, list.length)

    if (isRefresh) {
      params.pageNum = state.pagination?.pageNum
      // params.queryParams = state.queryParams
    } else {
      if (currentTotal > list.length) {
        params.pageNum++
      } else {
        return 'complete'
      }
    }

    setPageParams({ ...params })

    const { data } = await state.fetchList(params)
    const { list: dataList, totalSize } = data

    setCurrentTotal(totalSize)
    setList(isRefresh || params.pageNum === 1 ? dataList : [...(list || []), ...(dataList || [])])
    return dataList
  }

  const refresh = () => {
    setPageParams({ ...state.pagination, ...state.queryParams })
    fetchList({ isRefresh: true })
  }
  /**
   * @desc 加载更多
   */
  const loadMore: InfiniteScrollProps['loadMore'] = async () => {
    if (!initRequest) {
      const dataList = await fetchList()

      console.log('dataList', dataList)

      if (isString(dataList)) {
        return dataList as 'complete' | 'loading' | 'error'
      } else {
        console.log(
          'return params',
          dataList?.length || 0 < (state.pagination?.pageSize as number) ? 'complete' : 'loading'
        )
        return dataList?.length < (state.pagination?.pageSize as number) ? 'complete' : 'loading'
      }
    } else {
      setInitRequest(false)
      return 'loading'
    }
  }

  /**
   * @desc 查询
   */
  const search = async (params: any) => {
    setCurrentTotal(0)
    setPageParams({ ...pageParams, ...params, pageNum: 1 })
    fetchList({ isRefresh: true, queryParams: { ...pageParams, ...params, pageNum: 1 } })
  }

  return {
    refresh,
    loadMore,
    search,
    fetchList,
    list
  }
}

export default useList
