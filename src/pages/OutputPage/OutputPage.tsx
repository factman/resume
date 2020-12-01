import React from 'react';
import {
  AppBar,
  Box,
  Card,
  CardContent,
  Container,
  CssBaseline,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@material-ui/core';
import theme from '../../assets/style/theme';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {ProfileType, ThemeType} from '../../store/types';
import {useSelector} from '../../store';
import style from './style';
import {ArrowBackIos, Event, Mail, Phone, Work} from '@material-ui/icons';
import {useHistory} from 'react-router';
import Skills from '../../components/Skills/Skills';
import Languages from '../../components/Languages/Languages';
import WorkingExp from '../../components/WorkingExp/WorkingExp';
import Education from '../../components/Education/Education';

export default () => {
  const classes = style();
  const router = useHistory();
  const {themeMode, themeColor}: ThemeType = useSelector(({theme}) => theme);
  const {name, email, phone, dob, role}: ProfileType = useSelector(({profile}) => profile);

  return (
    <MuiThemeProvider theme={theme({themeColor, themeMode})}>
      <CssBaseline />
      {/*App Top Bar*/}
      <AppBar position={'sticky'}>
        <Toolbar variant="dense">
          <IconButton onClick={router.goBack} edge="start" color="inherit" aria-label="menu">
            <ArrowBackIos />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Back
          </Typography>
        </Toolbar>
      </AppBar>
      {/*Resume*/}
      <Box className={classes.OutputPage}>
        <Container maxWidth={'lg'} className={classes.root}>
          <Grid container spacing={2}>
            {/*Left side*/}
            <Grid item xs={12} sm={4}>
              <Card elevation={5}>
                <Box className={classes.NameCon}>
                  <img
                    draggable={false}
                    className={classes.Avatar}
                    src={require('../../assets/images/avatar.png')}
                    alt={'avatar'}
                  />
                  <Typography className={classes.Name} variant={'h4'}>
                    {name}
                  </Typography>
                </Box>
                <CardContent>
                  <List>
                    <ListItem disableGutters>
                      <ListItemIcon>
                        <Work color={'primary'} />
                      </ListItemIcon>
                      <ListItemText>
                        <p>{role}</p>
                      </ListItemText>
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemIcon>
                        <Event color={'primary'} />
                      </ListItemIcon>
                      <ListItemText>
                        <p>{dob.toDateString()}</p>
                      </ListItemText>
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemIcon>
                        <Mail color={'primary'} />
                      </ListItemIcon>
                      <ListItemText>
                        <p>{email}</p>
                      </ListItemText>
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemIcon>
                        <Phone color={'primary'} />
                      </ListItemIcon>
                      <ListItemText>
                        <p>{phone}</p>
                      </ListItemText>
                    </ListItem>
                  </List>
                  {/*Skills section*/}
                  <Divider className={classes.Divider} />
                  <Skills />
                  {/*Language section*/}
                  <Divider className={classes.Divider} />
                  <Languages />
                </CardContent>
              </Card>
            </Grid>
            {/*Right side*/}
            <Grid item xs={12} sm={8}>
              <Grid container spacing={2}>
                {/*Top Right*/}
                <Grid item xs={12}>
                  <Card elevation={5}>
                    <CardContent>
                      <WorkingExp />
                    </CardContent>
                  </Card>
                </Grid>
                {/*Bottom Right*/}
                <Grid item xs={12}>
                  <Card elevation={5}>
                    <CardContent>
                      <Education />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </MuiThemeProvider>
  );
};
