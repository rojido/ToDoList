<template>
    <div class="task_card" :class="cardBorderClass">

        <div class="task_info">
            <div class="task_name">{{taskData.name}}</div>
            <div class="task_buttons">  
                <v-btn class="task_button" @click="changeImportant()" icon outlined color="orange" small>
                    <v-icon>{{taskData.important ? 'mdi-star' : 'mdi-star-outline'}}</v-icon>
                </v-btn>             
                <v-btn class="task_button" @click="editItem()" icon outlined color="grey lighten-1" small>
                    <v-icon>mdi-playlist-edit</v-icon>
                </v-btn>
                <v-btn class="task_button" @click="deleteItem()" icon outlined color="red lighten-2" small>
                    <v-icon>mdi-delete</v-icon>
                </v-btn>

            </div>
        </div>
        
        <div class="task-state">        
            <v-btn class="" fab @click="changeState()" :outlined="taskData.completed" color="success" small>
                <v-icon dark>
                    {{taskData.completed ? 'mdi-minus-box' : 'mdi-clipboard-check'}}
                </v-icon>
            </v-btn>
        </div>

    </div>
</template>



<script>
import Vue from 'vue'
import {mapActions} from 'vuex'
import Task from '../models/Task';

export default Vue.extend({
    name: 'Task',
    props: {
        taskData: Task
    },

    data: () => ({
      priorityNames: ['high', 'medium', 'low'],      
    }),

    computed: {
        cardBorderClass() {           
            return this.taskData.completed ? 'completed' 
                    : `${this.priorityNames[this.taskData.priority-1]}-priority`;            
        }
    },

    methods: {
        ...mapActions(['changeTaskState', 'changeImportantState', 'deleteTask']),

        /* Cambia el estado de completado */
        changeState() {      
            this.changeTaskState(this.taskData);            
        },

        /* Cambia el estado de importante */
        changeImportant() {
            this.changeImportantState(this.taskData);
        },

        /* Elimina la tarea */
        deleteItem() {
            this.deleteTask(this.taskData);
        },

        /* Edita la tarea */
        editItem() {
            this.$router.push(`/edit/${this.taskData.id}`);
        }
    }
  })
</script>


<style scoped lang="scss">
@import "../assets/scss/variables.scss";

.task_card {
    width: 100%;
    min-height: 110px;    
    margin: 1em;
    border-radius: 15px;
    padding: 1em;
    border: 2px solid rgba(210, 210, 210, 0.8);
    transition: background-color 0.6s linear;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;   

    &.completed {
        background-color: #DCEDC8;
        border-left: 4px solid green;        
    }
    &.high-priority {        
        border-left: 4px solid red;
    }
    &.medium-priority {        
        border-left: 4px solid orange;
    }
    &.low-priority {        
        border-left: 4px solid blue;
    }
}

.task_info {    
    padding-left: 1em;
}

.task_name {
    margin-bottom: 1em;
    font-size: 16px;
}

.task_button {
    margin-right: 1em;
}

@media screen and (max-width: $media-lg) {
    .task_card {
        width: 80%;
    }
}

@media screen and (max-width: $media-md) {
    .task_card {
        width: 90%;
    }
}

@media screen and (max-width: $media-sm) {
    .task_card {
        width: 90%;
    }
    .task_name { 
        font-size: 14px;
    }
    .task_button {
        margin-right: 4px;
    }
}
</style>