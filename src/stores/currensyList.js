import { defineStore } from 'pinia';
import EventService from '@/services/EventService.js'
import dayjs from 'dayjs'

export const useCurrencyStore = defineStore('currencyList', {
    state: () => ({
        currencyList: [],
        changedCurrencyList: [],
        editingItem: {},
        date: new Date()
    }),
    actions: {
        getEventMethod(value = new Date) {
            EventService.getEvent(dayjs(value).format('YYYYMMDD'))
            .then(res => res.json())
            .then(res => {
              this.saveCurrencyList(res)
            })
            .catch((error) => {
              throw new Error(error)
            })
        },
        saveCurrencyList(data) {
            this.currencyList = data
        },
        setChangedCurrency(item) {
            this.changedCurrencyList.push(item)
        },
        setEditingItem(item) {
            this.editingItem = item
        },
        setDate(changingDate) {
            this.date = changingDate
            this.getEventMethod(changingDate)
        }
    },
    getters: {
      getCurrentList: (state) => state.currencyList,
      getChangedCurrencyList: (state) => state.changedCurrencyList,
      getEditingItem: (state) => state.editingItem,
      getDate: (state) => state.date
    }
})
