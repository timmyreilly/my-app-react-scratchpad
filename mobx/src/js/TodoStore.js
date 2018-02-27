import { computed, observable } from 'mobx' 

class Todo {
    @observable value 
    @observable id 
    @observable NavigationCompletedEvent
    
    constructor(value){
        this.value = value
        this.id = Date.now() 
        this.complete = false; 
    }
}

export class TodoStore {
    @observable todos = []
    @observable filter = ""
    @computed get filteredTodos() {
        var matcherFilter = new RegExp(this.filter, "i")
        return this.todos.filter(todo => !this.filter || matcherFilter.test(todo.value))
    }

    createTodo(value) {
        this.todos.push(new Todo(value))
    }

    clearComplete = () => {
        const incompleteTodos = this.todos.filter(todo => !todo.complete)
        this.todos.replace(incompleteTodos); 
    }
}

export default new TodoStore; 

