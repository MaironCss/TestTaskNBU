<script setup>
import { storeToRefs } from 'pinia'
import CurrencyTable from '@/components/CurrencyTable.vue'
import { useCurrencyStore } from '@/stores/currensyList'
import dayjs from 'dayjs'

const store = useCurrencyStore()
const { getDate } = storeToRefs(store)
const { getCurrentList } = storeToRefs(store)

if (!store.getCurrentList.length) {
  store.getEventMethod()
}
</script>

<template>
    <CurrencyTable 
    :items="getCurrentList"
    :date="dayjs(getDate).format('YYYY-MM-DD')"
    />
</template>
