import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { RootState } from '../store';
import { deleteTodoItem, setTodoItem, editTodoItem } from '../store/todo-list/actions';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {

  todoList$: Observable<TodoItem[]>;
  // add '$'to the end of name type observable

  constructor(
    private todoListService: TodoListService,
    private store: Store<RootState>) { }

  ngOnInit() {
    this.todoList$ = this.todoListService.getTodoList();
  }

  addItem(title: string) {
    this.store.dispatch(setTodoItem({item: {
      _id: uuid(),
      title,
      completed: false
    }}));
    //this.todoListService.addItem({title});
  }

  removeItem(item) {
    this.store.dispatch(deleteTodoItem({dupaWolowa: item._id}));
    //this.todoListService.deleteItem(item);
  }

  updateItem(item, changes){
    this.store.dispatch(editTodoItem({
      id: item._id,
      completed: changes.completed
    }));
    //this.todoListService.updateItem(item, changes);
  }

}
