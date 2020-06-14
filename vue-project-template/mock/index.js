const Mock = require('mockjs')

const proxy = {
  'GET /user/info': {
    errorcode: 0,
    message: 'success',
    data: Mock.mock({
      name: '@cname'
    })
  }
}

module.exports = proxy
