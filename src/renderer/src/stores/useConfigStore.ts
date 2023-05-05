import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore(
  'storeId',
  () => {
    const config = ref({
      page: 'camera',
      deviceId: '222',
      borderWidth: '10px',
      borderColor: '#e66767',
      rounded: false,
    })
    const updateConfig = (): void => {
      // localStorage.setItem('configStore', JSON.stringify(config.value))
    }
    return { config, updateConfig }
  },
  {
    persist: true
  }
  // {
  //   state: () => {
  //     return {
  //       counter: 0,
  //       name: 'Eduardo',
  //       isAdmin: true
  //     }
  //   }
  // }
)
