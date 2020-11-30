import {applyMiddleware, combineReducers, createStore} from 'redux';
import {useSelector as reduxUseSelector} from 'react-redux';
import thunk from 'redux-thunk';
import {themeReducer} from './theme/reducers';
import {StoreType} from './types';
import {profileReducer} from './profile/reducers';

export default createStore(
  combineReducers({
    profile: profileReducer,
    theme: themeReducer,
  }),
  applyMiddleware(thunk),
);

export * from 'react-redux';

export function useSelector(selector: (store: StoreType) => any) {
  return reduxUseSelector(selector);
}
