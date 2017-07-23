import Moment from 'moment'

export function FormatTime(str) {
    return str + "'"
}

export function GetDayFromDate(date) {
  return Moment(date).format('DD')
}

export function GetMonthFromDate(date) {
  return Moment(date).format('MMM')
}

export function GetYearFromDate(date) {
  return Moment(date).format('YYYY')
}
