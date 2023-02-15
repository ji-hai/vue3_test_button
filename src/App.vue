<script setup lang="ts">
import { ref, computed } from 'vue'
import { ElConfigProvider } from 'element-plus'
import zh from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'

import { appStore } from './store/modules'


const size = ref('small')
const zIndex = ref(3000)
const locale = ref(en)

const store = appStore()

locale.value = computed(()=> store.lang)


</script>

<template>
  {{ locale }}
  <el-config-provider :size="size" :z-index="zIndex" :locale="locale">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </el-config-provider>
</template>

<style scoped>

</style>
