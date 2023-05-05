<script setup lang="ts">
import Camera from "./components/Camera.vue";
import Setting from "./components/Setting.vue";
import {
  Setting as SettingIcon,
  CameraFive,
  InnerShadowUp,
  Square,
} from "@icon-park/vue-next";
import { useConfigStore } from "./stores/useConfigStore";
import useDrag from "./composables/useDrag";
const { drag } = useDrag();
drag.run();
// import useConfig from "./composables/useConfig";
// const { config, updateConfig } = useConfig();
const { config } = useConfigStore();
const quit = (): void => {
  window.api.quit();
};
</script>

<template>
  <Suspense>
    <main class="relative group" @contextmenu="quit">
      <section>
        <SettingIcon
          v-if="config.page == 'camera'"
          theme="outline"
          size="24"
          fill="#7ed321"
          class="absolute left-1/2 -translate-x-1/2 mt-3 z-50 hidden group-hover:block"
          @click="config.page = 'setting'"
        />
        <CameraFive
          v-if="config.page == 'setting'"
          theme="outline"
          size="24"
          fill="#7ed321"
          class="absolute left-1/2 -translate-x-1/2 mt-3 z-50 hidden group-hover:block"
          @click="config.page = 'camera'"
        />
        <InnerShadowUp
          v-if="!config.rounded"
          theme="outline"
          size="24"
          fill="#7ed321"
          class="absolute left-1/2 -translate-x-1/2 bottom-3 z-50 hidden group-hover:block"
          @click="config.rounded = !config.rounded"
        />
        <Square
          v-if="config.rounded && config.page === 'camera'"
          theme="outline"
          size="24"
          fill="#7ed321"
          class="absolute left-1/2 -translate-x-1/2 bottom-3 z-50 hidden group-hover:block"
          @click="config.rounded = !config.rounded"
        />
      </section>
      <section>
        <Camera v-if="config.page == 'camera'" />
        <Setting v-else />
      </section>
    </main>
  </Suspense>
</template>

<style lang="less"></style>
