import { PersistPartial } from 'redux-persist/es/persistReducer';
import { combineReducers } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { userReducer } from '../slices/user';

import { RootState } from '..';

const collectedReducer = combineReducers({
  user: userReducer,
});

// Modify the type of RootState to include PersistPartial
type PersistedState = RootState & PersistPartial & any

const rootReducer: any = (state: PersistedState, action: PayloadAction) =>
  collectedReducer(state, action);

export default rootReducer;
