import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeType} from '../../store/types';

const fontFamily = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(',');

export default ({themeColor, themeMode}: ThemeType) => {
  switch (themeColor) {
    case 'red':
      return createMuiTheme({
        typography: {fontFamily},
        palette: {
          type: themeMode,
          common: {
            black: 'rgba(74, 74, 74, 1)',
            white: '#fff',
          },
          primary: {
            light: '#ea605d',
            main: '#e53935',
            dark: '#a02725',
            contrastText: '#fff',
          },
          secondary: {
            light: '#d15353',
            main: '#c62828',
            dark: '#8a1c1c',
            contrastText: '#fff',
          },
        },
      });
    case 'green':
      return createMuiTheme({
        typography: {fontFamily},
        palette: {
          type: themeMode,
          common: {
            black: 'rgba(74, 74, 74, 1)',
            white: '#fff',
          },
          primary: {
            light: '#68b36b',
            main: '#43a047',
            dark: '#2e7031',
            contrastText: '#fff',
          },
          secondary: {
            light: '#57975b',
            main: '#2e7d32',
            dark: '#205723',
            contrastText: '#fff',
          },
        },
      });
    case 'blue':
      return createMuiTheme({
        typography: {fontFamily},
        palette: {
          type: themeMode,
          common: {
            black: 'rgba(74, 74, 74, 1)',
            white: '#fff',
          },
          primary: {
            light: '#4b9fea',
            main: '#1e88e5',
            dark: '#155fa0',
            contrastText: '#fff',
          },
          secondary: {
            light: '#4383cc',
            main: '#1565c0',
            dark: '#0e4686',
            contrastText: '#fff',
          },
        },
      });
  }
};
