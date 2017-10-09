import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
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
