import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  @Output() editFormToDo = new EventEmitter<{
    name: String,
    category: String,
    status: Boolean
  }>();

  name: string = "";
  category: string = "";
  status: boolean = false;
  constructor() { }

  ngOnInit() {
  }


  onSubmitClicked() {
    this.editFormToDo.emit({
      name: this.name,
      category: this.category,
      status: this.status
    });
  }

}
