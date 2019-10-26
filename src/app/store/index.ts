import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { TodoListState } from './todo-list/reducers';
import * as TodoListReducer from './todo-list/reducers';

export interface RootState {
  todoList: TodoListState;
  //userInfo: UserInfoState
}

export const reducers: ActionReducerMap<RootState> = {
  todoList: TodoListReducer.reducer
};


export const metaReducers: MetaReducer<RootState>[] = !environment.production ? [] : [];
