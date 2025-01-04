import { createContext, useContext, useEffect, useState } from "react";

export const TodoListContext = createContext();

const TodoListProvider = ({ children }) => {

    const [todos, setTodos] = useState(() => {
        return JSON.parse(window.localStorage.getItem("todos")) ?? []
    })

    useEffect(() => {
        window.localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleComplited = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, complited: !todo.complited } : todo
        ));
    };

    const handleAddTodo = (newTodo) => {
        setTodos(prevState => [...prevState, newTodo])
   }

    return (
        <TodoListContext.Provider value={{ todos, handleComplited, handleAddTodo  }}>
            {children}
        </TodoListContext.Provider>
    )
}

export default TodoListProvider;

export const useTodoContext = () => useContext(TodoListContext)
