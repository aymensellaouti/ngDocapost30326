import { inject, Injectable, Signal, signal } from "@angular/core";
import { Todo } from "../model/todo";
import { LoggerService } from "../../services/logger.service";

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  #todos = signal<Todo[]>([]);
  logger = inject(LoggerService);
  //todos = this.#todos.asReadonly();
  /**
   * elle retourne la liste des todos
   *
   * @returns Todo[]
   */
  getTodos(): Signal<Todo[]> {
    return this.#todos.asReadonly();
  }

  /**
   *Elle permet d'ajouter un todo
   *
   * @param todo: Todo
   *
   */
  addTodo(todo: Todo): void {
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
