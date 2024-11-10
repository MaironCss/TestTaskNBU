<script setup>
import { useCurrencyStore } from '@/stores/currensyList'

const store = useCurrencyStore()
</script>
<template>
  <div 
    v-for="(item, index) in  store.getChangedCurrencyList"
    :key="index"
    class="changing-card mt-6"
  >
    <span class="mr-4"><span class="mr-2 cur-name">Currency name:</span> {{ item.value.txt }}</span>
    <span class="mr-4"><span class="mr-2 cur-name">Short name:</span> {{ item.value.cc }}</span>
    <span class="mr-4"><span class="mr-2 cur-name">Exchange rate:</span> {{ item.value.rate }}</span>
    <span class="mr-4"><span class="mr-2 cur-name">Rating:</span> {{ item.value.r030 }}</span>
    <span class="mr-4"><span class="mr-2 cur-name">Exchange date:</span> {{ item.value.exchangedate }}</span>
  </div>
</template>

<style scoped lang="sass">
.changing-card
    padding: 16px
    border: thin solid #878383
    border-radius: 4px
    display: flex
    justify-content: space-between
.cur-name
    font-weight: 600
</style>
