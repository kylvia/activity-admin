import request from '@/utils/request'

export function getUserInfo () {
  return request({
    url: '/user/info',
    method: 'get'
  })
}

export function sentForm (params) {
  return request({
    url: '/redPack/sentForm',
    method: 'post',
    data: { params }
  })
}
