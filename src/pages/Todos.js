import React from "react";

export default class Featured extends React.Component {

    constructor() {
        super();
        this.state = {
            todos: [
                {
                    id: 123123123,
                    text: "Go Shopping",
                    complete: false
                },
                {
                    id: 321321,
                    text: "Pay Bills",
                    complete: false
                },
            ],
        }
    }

    render() {
        const { todos } = this.state; 

        const TodoComponents = todos.map((todo) => {
            return <Todo key={todo.id} {...todo} /> 
        });

        return (
            <div>
                <h1>Todos</h1>
                <ul>{TodoComponents}</ul>
            </div>
        )
    }
}