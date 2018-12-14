import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Output() addNewToDo = new EventEmitter<{
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
    this.addNewToDo.emit({
      name: this.name,
      category: this.category,
      status: this.status
    });
  }

}
