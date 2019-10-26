import { createAction, props } from '@ngrx/store';
import { TodoItem } from 'src/app/interfaces/todo-item';

export const setTodoItem = createAction(
  '[Todo list] Set new todo list item',
  props<{item: TodoItem}>());

export const deleteTodoItem = createAction(
  '[Todo list] Delete Todo Item from the list',
  props<{dupaWolowa: string}>());

export const editTodoItem = createAction(
  '[Todo list] Mark as completed/uncompleted',
  props<{id: string, completed: boolean}>());
