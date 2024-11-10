<script setup>
import { ref } from 'vue'
import { useCurrencyStore } from '@/stores/currensyList'
import { useRouter } from 'vue-router';

const router = useRouter()
const store = useCurrencyStore()
const changingObject = ref({ ...store.getEditingItem })
const isDisabled = ref(true)
const matcherNamesEnum = {
    'txt':'Currency name', 
    'cc':'Short name', 
    'rate':'Exchange rate', 
    'r030':'Rating', 
    'exchangedate':'Exchange date'
}

const matchName = function(val) {
    return matcherNamesEnum[val]
}

const changData = function(item, index) {
    changingObject.value[index] = item
    isDisabled.value = false
}

const saveChangingCurr = function(){
    store.setChangedCurrency(changingObject)
    isDisabled.value = true
    router.push({ path: '/changed' })
}

</script>

<template>
    <div class="wrapper">
        <div 
            class="editing-fields"
            v-for="(item, index) in changingObject" 
            :key="index"
    >
    {{ matchName(index) }}
        <v-text-field
            :model-value="item"
            color="primary"
            variant="underlined"
            class="mb-6"
            @update:model-value="changData($event, index)"
        />
    </div>
    <v-btn
        color="primary"
        :disabled="isDisabled"
        @click="saveChangingCurr"
    >
        Save 
    </v-btn>
    </div>
</template>

<style scoped lang="sass">
.wrapper
    margin: 78px auto
    justify-content: center
    max-width: 400px
    width: 100%
</style>