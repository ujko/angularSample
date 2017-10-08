import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./bootstrap/css/bootstrap.min.css']
})
export class AppComponent {
  title = 'app';
  taskList = [];
  taskDone = [];

  add(task: string) {
    this.taskList.push(task);
    console.log(this.taskList);
  }
  removeTask(task) {
    this.taskList = this.taskList.filter(e => e !== task);
  }
  addToDoneList(task) {
    this.taskDone.push(task);
    this.removeTask(task);
  }
}
