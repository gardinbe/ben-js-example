import { type Route } from '@ben-js/router';
import { html } from 'ben-js';

import { TodoList } from '~/lib/components/todo-list/TodoList';

const TodoListPage: Route = () => html`
  <div class="std-container">
    <h1>Todo List</h1>
    ${TodoList()}
  </div>
`;

export default TodoListPage;
