import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getEvent(date) {
    return apiClient.get(`date=${date}&json`)
  },
}
