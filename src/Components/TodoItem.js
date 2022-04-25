/* eslint-disable react/destructuring-assignment,react/no-access-state-in-setstate
  */
import React from 'react';
import styles from './TodoItem.module.scss';

const completedStyle = {
  fontStyle: 'italic',
  color: '#595959',
  opacity: 0.4,
  textDecoration: 'line-through',
};
function TodoItem(props) {
  const { completed, id, title } = props.todo;
  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={completed}
        onChange={() => props.handleChangeProps(id)}
      />
      <button onClick={() => props.deleteTodoProps(id)} type="button" id="delete">
        Delete
      </button>
      <span style={completed ? completedStyle : null}>
        {title}
      </span>
    </li>
  );
}

export default TodoItem;
