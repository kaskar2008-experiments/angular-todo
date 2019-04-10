import { Injectable } from '@angular/core';
import { ITodo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos(): ITodo[] {
    return [
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
