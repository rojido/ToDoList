<template>
  <div class="view_container">
    <h1 class="container_title">Editar tarea</h1>
    <task-form v-if="validTask" :taskData="editedTask" @submit="editItem" buttonLabel="Editar"></task-form>
    <p class="invalid_text" v-else>La tarea con ese identificador no existe</p>
  </div>
</template>

<script>
import Vue from 'vue'
import {mapState, mapActions} from 'vuex'
import TaskForm from '../components/TaskForm.vue'
import Task from "../models/Task";

export default Vue.extend({
    name: 'EditTask',
    components: {
      TaskForm,
    },

    computed: {
      ...mapState(['tasksList'])
    },

    data: () => ({
      validTask: false,
      editedTask: new Task('', '', false, null, false),      
    }),

    methods: {
      ...mapActions(['editTask']),

      /* Edita la tarea y vuelve a la home */
      editItem() {
        this.editTask(this.editedTask);
        this.$router.push('/');
      }
    },

    mounted() {
      // Si existe un ID correcto...
      if (this.$route.params.id !== undefined) {
        this.currentTask = this.tasksList.find(t => t.id === this.$route.params.id);
        if (this.currentTask !== undefined) {
          // Rellenamos el formulario con los datos de la tarea
          this.editedTask.fill(this.currentTask)
          this.validTask = true;
        }
      }
    },
  })
</script>

<style scoped lang="scss">
  @import "../assets/scss/variables.scss";
  @import "../assets/scss/globals.scss";

  .invalid_text {
    margin-top: 1em;
  }
</style>