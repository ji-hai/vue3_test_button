<script setup lang="ts">
import { ref } from "vue"
import { appStore } from '../../store'

import { useI18n  } from 'vue-i18n'

import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const { locale } = useI18n()

const store = appStore()

const value1 = ref(true)
const value2 = ref(false)

const Onswitch = (val)=>{

  if(val){
    store.$patch((state)=>{
      locale.value = 'zh'
      state.lang = 'zh'
    })
  }else {
    store.$patch((state)=>{
      locale.value = 'en'
      state.lang = 'en'
    })
  }
}

</script>

<template>
  <div>
    {{ $t(`common.language`) }}
    {{ locale }}
    <el-button> 我的</el-button>
    <el-switch v-model="value1" @change="Onswitch" />
    <el-switch v-model="value2" @change="toggleDark" />
  </div>
</template>
<style scoped lang="scss">

</style>