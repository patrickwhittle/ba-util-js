import Restable from '../../../../Restable'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

export default class extends Restable {

  constructor(obj) {
    super()
    const defaults = {
    }
    // do we want to validate obj somehow?
    Object.assign(this, defaults, obj)
  }

  get url() {
  }

  get guideId() {
    return this._guideId
  }

  set guideId(guideId) {
    this._guideId = guideId
  }

  get addressId() {
    return this._addressId
  }

  set addressId(addressId) {
    this._addressId = addressId
  }

  get nameHotel() {
    return this._nameHotel
  }

  set nameHotel(nameHotel) {
    this._nameHotel = nameHotel
  }

  get addressLine1() {
    return this._addressLine1
  }

  set addressLine1(addressLine1) {
    this._addressLine1 = addressLine1
  }

  get addressLine2() {
    return this._addressLine2
  }

  set addressLine2(addressLine2) {
    this._addressLine2 = addressLine2
  }

  get cityTown() {
    return this._cityTown
  }

  set cityTown(cityTown) {
    this._cityTown = cityTown
  }

  get state() {
    return this._state
  }

  set state(state) {
    this._state = state
  }

  get postalCode() {
    return this._postalCode
  }

  set postalCode(postalCode) {
    this._postalCode = postalCode
  }

  get language() {
    return this._language
  }

  set language(language) {
    this._language = language
  }

}
