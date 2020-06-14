import request from '@/plugins/axios'

const user = {
  // 获取用户信息
  getUserInfo () {
    return request({
      url: '/user/info',
      method: 'get'
    })
  }
}

export default user
