import { Component, OnInit } from "@angular/core";
import { TodoItem } from "../model/todo-item";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent implements OnInit {
  todoList: TodoItem[] = [];
  todoListCopy: TodoItem[] = [];
  todoItem: string;
  currentItem: TodoItem;
  constructor() {}

  ngOnInit() {}

  onKeyUp(event): void {
    if (event.keyCode === 13 && this.todoItem !== '') {
      const itemId = this.todoList.length + 1;
      this.currentItem = {
        id: itemId,
        itemDesc: this.todoItem,
        completed: false
      };
      this.todoList.push(this.currentItem);
      this.todoItem = '';
    }
    this.todoListCopy = this.todoList;
  }

  setCompleted(item: TodoItem, action: boolean): void{
    let index = this.todoList.indexOf(item);
    this.todoList[index].completed = action;
  }

  onDelete(deletedItem: TodoItem): void {
    if(deletedItem) {
      let index = this.todoList.indexOf(deletedItem);
      this.todoList.splice(index, 1);
    }
  }

  filterList(filterType: string): void{
    this.todoList = this.todoListCopy;
    switch (filterType){
      case 'activos':
        this.todoList = this.todoList.filter(item => item.completed === false);
        break;
      case 'completos':
        this.todoList = this.todoList.filter(item => item.completed === true);
        break;
    }
  }
}
