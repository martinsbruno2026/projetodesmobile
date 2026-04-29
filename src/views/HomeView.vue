<script setup>
import { onMounted } from 'vue';
import { useTasksStore } from '../stores/tasks';

const store = useTasksStore();
onMounted(() => store.fetchTasks());
</script>

<template>
  <div>
    <h1>Tarefas</h1>
    <div v-if="store.loading">Carregando...</div>
    <div v-else>
      <div v-for="t in store.tasks" :key="t.id">
        {{ t.title }}
      </div>
    </div>
  </div>
</template>
