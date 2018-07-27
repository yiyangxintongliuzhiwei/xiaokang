/**
 * 引入外部帮助方法库 xdhelper
 * 项目地址：https://github.com/xiaoda/xdhelper
 * API 文档：https://github.com/xiaoda/xdhelper/wiki
 */

import xd from 'xdhelper'

export default {
  ...xd,
  getCookie: (cName) => {
    if (document.cookie.length > 0) {
      let cStart = document.cookie.indexOf(cName + '=')
      if (cStart !== -1) {
        cStart = cStart + cName.length + 1
        let cEnd = document.cookie.indexOf(';', cStart)
        if (cEnd === -1) cEnd = document.cookie.length
        return unescape(document.cookie.substring(cStart, cEnd))
      }
    }
    return ''
  },
  /* 设置cookie */
  setCookie: (cName, value, expire) => {
    let unit = expire.toString().charAt(expire.length - 1)
    let exdate = new Date()
    switch (unit) {
      case 'd':
        exdate.setDate(exdate.getDate() + Number(expire.slice(0, -1)))
        break
      case 'm':
        exdate.setMinutes(exdate.getMinutes() + Number(expire.slice(0, -1)))
        break
      case 's':
        exdate.setSeconds(exdate.getSeconds() + Number(expire.slice(0, -1)))
        break
      default:
        exdate.setDate(exdate.getDate() + Number(expire))
    }
    document.cookie = cName + '=' + escape(value) + ((expire == null) ? '' : ';expires=' + exdate.toGMTString())
  }

}
