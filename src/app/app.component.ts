import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./bootstrap/css/bootstrap.min.css']
})
export class AppComponent {
  title = 'app';
  todoList: Array<string> = [];
  doneList: Array<string> = [];

  add(task: string) {
    this.todoList.push(task);
  }
  remove(task) {
    this.todoList = this.todoList.filter(e => e !== task);
  }
  addToDoneList(task) {
    this.doneList.push(task);
    this.remove(task);
    console.log('Nowy task: ' + task);
    console.log('Lista zrobionych: ' + this.doneList);
  }
}
