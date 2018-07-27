import Model from '@/model'

class UserInfoModel extends Model {
  setApi (id, ...params) {
    let apis = {
      getUserInfo: '/api/UserCenter/GetUserInfo',
      getCourseInfo: '/api/Grade/GetPublicTypeByCustType',
      getClassInfo: '/api/Grade/GetLessonTypeByCustType',
      // 这个是后台文件在他电脑上的地址
      getmsg: '/api/Grade/GetLessonTypeByCustType' 
    }
    if (id) return apis[id]
    else return apis
  }

  // 获取用户信息
  getUserInfo (options = {}) {
    let config = {
      method: 'get',
      url: this.setApi('getUserInfo'),
      data: options
    }
    return this.api(config)
  }

  // 首页获取课程信息
  getCourseInfo (options = {}) {
    let config = {
      method: 'get',
      url: this.setApi('getCourseInfo'),
      data: options
    }
    return this.api(config)
  }

  // 首页获取年级信息
  getClassInfo (options = {}) {
    let config = {
      method: 'get',
      url: this.setApi('getClassInfo'),
      data: options
    }
    return this.api(config)
  }

  // 获取提示信息
  getmsg (options = {}) {
    let config = {
      method: 'get',
      url: this.setApi('getmsg'),
      data: options
    }
    return this.api(config)
  }
}

export default UserInfoModel
