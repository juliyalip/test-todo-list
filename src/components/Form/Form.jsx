import React, { useState } from 'react'
import styles from './Form.module.css'

const Form = ({ addTodo }) => {
    const [value, setValue] = useState('')

    const handleChange = e => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefoult();
        if (!value) {
            return alert('The field can not be empty')
        }

        addTodo(value)
        setValue('')
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Todo</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.form}>
            {value && <span className={styles.labelActiveForm}></span>}
                <input value={value} type="text" onChange={handleChange} className={styles.input} placeholder='create new todo'/>
                </div>
            </form>
        </div>



    )
}


export default Form;

