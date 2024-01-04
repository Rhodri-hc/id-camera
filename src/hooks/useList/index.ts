import { useEffect, useState } from 'react'
import type { IPageParams } from '@/types/common'
import type { RequestReturns } from '@/services'
import { InfiniteScrollProps } from '@antmjs/vantui'

interface IBasicState<T = any> {
  fetchList: (
    ...args: any
  ) => RequestReturns<{ totalPage: number; count: number; totalSize: number; list: T[] } | any>
  pagination?: IPageParams
  queryParams?: any
  initRequest?: boolean
}
const defaultState: Partial<IBasicState> = {
  pagination: { page: 1, pageSize: 10 },
  queryParams: { page: 1, pageSize: 10 },
  initRequest: true
}
const useList = (options: IBasicState) => {
  const [pageParams, setPageParams] = useState(
    (options?.queryParams && { ...defaultState.queryParams, ...options.queryParams }) ||
      defaultState.queryParams
  )
  const [hasMore, setHasMore] = useState<boolean>(false)
  const [initRequest, setInitRequest] = useState<boolean>(defaultState.initRequest || true)
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
  // setInitRequest(state.initRequest)

  const fetchList = async (fetchParams?: { isRefresh?: boolean; queryParams?: any }) => {
    const { isRefresh = false, queryParams = {} } = fetchParams || {}
    const params = { ...pageParams, ...queryParams }
    if (hasMore) {
      params.page++
    }
    if (isRefresh) {
      params.page = state.pagination?.page
      // params.queryParams = state.queryParams
    }
    setPageParams({ ...params })

    const { data } = await state.fetchList(params)
    const { list: dataList, totalSize } = data
    console.log(
      'before set hasmore',
      totalSize,
      params.page,
      params.pageSize,
      totalSize > params.page * params.pageSize
    )
    setHasMore(totalSize > params.page * params.pageSize)
    setList(isRefresh || params.page === 1 ? dataList : [...(list || []), ...(dataList || [])])
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
    // if (initRequest) {
    const dataList = await fetchList()
    console.log(
      'return params',
      dataList?.length || 0 < (state.pagination?.pageSize as number) ? 'complete' : 'loading'
    )
    return dataList?.length < (state.pagination?.pageSize as number) ? 'complete' : 'loading'
    // } else {
    //   setInitRequest(true)
    //   return 'loading'
    // }
  }

  /**
   * @desc 查询
   */
  const search = async (params: any) => {
    setPageParams({ ...pageParams, ...params, page: 1 })
    fetchList({ isRefresh: true, queryParams: { ...pageParams, ...params, page: 1 } })
  }

  return {
    refresh,
    loadMore,
    search,
    fetchList,
    hasMore,
    list
  }
}

export default useList
