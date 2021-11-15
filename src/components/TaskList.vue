<template>
  <div class="tasklist_container">
    <h1 class="tasklist_title">Lista de tareas</h1> 
      
    <task v-for="(task, index) in tasksList"
        :key="index"
        :taskData="task"        
    ></task>
  </div>  
</template>


<script>
import Vue from 'vue'
import Task from './Task.vue'

export default Vue.extend({
  name: 'TaskList',
  components: { Task },
  props: {
    tasksList: Array
  },    
})
</script>

<style scoped lang="scss">
@import "../assets/scss/variables.scss";

.tasklist_container {
  position: relative;
  width: 50%;    
  margin: 0 auto;
  padding: 2em;   
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.tasklist_title {
  font-size: 28px;
  margin-bottom: 1em;
}

@media screen and (max-width: $media-xl) {
  .tasklist_container {
    width: 65%;
  }
}

@media screen and (max-width: $media-lg) {
  .tasklist_container {
    width: 80%;
  }
}

@media screen and (max-width: $media-md) {
  .tasklist_container {
    width: 100%;
  }
  .tasklist_title {
    font-size: 22px;
  }
}

@media screen and (max-width: $media-sm) {
  .tasklist_container {
    padding: 1em;
  }
}
</style>