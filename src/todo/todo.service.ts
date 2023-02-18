import { Injectable, NotFoundException } from '@nestjs/common';
import { TodoModel } from './TodoModel';
import { CommonModule } from '../common/common.module';

@Injectable()
export class TodoService {
  private todos = [];
  getTodos() {
    return this.todos;
  }
  addTodo() {
    const todo = new TodoModel('this is a name ', 'this is a description');
    this.todos.push(todo);
  }
  getTodo(id: string) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) return todo;
    else throw new NotFoundException('Todo not found');
  }
  deleteTodo(id: string) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      this.todos.indexOf(todo);
      this.todos.splice(this.todos.indexOf(todo), 1);
      console.log('deleted');
    } else throw new NotFoundException('Todo not found');
  }
  updateTodo(name: string, description: string, id: string) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.name = name;
      todo.description = description;
      console.log('updated');
    } else throw new NotFoundException('Todo not found');
  }
}
