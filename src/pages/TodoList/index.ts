import { html } from 'ben-js';
import { TodoList } from '~/lib/components/todo-list/TodoList';

const TodoListPage = () => {
  return html`
    <div class="std-container">
      <h1>Todo List</h1>
      ${TodoList()}
    </div>
  `;
};

export default TodoListPage;
