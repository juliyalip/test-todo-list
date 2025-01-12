import { useTodoContext } from '../../context/context';
import Item from '../Item/Item'
import styles from './List.module.css'

const List = () => {

  const { todos, handleComplited, handleEditTodo } = useTodoContext();

  return (
    todos.length > 0 && (
      <ul className={styles.container}>
        {todos.map((todo) => (
          <Item
            key={todo.id}
            item={todo}
            onComplited={handleComplited}
            onEdit={handleEditTodo}
          />
        ))}
      </ul>
    )
  )
}

export default List

