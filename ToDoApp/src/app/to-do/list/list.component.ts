import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import { TNodeProviderIndexes } from '@angular/core/src/render3/interfaces/node';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() todos;
  @Output() addNewToDoButtonClicked = new EventEmitter();
  
  @Input() tasks;
  @Output() deleteButtonClicked = new EventEmitter();

  // @Input() todos;
   @Output() editButtonClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onNewButtonClick() {
    this.addNewToDoButtonClicked.emit();
  }
  deleteFieldValue(todo) {
    this.todos = this.todos.filter(t => t.name !== todo.name);
}

  onEditButtonClick() {
    this.editButtonClicked.emit();
    
  }
  

}


