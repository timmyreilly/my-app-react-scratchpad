import { EventEmitter } from "events";

import dispatcher from "../dispatcher"; 

class TodoStore extends EventEmitter {
    constructor(){
        super(); 
        this.todos= [
            {
                id: 123123123,
                text: "Go Shopping",
                complete: false
            },
            {
                id: 321321,
                text: "Pay Water Bills",
                complete: false
            },
        ]; 
    }

    createTodo(text) {
        const id = Date.now(); 

        this.todos.push({
            id, 
            text,
            complete: false, 
        });

        this.emit("change"); 
    }

    getAll() {
        return this.todos; 
    }

    handleActions(action){
        switch(action.type){
            case "CREATE_TODO": {
                this.createTodo(action.text); 
            }
        }
        console.log("TodoStore received an action", action)
    }
}

const todoStore = new TodoStore; 
dispatcher.register(todoStore.handleActions.bind(todoStore)); 

window.todoStore = todoStore; 
window.dispatcher = dispatcher; 
export default todoStore; 