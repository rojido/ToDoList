<template>
  <div class="view_container">
    <h1 class="container_title">Crear tarea</h1>
    <task-form :taskData="currentTask" @submit="createTask" buttonLabel="Crear"></task-form>
  </div>    
</template>


<script>
import Vue from 'vue';
import {mapActions} from 'vuex'
import TaskForm from '../components/TaskForm.vue'
import Task from "../models/Task";
import shortid from 'shortid'


export default Vue.extend({
  name: 'NewTask',
  components: {
    TaskForm,
  },   

  data: () => ({
    currentTask: new Task('', '', false, null, false),      
  }),

  methods: {
    ...mapActions(['setTask']),

    createTask() {
      this.currentTask.id = shortid.generate();
      this.setTask(this.currentTask);
      this.$router.push('/');
    }
  },
})
</script>


<style scoped lang="scss">
  @import "../assets/scss/variables.scss";
  @import "../assets/scss/globals.scss";
</style>