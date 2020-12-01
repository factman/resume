import React from 'react';
import {ListItem, ListItemIcon, Typography} from '@material-ui/core';
import {Public} from '@material-ui/icons';
import ProgressBar from '../ProgressBar/ProgressBar';

type Props = {};

export default ({}: Props) => {
  return (
    <>
      <ListItem disableGutters>
        <ListItemIcon>
          <Public color={'primary'} />
        </ListItemIcon>
        <Typography variant={'h6'}>Languages</Typography>
      </ListItem>
      <ProgressBar label={'English'} percent={100} />
      <ProgressBar label={'Spanish'} percent={50} />
      <ProgressBar label={'German'} percent={25} />
    </>
  );
};
