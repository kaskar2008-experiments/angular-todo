import { Component, OnInit, Input } from '@angular/core';
import { ITodo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.styl']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: ITodo;

  constructor() { }

  ngOnInit() {
  }

  setClassList() {
    return {
      'todo-item': true,
      checked: this.todo.completed
    };
  }

  onCheck(todo: ITodo) {
    todo.completed = !todo.completed;
  }

}
