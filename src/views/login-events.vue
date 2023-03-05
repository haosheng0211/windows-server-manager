<template>
  <a-card title="登入紀錄">
    <template #extra>
      <a-link @click="refresh"> 刷新</a-link>
    </template>
    <a-table :columns="columns" :data="data" :loading="loading">
      <template #status="{ record }">
        <a-tag v-if="record.status === 1" color="green">成功</a-tag>
        <a-tag v-else color="red">失敗</a-tag>
      </template>
    </a-table>
  </a-card>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { Message } from "@arco-design/web-vue";

const data = ref([]);
const columns = [
  {
    title: "帳號",
    dataIndex: "username",
  },
  {
    title: "位置",
    dataIndex: "ip_address",
  },
  {
    title: "時間",
    dataIndex: "created_at",
  },
];
const loading = ref(false);
const refresh = async () => {
  try {
    loading.value = true;
    data.value = await window.electron.ipcRenderer.invoke("get-login-events");
  } catch (error) {
    Message.error(error.message);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  refresh();
});
</script>
