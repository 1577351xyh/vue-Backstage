import axios from 'axios'
import { MessageBox, Message } from "element-ui";
const http = axios.create({

})

http.login = (data) => {
  return http.post('/api/user/login',data)
}
http.Router = () => {
  return http.get('http://localhost:8080/static/data.json')
}
//请求拦截
// http.interceptors.request.use(
// config=>{
//   if
// }
// )

//响应拦截
/*http.interceptors.response.use(
  response => {
    const res = response;
    if (res.data.code !== 200) {
      Message({
        message: res.message || 'error'
      })
    }
    //令牌过期,过期登录
    if (res.code === 501) {
      MessageBox.confirm(
        '登录异常,请重新登录',
        '确认登录信息', {
        confirmButtonText: "重新登录",
        cancelButtonText: "取消",
        type: "warning"
      }
      ).then(() => {
        //如果点击确定了
        //重新发送请求,刷新页面
        // console.log('我要重新获取token')
        location.reload();
      })
      return Promise.reject(new Error(res.message) || 'error')
    } else {
      return res;
    }
  }
)
*/
export default http;