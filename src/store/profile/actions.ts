import {ACTION_TYPES, ProfileType} from '../types';

export type SetUserActionType = {
  type: ACTION_TYPES.SET_PROFILE;
  profile: ProfileType;
};

export function Action_SetUser(profile: ProfileType): SetUserActionType {
  return {
    type: ACTION_TYPES.SET_PROFILE,
    profile,
  };
}
