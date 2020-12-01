import React, {useState} from 'react';
import {Box, FormControlLabel, Radio} from '@material-ui/core';
import style from './style';
import {ThemeType} from '../../store/types';

type Props = {
  onChange: (theme: ThemeType) => void;
};

export default ({onChange}: Props) => {
  const classes = style();
  const [theme, setTheme] = useState({themeColor: null, themeMode: null});
  const handleChange = (event: any) => {
    const value = JSON.parse(event.target.value);
    setTheme(value);
    onChange(value);
  };

  return (
    <Box className={classes.root}>
      <FormControlLabel
        className={classes.label}
        style={{color: '#e53935'}}
        label={'Red/Light'}
        control={
          <Radio
            onChange={handleChange}
            value={JSON.stringify({themeColor: 'red', themeMode: 'light'})}
            checked={theme.themeMode === 'light' && theme.themeColor === 'red'}
            color={'secondary'}
            style={{backgroundColor: '#e53935', marginRight: '10px', color: '#fff'}}
          />
        }
      />
      <FormControlLabel
        className={classes.label}
        style={{color: '#a02725'}}
        label={'Red/Dark'}
        control={
          <Radio
            onChange={handleChange}
            value={JSON.stringify({themeColor: 'red', themeMode: 'dark'})}
            checked={theme.themeMode === 'dark' && theme.themeColor === 'red'}
            color={'secondary'}
            style={{backgroundColor: '#a02725', marginRight: '10px', color: '#333'}}
          />
        }
      />
      <FormControlLabel
        className={classes.label}
        style={{color: '#43a047'}}
        label={'Green/Light'}
        control={
          <Radio
            onChange={handleChange}
            value={JSON.stringify({themeColor: 'green', themeMode: 'light'})}
            checked={theme.themeMode === 'light' && theme.themeColor === 'green'}
            color={'secondary'}
            style={{backgroundColor: '#43a047', marginRight: '10px', color: '#fff'}}
          />
        }
      />
      <FormControlLabel
        className={classes.label}
        style={{color: '#2e7031'}}
        label={'Green/Dark'}
        control={
          <Radio
            onChange={handleChange}
            value={JSON.stringify({themeColor: 'green', themeMode: 'dark'})}
            checked={theme.themeMode === 'dark' && theme.themeColor === 'green'}
            color={'secondary'}
            style={{backgroundColor: '#2e7031', marginRight: '10px', color: '#333'}}
          />
        }
      />
      <FormControlLabel
        className={classes.label}
        style={{color: '#1e88e5'}}
        label={'Blue/Light'}
        control={
          <Radio
            onChange={handleChange}
            value={JSON.stringify({themeColor: 'blue', themeMode: 'light'})}
            checked={theme.themeMode === 'light' && theme.themeColor === 'blue'}
            color={'secondary'}
            style={{backgroundColor: '#1e88e5', marginRight: '10px', color: '#fff'}}
          />
        }
      />
      <FormControlLabel
        className={classes.label}
        style={{color: '#155fa0'}}
        label={'Blue/Dark'}
        control={
          <Radio
            onChange={handleChange}
            value={JSON.stringify({themeColor: 'blue', themeMode: 'dark'})}
            checked={theme.themeMode === 'dark' && theme.themeColor === 'blue'}
            color={'secondary'}
            style={{backgroundColor: '#155fa0', marginRight: '10px', color: '#333'}}
          />
        }
      />
    </Box>
  );
};
