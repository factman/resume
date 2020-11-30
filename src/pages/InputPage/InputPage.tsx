import React from 'react';
import {Box, Button, CssBaseline, Grid, TextField, Typography} from '@material-ui/core';
import {MuiThemeProvider} from '@material-ui/core/styles';
import useTheme from '@material-ui/core/styles/useTheme';
import style from './style';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {Save} from '@material-ui/icons';

type Props = {};

export default ({}: Props) => {
  const classes = style();
  const theme = useTheme();

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {/*Background*/}
      <Grid container className={classes.InputPage}>
        <Grid item lg={10} xs={12}>
          {/*Center Container*/}
          <Box className={classes.Container}>
            {/*Left side with image*/}
            <Box className={classes.ImageContainer}>
              <img className={classes.Image} src={require('../../assets/images/resume-art.jpg')} alt={'resume-art'} />
            </Box>
            {/*Right side with form*/}
            <Box className={classes.FormContainer}>
              <Typography component={'span'} className={classes.FormTitle}>
                Resume Details
              </Typography>
              {/*Form*/}
              <form autoComplete={'on'} autoCorrect={'on'} spellCheck className={classes.Form}>
                <TextField className={classes.FormField} fullWidth type={'text'} label={'Full name'} required />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    className={classes.FormField}
                    fullWidth
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date of birth"
                    format="MM/dd/yyyy"
                    value={new Date()}
                    onChange={console.log}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </MuiPickersUtilsProvider>
                <TextField className={classes.FormField} fullWidth type={'text'} label={'Role'} required />
                <TextField className={classes.FormField} fullWidth type={'email'} label={'Email address'} required />
                <TextField className={classes.FormField} fullWidth type={'tel'} label={'Phone number'} required />
                <TextField
                  className={classes.FormField}
                  fullWidth
                  type={'text'}
                  label={'Address'}
                  multiline
                  required
                  rows={2}
                  rowsMax={2}
                />
                <Button variant="contained" color="primary" size="large" type={'submit'} startIcon={<Save />}>
                  Save
                </Button>
              </form>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
};
