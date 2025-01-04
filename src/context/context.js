import { createContext, useContext, useEffect, useState, useMemo } from "react";

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
    



      const incompleteCount = useMemo(
          () => {
              return todos.filter(todo => !todo.complited).length;
          },
          [todos]
      );

      const complitedCount = useMemo(
        () => todos.reduce(
          (total, todo) => (todo.complited ? total + 1 : total),
          0
        ),
        [todos]
      );
      

    const handleAddTodo = (newTodo) => {
        setTodos(prevState => [...prevState, newTodo])
   }

   const deleteComplitedTodos = () => {
    setTodos(todos => todos.filter(todo => !todo.complited));
};


    return (
        <TodoListContext.Provider value={{ todos, handleComplited, handleAddTodo , deleteComplitedTodos, incompleteCount, complitedCount}}>
            {children}
        </TodoListContext.Provider>
    )
}

export default TodoListProvider;

export const useTodoContext = () => useContext(TodoListContext)
