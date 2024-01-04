import { SUNNY_URI, SUNNY_ADMIN_URI, MCKJ_URI } from './apiMap'

const getBaseUrl = (url: string): string => {
  if (!url?.startsWith('/api')) {
    url = `/sunny${url}`
  }
  if (url?.startsWith('/api')) {
    // url = `${MCKJ_URI}${url}`
    url = `${SUNNY_ADMIN_URI}${url}`
  } else if (url?.startsWith('/sunny')) {
    url = `${SUNNY_URI}${url.replace(/\/sunny/, '')}`
  }
  return url
}

export default getBaseUrl
