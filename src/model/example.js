import Model from '@/model'

class ExampleModel extends Model {
  constructor () {
    super()
    this.baseURL += '/example'
  }

  getList (options = {}) {
    options.url = '/list'

    return this.api(options)
  }

  getItem (options = {}) {
    options.url = '/item'

    return new Promise((resolve, reject) => {
      this.api(options)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

export default ExampleModel
