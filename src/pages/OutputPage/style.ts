import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    OutputPage: {
      width: '100%',
      minHeight: '100vh',
      padding: '15px',
      backgroundColor: theme.palette.divider,
    },
    Avatar: {
      width: '100%',
    },
    NameCon: {
      position: 'relative',
    },
    Name: {
      position: 'absolute',
      left: '16px',
      bottom: '16px',
    },
    Divider: {
      margin: '20px auto',
    },
  }),
);
