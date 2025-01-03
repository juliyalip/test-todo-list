import React, { useState } from 'react'
import { nanoid } from 'nanoid';
import styles from './Form.module.css'

const Form = ({ addTodo }) => {
    const [value, setValue] = useState('')

    const handleChange = e => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!value) {
            return alert('The field can not be empty')
        }
        addTodo({text: value, id: nanoid(), complited: false})
        setValue('')
    }

    console.log(typeof(''))

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Todo</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.form}>
             <span className={styles.labelActiveForm} style={{visibility: value ? 'visible' : 'hidden' }}></span>
                <input value={value} type="text" onChange={handleChange} className={styles.input} placeholder='create new todo'/>
                </div>
            </form>
        </div>



    )
}


export default Form;

