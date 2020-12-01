import React from 'react';
import {Box, Divider, ListItem, ListItemIcon, Typography} from '@material-ui/core';
import {DateRange, Work} from '@material-ui/icons';

type Props = {};

export default ({}: Props) => {
  return (
    <>
      <ListItem disableGutters>
        <ListItemIcon>
          <Work color={'primary'} fontSize={'large'} />
        </ListItemIcon>
        <Typography variant={'h4'} color={'textPrimary'}>
          Work Experience
        </Typography>
      </ListItem>

      <Box component={'div'}>
        <br />
        <Typography variant={'h6'}>Front End Developer / w3schools.com</Typography>
        <ListItem disableGutters>
          <ListItemIcon>
            <DateRange color={'primary'} />
          </ListItemIcon>
          <Typography color={'primary'} display={'block'}>
            Jan 2015 - Current
          </Typography>
        </ListItem>
        <Typography display={'block'}>
          Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt
          hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.
        </Typography>
        <br />
        <Divider />
      </Box>

      <Box component={'div'}>
        <br />
        <Typography variant={'h6'}>Web Developer / something.com</Typography>
        <ListItem disableGutters>
          <ListItemIcon>
            <DateRange color={'primary'} />
          </ListItemIcon>
          <Typography color={'primary'} display={'block'}>
            Mar 2012 - Dec 2014
          </Typography>
        </ListItem>
        <Typography display={'block'}>
          Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt
          hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.
        </Typography>
        <br />
        <Divider />
      </Box>

      <Box component={'div'}>
        <br />
        <Typography variant={'h6'}>Graphic Designer / designsomething.com</Typography>
        <ListItem disableGutters>
          <ListItemIcon>
            <DateRange color={'primary'} />
          </ListItemIcon>
          <Typography color={'primary'} display={'block'}>
            Jun 2010 - Mar 2012
          </Typography>
        </ListItem>
        <Typography display={'block'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
        <br />
      </Box>
    </>
  );
};
