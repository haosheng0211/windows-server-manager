<template>
  <a-layout class="basic-layout">
    <a-layout-header>
      <a-menu
        mode="horizontal"
        :default-selected-keys="selectedKeys"
        @menu-item-click="onMenuItemClick"
      >
        <a-menu-item key="/login-events">登入紀錄</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content>
      <router-view />
    </a-layout-content>
  </a-layout>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const selectedKeys = computed(() => [route.path]);
const onMenuItemClick = (key) => {
  router.push({ path: key });
};
</script>

<style>
.basic-layout.arco-layout {
  background: var(--color-fill-2);
  min-height: 100vh;
}

.basic-layout.arco-layout .arco-layout-header {
  background-color: var(--color-bg-2);
  border-bottom: 1px solid var(--color-border);
  position: fixed;
  width: 100%;
  z-index: 1;
  top: 0;
  left: 0;
}

.basic-layout.arco-layout .arco-layout-content {
  padding: 76px 16px 16px;
}
</style>
