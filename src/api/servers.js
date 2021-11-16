import HTTPREQUEST from "./http"
 
export const getConst = (data) => {
  return HTTPREQUEST.get('api/star/const?13', data)
}