import {SetUserActionType} from './actions';
import {ACTION_TYPES, ProfileType} from '../types';

const defaultState: ProfileType = {
  name: '',
  email: '',
  phone: '',
  address: '',
  dob: new Date(),
  role: '',
};

export const profileReducer = (state: ProfileType = defaultState, action: SetUserActionType) => {
  switch (action.type) {
    case ACTION_TYPES.SET_PROFILE:
      return {
        ...action.profile,
      };
    default:
      return state;
  }
};
