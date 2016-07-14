import Restable from '../../../Restable'
import HotelAddress from '../../../com/bookassist/model/HotelAddress'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class Hotel extends Restable {

  constructor(obj) {
    super()
    const defaults = {
    }
    // do we want to validate obj somehow?
    Object.assign(this, defaults, obj)
  }

  get url() {
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

  get name() {
    return this._name
  }

  set name(name) {
    this._name = name
  }

  get timeZone() {
    return this._timeZone
  }

  set timeZone(timeZone) {
    this._timeZone = timeZone
  }

  get addressId() {
    return this._addressId
  }

  set addressId(addressId) {
    this._addressId = addressId
  }

  get address() {
    return this._address
  }

  set address(address) {
    if ( isPlainObject(address) ) {
      this._address = new HotelAddress(address)
    }
    else {
      this._address = address
    }
  }

  get currency() {
    return this._currency
  }

  set currency(currency) {
    this._currency = currency
  }

  get bookitLevel() {
    return this._bookitLevel
  }

  set bookitLevel(bookitLevel) {
    this._bookitLevel = bookitLevel
  }

  get hotelType() {
    return this._hotelType
  }

  set hotelType(hotelType) {
    this._hotelType = hotelType
  }

  get hotelStandard() {
    return this._hotelStandard
  }

  set hotelStandard(hotelStandard) {
    this._hotelStandard = hotelStandard
  }

  get numberOfRooms() {
    return this._numberOfRooms
  }

  set numberOfRooms(numberOfRooms) {
    this._numberOfRooms = numberOfRooms
  }

  get numberOfSuites() {
    return this._numberOfSuites
  }

  set numberOfSuites(numberOfSuites) {
    this._numberOfSuites = numberOfSuites
  }

  get comment() {
    return this._comment
  }

  set comment(comment) {
    this._comment = comment
  }

  get softguidesServiceLevel() {
    return this._softguidesServiceLevel
  }

  set softguidesServiceLevel(softguidesServiceLevel) {
    this._softguidesServiceLevel = softguidesServiceLevel
  }

  get creationDate() {
    return this._creationDate
  }

  set creationDate(creationDate) {
    this._creationDate = creationDate
  }

  get priority() {
    return this._priority
  }

  set priority(priority) {
    this._priority = priority
  }

  get legalName() {
    return this._legalName
  }

  set legalName(legalName) {
    this._legalName = legalName
  }

  get cancellationPolicy() {
    return this._cancellationPolicy
  }

  set cancellationPolicy(cancellationPolicy) {
    this._cancellationPolicy = cancellationPolicy
  }

  get corporateCancellationPolicy() {
    return this._corporateCancellationPolicy
  }

  set corporateCancellationPolicy(corporateCancellationPolicy) {
    this._corporateCancellationPolicy = corporateCancellationPolicy
  }

  get voucherPolicy() {
    return this._voucherPolicy
  }

  set voucherPolicy(voucherPolicy) {
    this._voucherPolicy = voucherPolicy
  }

  get rewardPolicy() {
    return this._rewardPolicy
  }

  set rewardPolicy(rewardPolicy) {
    this._rewardPolicy = rewardPolicy
  }

  get shortDescription() {
    return this._shortDescription
  }

  set shortDescription(shortDescription) {
    this._shortDescription = shortDescription
  }

  get bookingEmail() {
    return this._bookingEmail
  }

  set bookingEmail(bookingEmail) {
    this._bookingEmail = bookingEmail
  }

  get voucherEmail() {
    return this._voucherEmail
  }

  set voucherEmail(voucherEmail) {
    this._voucherEmail = voucherEmail
  }

  get maxMonthBookAhead() {
    return this._maxMonthBookAhead
  }

  set maxMonthBookAhead(maxMonthBookAhead) {
    this._maxMonthBookAhead = maxMonthBookAhead
  }

  get maxStayNights() {
    return this._maxStayNights
  }

  set maxStayNights(maxStayNights) {
    this._maxStayNights = maxStayNights
  }

  get minHoursAhead() {
    return this._minHoursAhead
  }

  set minHoursAhead(minHoursAhead) {
    this._minHoursAhead = minHoursAhead
  }

  get earliestCheckin() {
    return this._earliestCheckin
  }

  set earliestCheckin(earliestCheckin) {
    this._earliestCheckin = earliestCheckin
  }

  get latestCheckout() {
    return this._latestCheckout
  }

  set latestCheckout(latestCheckout) {
    this._latestCheckout = latestCheckout
  }

  get commission() {
    return this._commission
  }

  set commission(commission) {
    this._commission = commission
  }

  get prioritySort() {
    return this._prioritySort
  }

  set prioritySort(prioritySort) {
    this._prioritySort = prioritySort
  }

  get showCustomerContact() {
    return this._showCustomerContact
  }

  set showCustomerContact(showCustomerContact) {
    this._showCustomerContact = showCustomerContact
  }

  get minSuggestPrice() {
    return this._minSuggestPrice
  }

  set minSuggestPrice(minSuggestPrice) {
    this._minSuggestPrice = minSuggestPrice
  }

  get level2Page() {
    return this._level2Page
  }

  set level2Page(level2Page) {
    this._level2Page = level2Page
  }

  get vatNo() {
    return this._vatNo
  }

  set vatNo(vatNo) {
    this._vatNo = vatNo
  }

  get howToGet() {
    return this._howToGet
  }

  set howToGet(howToGet) {
    this._howToGet = howToGet
  }

  get contactName() {
    return this._contactName
  }

  set contactName(contactName) {
    this._contactName = contactName
  }

  get logo() {
    return this._logo
  }

  set logo(logo) {
    this._logo = logo
  }

  get deposit() {
    return this._deposit
  }

  set deposit(deposit) {
    this._deposit = deposit
  }

  get manRequestStatus() {
    return this._manRequestStatus
  }

  set manRequestStatus(manRequestStatus) {
    this._manRequestStatus = manRequestStatus
  }

  get manRequestHours() {
    return this._manRequestHours
  }

  set manRequestHours(manRequestHours) {
    this._manRequestHours = manRequestHours
  }

}

export default Hotel
