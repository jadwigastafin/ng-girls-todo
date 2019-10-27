import { createAction, props } from '@ngrx/store';

export const editNameField = createAction(
  '[User info] Edit name field',
  props<{formControlName: string}>());

export const submitForm = createAction(
  '[User info] Submit whole form',
  props<{item: object}>()
);
