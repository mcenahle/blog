<template>
  <div ref="container" style="margin-top: 40px"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const container = ref(null);
let comments;

onMounted(async () => {
  const { default: CWDComments } = await import("cwd-widget");

  comments = new CWDComments({
    el: container.value,
    apiBaseUrl: "https://api.cwd.mcenahle.page",
    postSlug: window.location.pathname,
    siteId: "default",
  });

  comments.mount();
});

onUnmounted(() => {
  comments?.unmount();
});
</script>
