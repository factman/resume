export enum ACTION_TYPES {
  SET_THEME = 'SET:THEME',
  SET_PROFILE = 'SET:PROFILE',
}

export type ThemeType = {
  themeMode: 'light' | 'dark';
  themeColor: 'red' | 'green' | 'blue';
};

export type ProfileType = {
  name: string;
  email: string;
  phone: string;
  address: string;
  dob: Date;
  role: string;
};

export type StoreType = {
  profile: ProfileType;
  theme: ThemeType;
};
