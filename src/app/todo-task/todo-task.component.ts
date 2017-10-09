import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['../bootstrap/css/bootstrap.min.css']
})
export class TodoTaskComponent implements OnInit {

  @Input()
  todoList = [];

  @Output()
  emitDone = new EventEmitter<string>();

  @Output()
  emitRemove = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  addToDoneList(task) {
    console.log('todo-task(addToDoneTask): ' + task);
    this.emitDone.emit(task);
  }
  removeTask(task) {
    console.log('todo-task(removeTask): ' + task);
    this.emitRemove.emit(task);
  }
 }
