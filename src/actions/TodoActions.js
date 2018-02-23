import dispatcher from "../dispatcher";

export function createTodo(text) {
    dispatcher.dispatch({
        type: "CREATE_TODO",
        text,
    });
}

export function deleteTodo(text) {
    dispatcher.dispatch({
        type: "DELETE_TODO",
        text,
    });
}

export function reloadTodos() {

    dispatcher.dispatch({ type: "FETCH_TODOS" });

    setTimeout(() => {
        dispatcher.dispatch({
            type: "RECEIVE_TODOS", todos: [
                {
                    id: 89898,
                    text: "Go Buy Stuff",
                    complete: false

                },
                {
                    id: 80808,
                    text: "Call your mom",
                    complete: true
                }
            ]
        });
    }, 1000);
}
