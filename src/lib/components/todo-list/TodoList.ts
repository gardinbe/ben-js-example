import { derived, Dynamic, component, html, reactive } from 'ben-js';
import { type Todo, TodoItem } from './TodoItem';
import { Btn } from '~/lib/components/Btn';

export const TodoList = component(() => {
  const todos = reactive(load());

  /**
   * Adds a new item to the list.
   */
  const add = (todo: Todo) => {
    todos.value = [...todos.value, todo];
  };

  /**
   * Removes the last item from the list.
   */
  const pop = () => {
    todos.value = todos.value.slice(0, -1);
  };

  return html`
    ${Dynamic(
      derived(() =>
        todos.value.map((todo) => ({
          key: todo.id,
          component: TodoItem(todo)
        }))
      )
    )}
    ${Btn(
      {
        variant: 'primary',
        onclick: () =>
          add({
            id: todos.value.length + 1,
            title: prompt('Please enter the title') ?? '',
            content: prompt('Please enter the content') ?? '',
            completed: false,
            date: new Date().toISOString(),
            priority: 0
          })
      },
      'Add'
    )}
    ${Btn(
      {
        onclick: pop,
        variant: 'primary'
      },
      'Remove last'
    )}
    ${Btn(
      {
        onclick: () => save(todos.value),
        variant: 'primary'
      },
      'Save'
    )}
    ${Btn(
      {
        onclick: () => {
          save(preset);
          todos.value = load();
        },
        variant: 'primary'
      },
      'Load preset'
    )}
  `;
});

/**
 * Loads todos from local storage.
 */
const load = () => {
  const raw = localStorage.getItem('todos');
  return raw ? (JSON.parse(raw) as Todo[]) : [];
};

/**
 * Saves todos to local storage.
 */
const save = (todos: Todo[]) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const preset: Todo[] = [
  {
    id: 1,
    title: 'Buy groceries',
    content: 'Milk, eggs, bread',
    completed: false,
    date: new Date().toISOString(),
    priority: 2
  },
  {
    id: 2,
    title: 'Read a book',
    content: 'Read "The Lord of the Rings" by J. R. R. Tolkien',
    completed: false,
    date: new Date().toISOString(),
    priority: 1
  },
  {
    id: 3,
    title: 'Go for a walk',
    content: 'Visit the dog park and take a walk',
    completed: false,
    date: new Date().toISOString(),
    priority: 0
  },
  {
    id: 4,
    title: 'Clean the house',
    content: 'Clean the kitchen, bathroom, and bedroom',
    completed: false,
    date: new Date().toISOString(),
    priority: 1
  },
  {
    id: 5,
    title: 'Watch a movie',
    content: 'Watch "The Shawshank Redemption" by Frank Darabont',
    completed: false,
    date: new Date().toISOString(),
    priority: 0
  },
  {
    id: 6,
    title: 'Do some coding',
    content: 'Learn TypeScript and React',
    completed: false,
    date: new Date().toISOString(),
    priority: 2
  },
  {
    id: 7,
    title: 'Go to the gym',
    content: 'Go to the gym and do some exercise',
    completed: false,
    date: new Date().toISOString(),
    priority: 0
  },
  {
    id: 8,
    title: 'Go for a run',
    content: 'Go for a run and get some exercise',
    completed: false,
    date: new Date().toISOString(),
    priority: 1
  },
  {
    id: 9,
    title: 'Go for a hike',
    content: 'Go for a hike and get some exercise',
    completed: false,
    date: new Date().toISOString(),
    priority: 2
  }
];
