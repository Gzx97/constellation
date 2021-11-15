import HTTPREQUEST from "./http"
 
export const getLogin = (data) => {
  return HTTPREQUEST.post('/api/login/login', data)
}