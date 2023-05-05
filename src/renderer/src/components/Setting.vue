<template>
  <main>
    <h2 class="text-gray-50 text-center text-sm opacity-70 flex flex-col gap-5 py-10">
      参数设置
    </h2>
    <el-select v-model="config.deviceId" placeholder="选择设备" clearable filterable>
      <el-option
        v-for="item in videoes"
        :key="item.deviceId"
        :label="item.label"
        :value="item.deviceId"
        size="large"
      >
      </el-option>
    </el-select>
    <!-- <el-button type="success" size="large" @click="updateConfig">确定</el-button> -->
    <el-input
      v-model="config.borderWidth"
      placeholder="请选择边框宽度"
      size="normal"
      clearable
      class="mt-5"
    ></el-input>

    <el-input
      v-model="config.borderColor"
      placeholder="请选择边框颜色"
      size="normal"
      clearable
      class="mt-5"
    ></el-input>
  </main>
</template>

<script setup lang="ts">
import { useConfigStore } from "@renderer/stores/useConfigStore";

// import useConfig from "@renderer/composables/useConfig";
// const { config, updateConfig } = useConfig();
const { config } = useConfigStore();
const devices = await navigator.mediaDevices.enumerateDevices();
const videoes = devices.filter((item) => item.kind === "videoinput");
console.log(videoes);
</script>

<style scoped lang="scss">
main {
  @apply bg-[#2c3e50] w-screen h-screen p-5;
}
</style>
