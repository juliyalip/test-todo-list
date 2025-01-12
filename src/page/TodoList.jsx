import Form from '../components/Form/Form';
import Container from '../components/Container/Container'
import List from '../components/List/List';
import SectionControl from '../components/SectionControl/SectionControl';

import styles from './TodoList.module.css'

const TodoList = () => {

    return (
        <div className={styles.banerHero}>
            <Container>
                <Form />
                <List />
                <SectionControl />
            </Container>
        </div>)
};

export default TodoList