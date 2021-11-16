import HTTPREQUEST from "./http"
 
export const getConst = (data) => {
  return HTTPREQUEST.get('api/star/const', data)
}
export const fortune = (data) => {
  return HTTPREQUEST.get('api/star/fortune', data)
}