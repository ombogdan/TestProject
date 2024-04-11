import { createSelector } from 'reselect';

const selectAppStore = (store: any) => store.app;

export const selectAllSerials = createSelector(
  [selectAppStore],
  (appStore) => appStore.serialsData,
);

export const selectLastWatchingData = createSelector(
  [selectAppStore],
  (appStore) => appStore.lastWatchingData,
);
