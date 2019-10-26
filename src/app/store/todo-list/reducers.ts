import { TodoItem } from 'src/app/interfaces/todo-item';
import { createReducer, on, Action } from '@ngrx/store';
import * as TodoListActions from '../todo-list/actions';

export interface TodoListState {
  listItems: TodoItem[];
}

export const initialState: TodoListState = {
  listItems: []
};

const todoListReducer = createReducer(
  initialState,
  on(TodoListActions.setTodoItem, (state, {item}) => ({
    ...state,
    listItems: state.listItems.concat(item)
  })),
  on(TodoListActions.deleteTodoItem, (state, {dupaWolowa}) => ({
    ...state,
    listItems: removeItemFromList(state.listItems, dupaWolowa)
  })),
  on(TodoListActions.editTodoItem, (state, {id, completed}) => ({
    ...state,
    listItems: markListElementAsCompleted(state.listItems, id, completed)
  }))
);

function removeItemFromList(list: TodoItem[], id: string): TodoItem[] {
  console.log(list, id);
  return list.filter((element) => {
    return element._id !== id;
  });
}

function markListElementAsCompleted(list: TodoItem[], id: string, completed: boolean): TodoItem[] {
  console.log(list, id, completed);
  return list.map(value => {
    if (value._id === id) {
      return {
        ...value,
        completed
      };
    } else {
      return value;
    }
  });
}

export function reducer(state: TodoListState | undefined, action: Action) {
  return todoListReducer(state, action);
}


// {
//   type: '[Todo list] Set new todo list item',
//   item: {
//     id: 'some-uuid',
//     title: 'Add selectors',
//     completed: false
//   }
// }

// {
//   type: '[Todo list] Delete Todo Item from the list',
//   id: 'some-uuid'
// }


// {
//   type: '[Todo list] Mark as completed/uncompleted',
//   id: 'some-uuid',
//   completed: true
// }
