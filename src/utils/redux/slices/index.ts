import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers, AnyAction } from '@reduxjs/toolkit';

import { IUserReducer } from '@interfaces/user';

import user from './user';

export interface IState {
  user: IUserReducer;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const rootReducer = (state: IState | undefined, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE: {
      const nextState = {
        ...state,
        ...action.payload,
      };
      return nextState;
    }

    default: {
      const combineReducer = combineReducers({
        user: user.reducer,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
