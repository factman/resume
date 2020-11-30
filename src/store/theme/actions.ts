import {ACTION_TYPES, ThemeType} from '../types';

export type SetThemeAction = {
  type: ACTION_TYPES.SET_THEME;
  theme: ThemeType;
};

export function Action_SetTheme(theme: ThemeType): SetThemeAction {
  return {
    type: ACTION_TYPES.SET_THEME,
    theme,
  };
}
