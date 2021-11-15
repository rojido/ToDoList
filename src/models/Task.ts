/* Define la estructura de una tarea */
export default class Task {
    id: string;
    name: string;
    important: boolean;
    priority: number | null;
    completed: boolean;    

    constructor(id: string, name: string, important: boolean, priority: number | null, completed: boolean) {
        this.id = id;
        this.name = name;
        this.important = important;
        this.priority = priority;
        this.completed = completed;
    }

    setId(id: string) {
        this.id = id;
    }

    setName(name: string) {
        this.name = name;
    }

    setImportant(important: boolean) {
        this.important = important;
    }

    setPriority(priority: number | null) {
        this.priority = priority;
    }

    setCompleted(completed: boolean) {
        this.completed = completed;
    }

    reset() {
        this.id = '';
        this.name = '';
        this.important = false;
        this.priority = null;
        this.completed = false;
    }

    fill(fromTask: Task) {
        this.id = fromTask.id;
        this.name = fromTask.name;
        this.important = fromTask.important;
        this.priority = fromTask.priority;
        this.completed = fromTask.completed;
    }
}