<script setup>
import { storeToRefs } from 'pinia'
import CurrencyTable from '@/components/CurrencyTable.vue'
import { useCurrencyStore } from '@/stores/currensyList'
import moment from 'moment'

const store = useCurrencyStore()
const { getDate } = storeToRefs(store)

if (!store.getCurrentList.length) {
  store.getEventMethod()
}
</script>

<template>
  <Suspense>
    <CurrencyTable 
    :items="store.getCurrentList"
    :date="moment(getDate).format('YYYY-MM-DD')"
    />
  </Suspense>
</template>
