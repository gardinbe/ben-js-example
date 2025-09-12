import { cn, component, derived, html, ref } from 'ben-js';

import { formatDate } from '~/lib/utils/format';

export type Todo = {
  completed: boolean;
  content: string;
  date: string;
  id: number;
  priority: number;
  title: string;
};

export type TodoItemProps = {
  onToggle: () => void;
  todo: Todo;
};

export const TodoItem = component<TodoItemProps>((props) => {
  const todo = props.todo;
  const btn = ref();
  btn.on('click', props.onToggle.value);

  return html`
    <button
      ref="${btn}"
      class="${cn(
        'text-start flex flex-col p-4 bg-slate-700 hover:bg-slate-600 cursor-pointer',
        derived(() => todo.value.completed && 'line-through'),
      )}"
    >
      <div class="text-2xl font-bold">${todo.value.title}</div>
      <div>${todo.value.content}</div>
      <time datetime="${todo.value.date}">${derived(() => formatDate(todo.value.date))}</time>
    </button>
  `;
});
