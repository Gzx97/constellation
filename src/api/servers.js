import HTTPREQUEST from "./http";
//  星座常量
export const getConst = data => {
  return HTTPREQUEST.get("api/star/const", data);
};
/**
 * 星座运势
 *
 * @required cons_name string
 * @required type string today/tomorrow/week/month/yea
 **/
export const fortune = data => {
  return HTTPREQUEST.get("api/star/fortune", data);
};
/**
 * 星座配对
 *
 * @required men string
 * @required women string
 **/
export const pair = data => {
  console.log(data)
  return HTTPREQUEST.post("api/star/pair", data);
};
