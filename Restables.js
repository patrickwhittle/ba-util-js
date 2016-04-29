import 'isomorphic-fetch'

export default class Restables extends Set { 

  constructor(model, models) {
    super()
    this.model = model
    this.populate(models || [])
  }

  get(options) {
    return fetch(options.url)
      .then(this.status)
      .then(this.json)
      .then(this.populate.bind(this))
      .catch(error => console.log('Request failed', error))
  }

  update(options) {
    const method = 'put'
    let headers = {
      'Content-type': 'application/json',
    }
    headers = Object.assign(headers, options.headers)
    return fetch(options.url, {
      method: method,
      headers: new Headers(headers),
      body: JSON.stringify(this.toObject.call(this)),
    })
      .then(this.status)
      .then(this.json)
      .catch(error => console.log('Request failed', error))
  }
  
  status(response) {
    if ( response.status >= 200 && response.status < 300 ) {
      return Promise.resolve(response)
    }
    else {
      return Promise.reject(new Error(response.statusText))
    }
  }

  json(response) {
    return response.json()
  }

  populate(jsons) {
    jsons.forEach(json => {
      const model = new this.model()
      this.add(model.populate.call(model, json))
    })
    return this
  }

  toObject() {
    return [...this].map(model => model.toObject.call(model))
  }

}

