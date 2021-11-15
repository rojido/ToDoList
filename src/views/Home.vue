<template>
  <div class="home_container" :class="tasksList.length > 0 ? 'top' : 'center'">

    <div class="empty_info" v-if="tasksList.length === 0">
      <v-img 
        :src="require('../assets/images/EmptyTasks.png')"
        class="empty_img"
        contain
        height="200"
      />
      <p class="empty_text">Aún no tienes tareas. Prueba a crear una...</p>
    </div>

    <task-list v-else :tasksList="tasksList"/>

    <div class="new_task_container">
      <v-btn fab color="primary" @click="newTask()">
        <v-icon dark >
          mdi-plus-box
        </v-icon>
      </v-btn>
    </div>

  </div>  
</template>

<script lang="ts">
import Vue from 'vue'
import {mapState} from 'vuex'
import TaskList from '../components/TaskList.vue'


export default Vue.extend({
  name: 'Home',  
  components: {
    TaskList,
  },

  computed: {
    ...mapState(['tasksList']),
  },

  methods: {
      newTask() {
        this.$router.push('/new');
      }      
  },
})
</script>

<style scoped lang="scss">
  @import "../assets/scss/variables.scss";

  .home_container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: $main-bg-color;

    display: flex;
    flex-direction: column;
    align-items: center;

    &.center {
      justify-content: center;
    }
    &.top {
      justify-content: flex-start;
    }
  }

  .empty_info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .empty_img {
    margin-bottom: 1em;
  }

  .empty_text {
    font-size: 16px;
  }

  .new_task_container {
    margin: 1em;
  }
</style>
