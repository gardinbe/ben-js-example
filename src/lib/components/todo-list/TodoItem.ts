import { ref, html, component, derived } from 'ben-js';
import { formatDate } from '~/lib/utils/format';

export const TodoItem = component<Todo>((props) => {
  const div = ref();

  div.on('click', () => {
    props.completed.value = !props.completed.value;
  });

  return html`
    <div
      ref="${div}"
      data-completed="${props.completed}"
    >
      <h3>${props.title}</h3>
      <div>${props.content}</div>
      <time datetime="${props.date}">${derived(() => formatDate(props.date.value))}</time>
    </div>
  `;
});

export type Todo = {
  id: number;
  title: string;
  content: string;
  completed: boolean;
  date: string;
  priority: number;
};
