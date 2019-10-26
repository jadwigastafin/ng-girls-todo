import { createSelector } from '@ngrx/store';
import { RootState } from '..';
import { TodoListState } from './reducers';

export const getTodoListState = (state: RootState) => state.todoList;

export const getList = createSelector(
  getTodoListState,
  (state: TodoListState) => state.listItems
);
