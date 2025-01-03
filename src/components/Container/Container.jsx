import styles from './Container.module.css'

const Container = ({children})=>{
    return(
        <div className={styles.base}>{children}</div>
    )
}

export default Container