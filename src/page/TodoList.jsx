import { useState, useEffect } from 'react';
import { useTodoContext } from '../context/context';
import Form from '../components/Form/Form';
import Container from '../components/Container/Container'
import List from '../components/List/List';

import styles from './TodoList.module.css'

const TodoList = () => {

 const {todos, handleComplited, handleAddTodo } = useTodoContext()

  
    return (
        <div className={styles.banerHero}>
             <Container>
            <Form addTodo={handleAddTodo} />
           
            <List items={todos}  onComplited={handleComplited}/>
            </Container>
         
        </div>)
};

export default TodoList