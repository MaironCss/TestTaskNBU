export default {
  getEvent(date) {
    return fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${date}&json`)
  },
}
