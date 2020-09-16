// @ts-nocheck
import { createServer, Model, RestSerializer } from 'miragejs';

export default function() {
  createServer({
    models: {
      todo: Model,
    },

    seeds(server) {
      server.create('todo', { title: 'Walk the dog', done: 'false' });
    },

    routes() {
      this.get('/api/v1/todo', (schema) => {
        return schema.todos.all();
      });

      this.post('/api/v1/todo', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        attrs.done = false;
        return schema.todos.create(attrs);
      });
    },

    serializers: {
      todo: RestSerializer,
    },
  });
}
