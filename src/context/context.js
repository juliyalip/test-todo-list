import { createContext, useContext, useEffect, useState } from "react";
import { nanoid } from 'nanoid';
export const TodoListContext = createContext();

const TodoListProvider = ({ children }) => {

    const [todos, setTodos] = useState(() => {
        return JSON.parse(window.localStorage.getItem("todos")) ?? []
    })

      const [todoId, setTodoId] = useState(() => nanoid())
      const [formValue, setFormValue] = useState('')

    useEffect(() => {
        window.localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

   
    const deleteComplitedTodos = () => {
        setTodos(todos => todos.filter(todo => !todo.complited));
    };

    const handleComplited = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, complited: !todo.complited } : todo
        ));
    };

    const handleEditTodo = (id) => {
        const editTodo = todos.find(todo => todo.id === id);
        const filteredTodos = todos.filter(todo => todo.id !== id)
        setTodos(filteredTodos)
     setFormValue(editTodo.text)
    }

   const handleSubmit = e =>{
    e.preventDefault()
    if (!formValue) {
        return alert('The field can not be empty')
    }
   const newTodo = {
    text: formValue,
    id: todoId,
    complited: false
   };
   setTodos(prevState => [...prevState, newTodo])
    setFormValue('');
    setTodoId(nanoid())
   }

    return (
        <TodoListContext.Provider value={{ todos, handleComplited, handleEditTodo, deleteComplitedTodos, formValue , setFormValue, handleSubmit}}>
            {children}
        </TodoListContext.Provider>
    )
}

export default TodoListProvider;

export const useTodoContext = () => useContext(TodoListContext)
