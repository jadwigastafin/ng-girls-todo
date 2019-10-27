import { createReducer, on } from '@ngrx/store';
import * as UserInfoActions from '../user-info/actions';
import { state } from '@angular/animations';

export interface UserInfoState {
  userInfo: object;
}

export const initialState: UserInfoState = {
  userInfo: {}
};

const userInfoReducer = createReducer(
  initialState,
  on(UserInfoActions.editNameField, (state, {formControlName}) => ({
    ...state,
    userInfo: state.userInfo.formControlName
  }))
)
