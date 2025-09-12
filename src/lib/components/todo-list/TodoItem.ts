import { ref, html, reactive } from 'ben-js';
import { formatDate } from '~/lib/utils/format';

export type Todo = {
  id: number;
  title: string;
  content: string;
  completed: boolean;
  date: string;
  priority: number;
};

export type TodoItemProps = Todo;

export const TodoItem = (props: TodoItemProps) => {
  const completed = reactive(false);
  const div = ref();

  div.on('click', () => {
    completed.value = !completed.value;
    props.completed = completed.value;
  });

  return html`
    <div
      ref="${div}"
      data-completed="${completed}"
    >
      <h3>${props.title}</h3>
      <div>${props.content}</div>
      <time datetime="${props.date}">${formatDate(props.date)}</time>
    </div>
  `;
};
