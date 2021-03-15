import request from '@/utils/request'

export function getcitys() {
  return request({
    url: '/v1/cities',
    method: 'get',
    params: { type: 'hot' }
  })
}

export function getcityList() {
  return request({
    url: '/v1/cities',
    method: 'get',
    params: { type: 'group' }
  })
}

