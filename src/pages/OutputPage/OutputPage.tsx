import React from 'react';
import {Button, CssBaseline} from '@material-ui/core';
import theme from '../../assets/style/theme';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {ThemeType} from '../../store/types';
import {useSelector} from '../../store';

export default () => {
  const {themeMode, themeColor}: ThemeType = useSelector(({theme}) => theme);

  return (
    <MuiThemeProvider theme={theme({themeColor, themeMode})}>
      <CssBaseline />
      <div className="OutputPage">
        <h1>App</h1>
        <Button color={'primary'}>Press</Button>
      </div>
    </MuiThemeProvider>
  );
};
