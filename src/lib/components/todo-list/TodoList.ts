import { component, flatten, html, List, reactive } from 'ben-js';

import { Btn } from '~/lib/components/Btn';

import { type Todo, TodoItem } from './TodoItem';

export const TodoList = component(() => {
  const todos = reactive(load().map(reactive));

  const set = (newTodos: Todo[]): void => {
    todos.value = newTodos.map(reactive);
  };

  /**
   * Adds a new item to the list.
   */
  const add = (newTodo: Todo): void => {
    todos.value = [...todos.value, reactive(newTodo)];
  };

  /**
   * Removes the last item from the list.
   */
  const pop = (): void => {
    todos.value = todos.value.slice(0, -1);
  };

  const component = html`
    <div class="flex flex-col gap-8">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
      >
        ${List(() =>
          todos.value.map((todo) => ({
            component: TodoItem({
              onToggle: () => {
                todo.value = {
                  ...todo.value,
                  completed: !todo.value.completed,
                };
              },
              todo,
            }),
            key: todo.value.id,
          })),
        )}
      </div>
      <div class="flex gap-4">
        ${Btn(
          {
            onClick: () => {
              add({
                completed: false,
                content: prompt('Please enter the content') ?? '',
                date: new Date().toISOString(),
                id: todos.value.length + 1,
                priority: 0,
                title: prompt('Please enter the title') ?? '',
              });
            },
            variant: 'primary',
          },
          'Add',
        )}
        ${Btn(
          {
            onClick: pop,
            variant: 'primary',
          },
          'Remove last',
        )}
        ${Btn(
          {
            onClick: () => {
              save(flatten(todos));
            },
            variant: 'primary',
          },
          'Save',
        )}
        ${Btn(
          {
            onClick: () => {
              set(preset);
            },
            variant: 'primary',
          },
          'Load preset',
        )}
      </div>
    </div>
  `;

  const logTestMessage = (): void => {
    console.log('Hello world!');
  };

  component.hooks.mounted(() => {
    addEventListener('click', logTestMessage);
  });

  component.hooks.unmounted(() => {
    removeEventListener('click', logTestMessage);
  });

  return component;
});

/**
 * Loads todos from local storage.
 */
const load = (): Todo[] => {
  const raw = localStorage.getItem('todos');
  return raw ? (JSON.parse(raw) as Todo[]) : [];
};

/**
 * Saves todos to local storage.
 */
const save = (todos: Todo[]): void => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const preset: Todo[] = [
  {
    completed: false,
    content: 'Milk, eggs, bread',
    date: new Date().toISOString(),
    id: 1,
    priority: 2,
    title: 'Buy groceries',
  },
  {
    completed: false,
    content: 'Read "The Lord of the Rings" by J. R. R. Tolkien',
    date: new Date().toISOString(),
    id: 2,
    priority: 1,
    title: 'Read a book',
  },
  {
    completed: false,
    content: 'Visit the dog park and take a walk',
    date: new Date().toISOString(),
    id: 3,
    priority: 0,
    title: 'Go for a walk',
  },
  {
    completed: false,
    content: 'Clean the kitchen, bathroom, and bedroom',
    date: new Date().toISOString(),
    id: 4,
    priority: 1,
    title: 'Clean the house',
  },
  {
    completed: false,
    content: 'Watch "The Shawshank Redemption" by Frank Darabont',
    date: new Date().toISOString(),
    id: 5,
    priority: 0,
    title: 'Watch a movie',
  },
  {
    completed: false,
    content: 'Learn TypeScript and React',
    date: new Date().toISOString(),
    id: 6,
    priority: 2,
    title: 'Do some coding',
  },
  {
    completed: false,
    content: 'Go to the gym and do some exercise',
    date: new Date().toISOString(),
    id: 7,
    priority: 0,
    title: 'Go to the gym',
  },
  {
    completed: false,
    content: 'Go for a run and get some exercise',
    date: new Date().toISOString(),
    id: 8,
    priority: 1,
    title: 'Go for a run',
  },
  {
    completed: false,
    content: 'Go for a hike and get some exercise',
    date: new Date().toISOString(),
    id: 9,
    priority: 2,
    title: 'Go for a hike',
  },
];
