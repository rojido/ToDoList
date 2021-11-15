<template>
  <div class="form_container">
      <v-form
          ref="form"
          v-model="valid"
          lazy-validation
      >
          <v-text-field
            v-model="taskData.name"
            :counter="20"
            :rules="nameRules"
            label="Nombre:"
            required
          ></v-text-field>

          <v-select
            v-model="taskData.priority"
            :items="items"
            item-text="name"
            item-value="id"
            :rules="[v => !!v || 'Debes seleccionar una prioridad']"
            label="Prioridad"
            required                   
          ></v-select>

          <v-checkbox
              v-model="taskData.important"
              label="Importante"        
          ></v-checkbox>

          <v-row justify="end" class="mt-2 mb-2">           
            <v-btn
                color="error"
                class="mr-4"
                @click="goHome()"
                >
                Cancelar
            </v-btn>

            <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="processTask()"
                >
                {{buttonLabel}}
            </v-btn>
          </v-row>
      </v-form>
  </div>

</template>


<script>
import Vue from 'vue'
import Task from '../models/Task';

 export default Vue.extend({
    name: 'TaskForm',
    props: {
      taskData: Task,
      buttonLabel: String
    },

    data: () => ({
      valid: false,
      nameRules: [
        v => !!v || 'Debes introducir un nombre',
        v => (v && v.length <= 20) || 'El nombre debe ser de 20 caracteres máximo',
      ],           
      items: [
        { name: 'Alta', id: 1 },
        { name: 'Normal', id: 2 },
        { name: 'Baja', id: 3 },
      ],
    }),
    
    methods: {
      /* Procesa el formulario */
      processTask() {
        if (this.$refs.form.validate()) {                             
          this.$emit('submit', this.taskData)
        }
      },

      /* Vuelve a la vista principal */
      goHome() {
        this.$router.push('/');
      },
    },
  })
</script>


<style scope lang="scss">
@import "../assets/scss/variables.scss";

.form_container {
    width: 40%;
    margin: 0 auto;
    border: 2px solid rgba(147, 147, 147, 0.8);
    border-radius: 16px;
    padding: 1em;
}

@media screen and (max-width: $media-xl) {
  .form_container {
    width: 60%;
  }
}

@media screen and (max-width: $media-lg) {
  .form_container {
    width: 65%;
  }
}

@media screen and (max-width: $media-md) {
  .form_container {
    width: 85%;
  }
}

@media screen and (max-width: $media-sm) {
  .form_container {
    width: 100%;
    padding: 1em;
  }
}
</style>