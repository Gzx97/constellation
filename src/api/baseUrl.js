const getBaseUrl = (url) => {
  let BASE_URL = '';
  if (process.env.NODE_ENV === 'development') {
    //开发环境 - 根据请求不同返回不同的BASE_URL
    // BASE_URL = 'http://47.52.21.155:8200/'
    BASE_URL = 'https://www.starlucky.top/'

  } else {
    // 生产环境

    BASE_URL = 'https://www.starlucky.top/'

  }
  return BASE_URL
}

export default getBaseUrl;