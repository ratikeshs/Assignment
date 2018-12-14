import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  tasks = [
    {
      name: 'Angular Session One',
      category: 'CDAC',
      status: true
    },
    {
      name: 'Angular Session Two',
      category: 'CDAC',
      status: false
    },
    {
      name: 'Angular Session Three',
      category: 'CDAC',
      status: false
    }
  ]

  list = true;
  edit = false;
  editform = false;

  constructor() { }

  ngOnInit() {
  }
  showNewToDoForm() {
    this.list = false;
    this.edit = true;
  }

  onToDoAdded(toDo) {
    this.tasks.push(toDo);
    this.edit = false;
    this.list = true;
  }



  showToDoEditForm() {
    this.list = false;
    this.edit = false;
    this.editform = true;
  }
}
