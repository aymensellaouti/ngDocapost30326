import { inject, Injectable, Signal, signal } from "@angular/core";
import { Todo } from "../model/todo";
import { LoggerService } from "../../services/logger.service";
import { HttpClient } from "@angular/common/http";
import { APP_API } from "../../config/app-api.config";
import { TodoApi } from "../model/todo-api";
import { Observable } from "rxjs";
import { UUID_INJECTION_TOKEN } from "../../injection tokens/uuid.injection-token";

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  #todos = signal<Todo[]>([]);
  logger = inject(LoggerService);
  http = inject(HttpClient);
  uuid = inject(UUID_INJECTION_TOKEN);

  //todos = this.#todos.asReadonly();
  /**
   * elle retourne la liste des todos
   *
   * @returns Todo[]
   */
  getTodos(): Signal<Todo[]> {
    return this.#todos.asReadonly();
  }

  getTodosFromApi(): Observable<TodoApi[]> {
    // To be continued
    return this.http.get<TodoApi[]>(APP_API.todo);
  }

  /**
   *Elle permet d'ajouter un todo
   *
   * @param todo: Todo
   *
   */
  addTodo(todo: Todo): void {
    todo.id = this.uuid();
    this.#todos.update(
      (todos) => [...todos, todo]
    )
  }

  /**
   * Delete le todo s'il existe
   *
   * @param todo: Todo
   * @returns boolean
   */
  deleteTodo(todo: Todo): void {
    // Non pas bien il ne va pas notifier les consomateurs du signal this.#todos().filter((actualTodo) => actualTodo != todo);
    this.#todos.update(todos=>todos.filter((actualTodo) => actualTodo != todo));
  }

  /**
   * Logger la liste des todos
   * @returns void
   */
  logTodos() {
    this.logger.log(this.#todos());
  }
}
