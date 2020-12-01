import React, {FormEvent, useEffect, useState} from 'react';
import {Box, Button, CssBaseline, Grid, Hidden, TextField, Typography} from '@material-ui/core';
import {MuiThemeProvider} from '@material-ui/core/styles';
import useTheme from '@material-ui/core/styles/useTheme';
import style from './style';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {ViewQuilt} from '@material-ui/icons';
import ThemeSelector from '../../components/ThemeSelector/ThemeSelector';
import {useDispatch} from 'react-redux';
import {Action_SetTheme} from '../../store/theme/actions';
import {Action_SetProfile} from '../../store/profile/actions';
import {useHistory} from 'react-router';

export default () => {
  const dispatch = useDispatch();
  const router = useHistory();
  const classes = style();
  const theme = useTheme();
  const [isValid, setIsValid] = useState(false);
  const [formData, setFormData] = useState<{[key: string]: any}>({
    name: null,
    email: null,
    phone: null,
    dob: null,
    role: null,
    theme: null,
  });
  const handleChange = (name: string, value: any) => {
    setFormData((prevState) => Object.assign({}, prevState, {[name]: value}));
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const {name, email, phone, dob, role, theme} = formData;
    dispatch(Action_SetTheme(theme));
    dispatch(Action_SetProfile({name, email, phone, dob, role}));
    router.push('/resume');
    event.preventDefault();
  };

  useEffect(() => {
    const vals = Object.values(formData);
    if (!vals.includes(null) && !vals.includes('') && !vals.includes(undefined)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formData]);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {/*Background*/}
      <Grid container className={classes.InputPage}>
        <Grid item lg={10} xs={12}>
          {/*Center Container*/}
          <Grid container className={classes.Container} spacing={5} direction={'row'}>
            {/*Left side with image*/}
            <Hidden smDown>
              <Grid item sm={12} md={5}>
                <img
                  draggable={false}
                  className={classes.Image}
                  src={require('../../assets/images/resume-art.jpg')}
                  alt={'resume-art'}
                />
              </Grid>
            </Hidden>
            {/*Right side with form*/}
            <Grid item sm={12} md={6}>
              <Typography component={'span'} className={classes.FormTitle}>
                Resume Details
              </Typography>
              {/*Form*/}
              <form onSubmit={handleSubmit} autoComplete={'on'} autoCorrect={'on'} spellCheck className={classes.Form}>
                <TextField
                  onChange={(event) => handleChange('name', event.target.value)}
                  className={classes.FormField}
                  fullWidth
                  type={'text'}
                  label={'Full name'}
                  required
                />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    className={classes.FormField}
                    fullWidth
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date of birth"
                    format="MM/dd/yyyy"
                    value={formData.dob}
                    required
                    onChange={(value) => handleChange('dob', value)}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </MuiPickersUtilsProvider>
                <TextField
                  onChange={(event) => handleChange('role', event.target.value)}
                  className={classes.FormField}
                  fullWidth
                  type={'text'}
                  label={'Role'}
                  required
                />
                <TextField
                  onChange={(event) => handleChange('email', event.target.value)}
                  className={classes.FormField}
                  fullWidth
                  type={'email'}
                  label={'Email address'}
                  required
                />
                <TextField
                  onChange={(event) => handleChange('phone', event.target.value)}
                  className={classes.FormField}
                  fullWidth
                  type={'tel'}
                  label={'Phone number'}
                  required
                />
                <Box className={classes.ThemeContainer}>
                  <Typography className={classes.ThemeSectionLabel} color={'textSecondary'}>
                    Select Resume Theme
                  </Typography>
                  {/*Theme selector*/}
                  <ThemeSelector onChange={(value) => handleChange('theme', value)} />
                </Box>
                <Button
                  disabled={!isValid}
                  variant="contained"
                  color="primary"
                  size="large"
                  type={'submit'}
                  startIcon={<ViewQuilt />}
                >
                  Generate Resume
                </Button>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
};
