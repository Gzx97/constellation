
// 前端git仓库
// git@github.com:Gzx97/constellation.git
// 切换开发和生产API
// background: linear-gradient(90deg, #EE5035 0%, #E32A2A 100%);  #EC4B33  background-color: rgba(26 ,32 ,46,1);

export let ONLINE = true;
// console.log(window.location.hostname)

if (ONLINE) {
  console.log = function () {};
}
const COIN = {
  PROD: {
    API_BASE_URL: "http://118.31.109.21:8000/api",
    IMG_URL:'http://118.31.109.21:8000/',
  },
  DEV: {
    API_BASE_URL: "http://118.31.109.21:8000/api",
    IMG_URL:'http://118.31.109.21:8000/',

  },
};

export const CONFIG = ONLINE ? COIN.PROD : COIN.DEV;
