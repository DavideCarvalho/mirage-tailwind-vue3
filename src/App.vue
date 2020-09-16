<template>
  <div>
    <h1>Your todos:</h1>
  </div>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

interface Todo {
  id: number;
  title: string;
  done: false;
}

interface State {
  todos: Todo[];
}

function useTodosState() {
  const state = reactive<State>({
    todos: [],
  });

  return toRefs(state);
}

function getTodos(): Promise<Todo[]> {
  return fetch('/api/v1/todo')
    .then((res) => res.json())
    .then((res) => res.todos);
}

export default defineComponent({
  name: 'App',
  setup() {
    const state = useTodosState();

    getTodos().then((todos) => {
      state.todos.value = todos;
    });

    return { ...state };
  },
});
</script>
