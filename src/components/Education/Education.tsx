import React from 'react';
import {Box, Divider, ListItem, ListItemIcon, Typography} from '@material-ui/core';
import {DateRange, School} from '@material-ui/icons';

type Props = {};

export default ({}: Props) => {
  return (
    <>
      <ListItem disableGutters>
        <ListItemIcon>
          <School color={'primary'} fontSize={'large'} />
        </ListItemIcon>
        <Typography variant={'h4'} color={'textPrimary'}>
          Education
        </Typography>
      </ListItem>

      <Box component={'div'}>
        <br />
        <Typography variant={'h6'}>W3Schools.com</Typography>
        <ListItem disableGutters>
          <ListItemIcon>
            <DateRange color={'primary'} />
          </ListItemIcon>
          <Typography color={'primary'} display={'block'}>
            Forever
          </Typography>
        </ListItem>
        <Typography display={'block'}>Web Development! All I need to know in one place</Typography>
        <br />
        <Divider />
      </Box>

      <Box component={'div'}>
        <br />
        <Typography variant={'h6'}>London Business School</Typography>
        <ListItem disableGutters>
          <ListItemIcon>
            <DateRange color={'primary'} />
          </ListItemIcon>
          <Typography color={'primary'} display={'block'}>
            2013 - 2015
          </Typography>
        </ListItem>
        <Typography display={'block'}>Master Degree</Typography>
        <br />
        <Divider />
      </Box>

      <Box component={'div'}>
        <br />
        <Typography variant={'h6'}>School of Coding</Typography>
        <ListItem disableGutters>
          <ListItemIcon>
            <DateRange color={'primary'} />
          </ListItemIcon>
          <Typography color={'primary'} display={'block'}>
            2010 - 2013
          </Typography>
        </ListItem>
        <Typography display={'block'}>Bachelor Degree</Typography>
        <br />
      </Box>
    </>
  );
};
