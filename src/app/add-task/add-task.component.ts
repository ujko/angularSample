import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['../bootstrap/css/bootstrap.min.css']
})
export class AddTaskComponent implements OnInit {

  newTask = '';

  @Output()
  emitTask = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  taskListAdd() {
    if (this.newTask !== '') {
    this.emitTask.emit(this.newTask);
    this.newTask = '';
    }
  }
}
