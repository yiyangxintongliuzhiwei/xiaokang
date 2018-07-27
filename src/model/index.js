import axios from 'axios'
import Vue from 'vue'
import utils from '@/utils'
class Model {
  constructor () {
    this.baseURL = 'http://i.xk.kbl.xul.cc'
  }
  isProdEnv (url) {
    utils.setCookie('token', '123123123', '')
    let token = utils.getCookie('token') ? utils.getCookie('token') : '111'
    switch (process.env.NODE_ENV) {
      case 'testing':
        url = `${url}?token=${token}&ChannelKey=wechat0kb7fn`
        break
      case 'development':
        url = `${url}?token=${token}&ChannelKey=wechat0kb7fn`
        break
    }
    return url
  }
  api (options = {}) {
    if (!options.method) options.method = 'get'
    options.url = options.url ? this.baseURL + options.url : this.baseURL
    options.url = this.isProdEnv(options.url)
    return new Promise((resolve, reject) => {
      axios[options.method](options.url, options.data)
        .then((response) => {
          return resolve(response)
        })
        .catch((error) => {
          if (error.response) {
            switch (Number(error.response.status)) {
              case 401:
                location.reload()
                break
            }
          } else if (error.request) {
            console.log(error.request)
          } else {
            console.log('Error', error.message)
          }
          throw this.generateResponse(error)
        })
    })
  }
  generateResponse (res) {
    const data = res.data
    let result
    if (data && data.hasOwnProperty('status') && data.hasOwnProperty('msg')) {
      result = ({
        data,
        status: data.status,
        statusText: data.msg
      })
    } else {
      result = ({
        data,
        status: res.status,
        statusText: res.statusText
      })
    }
    return result
  }
}
export default Model
