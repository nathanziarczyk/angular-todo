import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        title: 'My first todo',
        completed: false,
      },
      {
        id: 2,
        title: 'My second todo',
        completed: true,
      },
      {
        id: 3,
        title: 'My third todo',
        completed: false,
      },
    ];
  }
}
