import request from '@/utils/request'

// 获取路由
export const getRouters = () => {
  return request({
    url: '/user/getRouters',
    // url: '/getRouters',
    method: 'get'
  })
}