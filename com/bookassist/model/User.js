import Restable from '../../../Restable'
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

  get userid() {
    return this._userid
  }

  set userid(userid) {
    this._userid = userid
  }

  get username() {
    return this._username
  }

  set username(username) {
    this._username = username
  }

  get name() {
    return this._name
  }

  set name(name) {
    this._name = name
  }

  get email() {
    return this._email
  }

  set email(email) {
    this._email = email
  }

  get phone() {
    return this._phone
  }

  set phone(phone) {
    this._phone = phone
  }

  get lastLoginDate() {
    return this._lastLoginDate
  }

  set lastLoginDate(lastLoginDate) {
    this._lastLoginDate = lastLoginDate
  }

  get modificationDate() {
    return this._modificationDate
  }

  set modificationDate(modificationDate) {
    this._modificationDate = modificationDate
  }

  get language() {
    return this._language
  }

  set language(language) {
    this._language = language
  }

  get superuser() {
    return this._superuser
  }

  set superuser(superuser) {
    this._superuser = superuser
  }

  get userLocale() {
    return this._userLocale
  }

  set userLocale(userLocale) {
    this._userLocale = userLocale
  }

  get hotelId() {
    return this._hotelId
  }

  set hotelId(hotelId) {
    this._hotelId = hotelId
  }

  get guideId() {
    return this._guideId
  }

  set guideId(guideId) {
    this._guideId = guideId
  }

  get hotelGroupId() {
    return this._hotelGroupId
  }

  set hotelGroupId(hotelGroupId) {
    this._hotelGroupId = hotelGroupId
  }

  get type() {
    return this._type
  }

  set type(type) {
    this._type = type
  }

  get status() {
    return this._status
  }

  set status(status) {
    this._status = status
  }

  get administrator() {
    return this._administrator
  }

  set administrator(administrator) {
    this._administrator = administrator
  }

  get accessLevel() {
    return this._accessLevel
  }

  set accessLevel(accessLevel) {
    this._accessLevel = accessLevel
  }

}
