import Restable from '../../../Restable'
import HotelAddressInt from '../../../com/bookassist/model/translation/HotelAddressInt'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class HotelAddress extends Restable {

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

  get email() {
    return this._email
  }

  set email(email) {
    this._email = email
  }

  get url() {
    return this._url
  }

  set url(url) {
    this._url = url
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

  get country() {
    return this._country
  }

  set country(country) {
    this._country = country
  }

  get postalCode() {
    return this._postalCode
  }

  set postalCode(postalCode) {
    this._postalCode = postalCode
  }

  get phone() {
    return this._phone
  }

  set phone(phone) {
    this._phone = phone
  }

  get fax() {
    return this._fax
  }

  set fax(fax) {
    this._fax = fax
  }

  get latitude() {
    return this._latitude
  }

  set latitude(latitude) {
    this._latitude = latitude
  }

  get longitude() {
    return this._longitude
  }

  set longitude(longitude) {
    this._longitude = longitude
  }

  get countyId() {
    return this._countyId
  }

  set countyId(countyId) {
    this._countyId = countyId
  }

  get urlLink() {
    return this._urlLink
  }

  set urlLink(urlLink) {
    this._urlLink = urlLink
  }

  get cityZoneId() {
    return this._cityZoneId
  }

  set cityZoneId(cityZoneId) {
    this._cityZoneId = cityZoneId
  }

  get mapName() {
    return this._mapName
  }

  set mapName(mapName) {
    this._mapName = mapName
  }

  get mapBlockX() {
    return this._mapBlockX
  }

  set mapBlockX(mapBlockX) {
    this._mapBlockX = mapBlockX
  }

  get mapBlockY() {
    return this._mapBlockY
  }

  set mapBlockY(mapBlockY) {
    this._mapBlockY = mapBlockY
  }

  get mapPixelX() {
    return this._mapPixelX
  }

  set mapPixelX(mapPixelX) {
    this._mapPixelX = mapPixelX
  }

  get mapPixelY() {
    return this._mapPixelY
  }

  set mapPixelY(mapPixelY) {
    this._mapPixelY = mapPixelY
  }

  get staticMapId() {
    return this._staticMapId
  }

  set staticMapId(staticMapId) {
    this._staticMapId = staticMapId
  }

  get translations() {
    return this._translations
  }

  set translations(translations) {
    if ( isObject(translations) ) {
      translations = mapValues(translations, (value) => {
        if ( isPlainObject(value) ) {
          return new HotelAddressInt(value)
        }
        return value
      })
    }
    this._translations = translations
  }

}

export default HotelAddress
