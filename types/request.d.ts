declare namespace CustomRequest {
  /** HTTP 请求方法 */
  interface Method {
    /** HTTP 请求 OPTIONS */
    OPTIONS
    /** HTTP 请求 GET */
    GET
    /** HTTP 请求 HEAD */
    HEAD
    /** HTTP 请求 POST */
    POST
    /** HTTP 请求 PUT */
    PUT
    /** HTTP 请求 DELETE */
    DELETE
    /** HTTP 请求 TRACE */
    TRACE
    /** HTTP 请求 CONNECT */
    CONNECT
  }

  /** http状态码 */
  enum HttpStatus {
    SUCCESS = 200,
    CREATED = 201,
    ACCEPTED = 202,
    CLIENT_ERROR = 400,
    AUTHENTICATE = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    SERVER_ERROR = 500,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504
  }

  /** 暂时options配置值 */
  interface Options {
    /**
     * 请求头
     */
    contentType?: string
    /**
     * 是否显示loading
     */
    isShowLoading?: boolean
    headers?: Record<string, string>
  }
}
