import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.styl']
})
export class TodosComponent implements OnInit {

  todos: ITodo[];

  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        title: 'Todo 1',
        completed: false
      },
      {
        id: 2,
        title: 'Todo 2',
        completed: true
      },
      {
        id: 3,
        title: 'Todo 3',
        completed: false
      },
      {
        id: 4,
        title: 'Todo 4',
        completed: false
      },
    ];
  }

}
