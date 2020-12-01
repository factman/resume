import React from 'react';
import {ListItem, ListItemIcon, Typography} from '@material-ui/core';
import {Star} from '@material-ui/icons';
import ProgressBar from '../ProgressBar/ProgressBar';

type Props = {};

export default ({}: Props) => {
  return (
    <>
      <ListItem disableGutters>
        <ListItemIcon>
          <Star color={'primary'} />
        </ListItemIcon>
        <Typography variant={'h6'}>Skills</Typography>
      </ListItem>
      <ProgressBar label={'Adobe Photoshop'} percent={90} />
      <ProgressBar label={'Photography'} percent={80} />
      <ProgressBar label={'Illustrator'} percent={75} />
      <ProgressBar label={'Media'} percent={50} />
      <br />
    </>
  );
};
