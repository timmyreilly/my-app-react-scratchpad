import { EventEmitter } from "events";

class TodoStore extends EventEmitter {
    constructor(){
        this.todos= []; 
    }

    getAll() {
        return this.todos; 
    }
}

const todoStore = new TodoStore; 

export default todoStore; 