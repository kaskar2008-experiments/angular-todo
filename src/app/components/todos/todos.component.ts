import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.styl']
})
export class TodosComponent implements OnInit {

  todos: ITodo[];

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  get todoLeftList() {
    return this.todos.filter(el => !el.completed);
  }

}
