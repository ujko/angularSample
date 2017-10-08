import { EventEmitter } from 'events';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  newTask: string;

  @Output()
  emitTask = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  taskListAdd() {
    this.emitTask.emit(this.newTask);
    this.newTask = '';
  }
}
