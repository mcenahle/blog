<script setup>
import { Layout } from "vuepress-theme-plume/client";
import PageContextMenu from "vuepress-theme-plume/features/PageContextMenu.vue";
import CWDComments from "../components/CWDComments.vue";
</script>

<template>
  <Layout>
    <template #doc-title-after>
      <PageContextMenu />
    </template>

    <template #doc-after>
      <CWDComments />
    </template>
  </Layout>
</template>
