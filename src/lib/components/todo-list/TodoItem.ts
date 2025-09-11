import { html, component, derived } from 'ben-js';
import { formatDate } from '~/lib/utils/format';

export type Todo = {
  id: number;
  title: string;
  content: string;
  completed: boolean;
  date: string;
  priority: number;
};

export const TodoItem = component<Todo>((props) => {
  return html`
    <div>
      <h3>${props.title}</h3>
      <div>${props.content}</div>
      <time datetime="${props.date}">${derived(() => formatDate(props.date.value))}</time>
    </div>
  `;
});
