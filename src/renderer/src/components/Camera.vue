<template>
  <main
    class="w-screen h-screen flex"
    :class="{ 'rounded-full': config.rounded }"
    :style="`border:solid
    ${config.borderWidth}
    ${config.borderColor}`"
  >
    <video class="object-cover" :class="{ 'rounded-full': config.rounded }"></video>
  </main>
</template>

<script setup lang="ts">
// import useConfig from "@renderer/composables/useConfig";
import { useConfigStore } from "@renderer/stores/useConfigStore";
import { onMounted } from "vue";
// const enumeratorPromise = navigator.mediaDevices.enumerateDevices();
// enumeratorPromise.then((res) => {
//   const videoInput = res.filter((item) => {
//     return item.kind == "videoinput";
//   });
// });
// const { config } = useConfig();
const { config } = useConfigStore();
onMounted(() => {
  const video = document.querySelector("video")!;
  const constraints = {
    audio: false,
    video: {
      deviceId: config.deviceId,
    },
  } as MediaStreamConstraints;

  navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
    // const videoTracks = stream.getVideoTracks();
    video.srcObject = stream;
    video.play();
  });
});
</script>

<style scoped lang="scss"></style>
