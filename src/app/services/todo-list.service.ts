import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';

const defaultTodoList = [
  {title: 'install NodeJS'},
  {title: 'install Angular CLI'},
  {title: 'create new app'},
  {title: 'serve app'},
  {title: 'develop app'},
  {title: 'deploy app'},
];

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  baseUrl = environment.baseuUrl;

  private todoListSubject: Subject<TodoItem[]> = new Subject<TodoItem[]>();

  todoList: TodoItem[];

  constructor(private http: HttpClient) {
    this.retrieveListFromDataBase();
  }

  getTodoList() {
    return this.todoListSubject.asObservable();
    //return this.todoList;

  }

  addItem(item: TodoItem) {
    this.http.post(this.baseUrl,
      {
        title: item.title,
        completed: item.completed || false
      })
      .subscribe(
        () => {this.retrieveListFromDataBase()}
      );
  }

  updateItem(item: TodoItem, changes) {
    // const index = this.todoList.indexOf(item);
    // this.todoList[index] = { ...item, ...changes };
    return this.http.put(
      `${this.baseUrl}/${item._id}`,
      { ...item,
        ...changes
      })
      .subscribe(
        () => this.retrieveListFromDataBase()
      );
  }

  deleteItem(item: TodoItem) {
    // const index = this.todoList.indexOf(item);
    // this.todoList.splice(index, 1);
    return this.http.delete(`${this.baseUrl}/${item._id}`)
      .subscribe(
        () => this.retrieveListFromDataBase()
      );
  }

  retrieveListFromDataBase() {
    this.http.get<TodoItem[]>(this.baseUrl)
      .subscribe(
        response => this.todoListSubject.next(response)
      );
  }

}


