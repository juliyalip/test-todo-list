import React from 'react'
import { useTodoContext } from '../../context/context';
import styles from './Form.module.css'

const Form = () => {

    const { formValue, setFormValue, handleSubmit } = useTodoContext()

    const handleChageFormValue = e => {
        setFormValue(e.target.value)
    }

    return (
        <>
            <h1 className={styles.title}>Todo</h1>
            <form onSubmit={handleSubmit}>
                <div className={`${styles.form}  ${formValue ? styles.activeForm : ''}`}>
                    <span className={styles.labelActiveForm} style={{ opacity: formValue ? 1 : 0 }}></span>
                    <input value={formValue} type="text" onChange={handleChageFormValue} className={styles.input} placeholder='create new todo' />
                </div>
            </form>
        </>

    )
}

export default Form;

