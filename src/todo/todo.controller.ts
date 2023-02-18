import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { TodoDto } from './Dto/TodoDto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  getTodos() {
    return this.todoService.getTodos();
  }

  @Post()
  addTodo() {
    this.todoService.addTodo();
  }

  @Get(':id')
  getTodo(id: string) {
    this.todoService.getTodo(id);
  }

  @Delete(':id')
  deleteTodo(id: string) {
    this.todoService.deleteTodo(id);
  }

  @Put(':id/:name/:description')
  updateTodo(name: string, description: string, id: string) {
    this.todoService.updateTodo(name, description, id);
  }
}
