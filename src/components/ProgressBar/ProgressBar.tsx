import React from 'react';
import {Box, Typography} from '@material-ui/core';
import style from './style';

type Props = {
  label: string;
  percent: number;
};

export default ({label, percent}: Props) => {
  const classes = style();

  return (
    <Box>
      <Typography>{label}</Typography>
      <Box className={classes.progressBg}>
        <Box className={classes.progressBar} color={'primary'} style={{width: `${percent}%`}}>
          <Typography className={classes.progressText}>{percent}%</Typography>
        </Box>
      </Box>
    </Box>
  );
};
