import isObjectLike from 'lodash/isObjectLike'
import isArray from 'lodash/isArray'
import 'object-assign'

export default class Restable {

  constructor() {
  }

  get(options) {
    return fetch(options.url)
      .then(this.status)
      .then(this.json)
      .then(this.populate.bind(this))
      .catch(error => console.log('Request failed', error))
  }

  save(options) {
    const method = this.isNew() ? 'post' : 'put'
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
  
  del(options) {
  }

  isNew() {
    return this.id === -1
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

  populate(json) {
    return Object.assign(this, json)
  }

  toObject(iterable) {
    iterable = iterable || this
    if ( isArray(iterable) ) {
      const a = []
      iterable.forEach(elem => {
        if ( isObjectLike(elem) ) {
          a.push(this.toObject(elem))
        }
        else {
          a.push(elem)
        }
      })
      return a
    }
    else {
      const h = {}
      Object.keys(iterable).forEach(key => {
        const value = iterable[key]
        let lkey = key
        if ( iterable instanceof Restable ) {
          lkey = key.substr(1) 
        }
        if ( isObjectLike(iterable[key]) ) {
          h[lkey] = this.toObject(iterable[key])
        }
        else {
          h[lkey] = iterable[key]
        }
      })
      return h
    }
  }

}

