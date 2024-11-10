<script setup>
import { ref, defineProps } from 'vue'
import { useCurrencyStore } from '@/stores/currensyList'
import { useRouter } from 'vue-router';
import DatePicker from '@/components/DatePicker.vue'

const router = useRouter()

const store = useCurrencyStore()

const search = ref('');

const headers = ref([
    { 
        align: 'start',
        key: 'txt',
        sortable: false,
        title: 'Currency name',
    },
    { 
        align: 'center',
        key: 'cc',
        sortable: false,
        title: 'Short name',
    },
    { 
        align: 'center',
        key: 'rate',
        sortable: false,
        title: 'Exchange rate',
    },
    { 
        align: 'center',
        key: 'r030',
        sortable: false,
        title: 'Rating',
    },
    { 
        align: 'center',
        key: 'exchangedate',
        sortable: false,
        title: 'Exchange date',
    },
])

defineProps({
    items: {
        type: Array,
        default: () => []
    },
    date: {
      type: String,
      required: true,
    },
})

function handleClick(event, row) {
  store.setEditingItem(row.item)
  router.push({ path: '/edit' })
}
</script>

<template>
  <DatePicker />
  <v-card
    :title="`NBU course to UAH at : ${date}`"
    flat
  >
    <template v-slot:text>
      <v-text-field
        v-model="search"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        hide-spin-buttons
        hide-details
        single-line
        clearable
        width="500px"
      ></v-text-field>
    </template>

    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
      @click:row="handleClick"
    ></v-data-table>
  </v-card>
</template>
