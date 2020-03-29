import { createSelector } from 'reselect'

export const starterItems = state => state.starterReducer;

export const itemsSelector = createSelector(
  starterItems,
  (items) => items
);