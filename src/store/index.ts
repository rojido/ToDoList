import Vue from 'vue'
import Vuex from 'vuex'
import Task from "../models/Task";

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    tasksList: new Array<Task>(),   // Lista de tareas
  },
  mutations: {
    /* Añade una tarea a la lista */
    setTask(state, task) {
      state.tasksList.push(task);   
      localStorage.setItem('TaskList', JSON.stringify(state.tasksList));  
    },

    /* Elimina una tarea */
    deleteTask(state, task) {
      const index = state.tasksList.indexOf(task);
      if (index !== -1) {
        state.tasksList.splice(index, 1);
        localStorage.setItem('TaskList', JSON.stringify(state.tasksList));  
      }
    },

    /* Cambia el estado 'completado' de una tarea */
    changeTaskState(state, task) {
      state.tasksList.find(t => t.id === task.id)?.setCompleted(!task.completed);
      localStorage.setItem('TaskList', JSON.stringify(state.tasksList));  
    },

    /* Marca una tarea como importante o no */
    changeImportantState(state, task) {
      state.tasksList.find(t => t.id === task.id)?.setImportant(!task.important);
      localStorage.setItem('TaskList', JSON.stringify(state.tasksList));  
    },

    /* Rellena los datos de una tarea a partir de otra */
    editTask(state, task) {
      state.tasksList.find(t => t.id === task.id)?.fill(task);
      localStorage.setItem('TaskList', JSON.stringify(state.tasksList));  
    },

    /* Carga los datos provenientes de local storage */
    loadData(state, data) {
      data.forEach((item: Task) => {
        state.tasksList.push(new Task(item.id, item.name, item.important, item.priority, item.completed));
      });
    }
  },
  actions: {
    /* Añade una tarea a la lista */
    setTask({ commit}, task) {
      commit('setTask', task);
    },

    /* Elimina una tarea */
    deleteTask({commit}, task) {
      commit('deleteTask', task);
    },

    /* Cambia el estado 'completado' de una tarea */
    changeTaskState({commit}, task) {
      commit('changeTaskState', task);
    },

    /* Marca una tarea como importante o no */
    changeImportantState({commit}, task) {
      commit('changeImportantState', task);
    },    

    /* Rellena los datos de una tarea a partir de otra */
    editTask({commit}, task) {
      commit('editTask', task);
    },

    /* Carga los datos provenientes de local storage */
    loadDataFromLocalStorage({commit}) {
      const data: string | null = localStorage.getItem('TaskList');
      const tasksData = data ? JSON.parse(data) : null;
      if (tasksData !== null) {
          commit('loadData', tasksData);
          return;      
      }
      // Establece un valor inicial en local storage */
      localStorage.setItem('TaskList', JSON.stringify([]));
    }
  },
  modules: {
  }
})