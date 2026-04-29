import { defineStore } from 'pinia';
import axios from 'axios';

export const useTasksStore = defineStore('tasks', {
  state: () => ({ tasks: [], loading: false }),
  actions: {
    async fetchTasks() {
      this.loading = true;
      const res = await axios.get('http://localhost:8001/tasks');
      this.tasks = res.data;
      this.loading = false;
    }
  }
});
