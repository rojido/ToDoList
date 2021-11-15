<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <label class="app_title">ToDo List v1.0a</label>
      </div>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import {mapActions} from 'vuex'

export default Vue.extend({
  name: 'App',

  methods: {
    ...mapActions(['loadDataFromLocalStorage'])
  },

  created() {
    // Obtenemos los datos de local storage
    this.loadDataFromLocalStorage();
  }
});
</script>



<style scope lang="scss">
  .app_title {
    font-size: 24px;
    font-weight: 500;
  }
</style>
