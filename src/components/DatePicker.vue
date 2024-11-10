<script setup>
import { ref } from 'vue'
import { useCurrencyStore } from '@/stores/currensyList'
import { storeToRefs } from 'pinia'
import moment from 'moment'

const store = useCurrencyStore()
const { getDate } = storeToRefs(store)
const date = ref(store.getDate)

const updateDate = (newDate) => {
    date.value = newDate;
    store.setDate(newDate)
};

const menu = ref(false)
</script>

<template>
    <v-menu
      v-model="menu"
      :nudge-right="40"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="290px"
      class="menu"
    >
      <template v-slot:activator="{ props }">
        <v-text-field
          v-bind="props"
          :modelValue="moment(getDate).format('YYYY-MM-DD')"
          variant="outlined"
          hide-details
          hide-spin-buttons
          append-inner-icon="mdi-calendar"
          width="290px"
        ></v-text-field>
      </template>
        <v-date-picker
          color="primary"
          :modelValue="date"
          @update:modelValue="updateDate"
        ></v-date-picker>
    </v-menu>
</template>

<style scoped lang="sass">
.v-input
    max-height: 57px !important
    margin-left: 16px !important
    margin-bottom: 24px !important
</style>