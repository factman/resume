import {ACTION_TYPES, ThemeType} from '../types';
import {SetThemeAction} from './actions';

const defaultState: ThemeType = {
  themeMode: 'light',
  themeColor: 'green',
};

export const themeReducer = (state: ThemeType = defaultState, action: SetThemeAction) => {
  switch (action.type) {
    case ACTION_TYPES.SET_THEME:
      return {
        ...action.theme,
      };
    default:
      return state;
  }
};
