import { Component, inject, signal } from "@angular/core";
import { Todo } from "../model/todo";
import { TodoService } from "../service/todo.service";
import { FormsModule } from "@angular/forms";
import { TodoApi } from "../model/todo-api";


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  imports: [FormsModule],
  // Crée moi ma propre instance
  providers: [TodoService],
})
export class TodoComponent {
  // Declarative programming
  todo = signal(new Todo());
  todoService = inject(TodoService);
  todos = this.todoService.getTodos();
  todosApi = signal<TodoApi[]>([]);
  constructor() {
    this.todoService.getTodosFromApi().subscribe({
      next: (todosApi) => (this.todosApi.set(todosApi)),
    });
  }
  addTodo() {
    this.todoService.addTodo(this.todo());
    this.todo.set(new Todo());
  }
  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
