import http from "./requst"
export const login=(params) => http.post('lejuAdmin/index/login',params)


//侧边栏数据
export const getmenus=() => http.get('admin/sysAuth/index/getInitMenus')