import { useState } from 'react';
import Form from '../components/Form/Form';
import Container from '../components/Container/Container'
import List from '../components/List/List';

import styles from './TodoList.module.css'

const TodoList = () => {

    const [todos, setTodos] = useState([])

    const handleAddTodo = (newTodo) => {
         setTodos(prevState => [...prevState, newTodo])
    }

    return (
        <div className={styles.banerHero}>
            <Form addTodo={handleAddTodo} />
            <Container>
            <List items={todos}  onComplited={() =>{}}/>
            </Container>
         
        </div>)
};

export default TodoList