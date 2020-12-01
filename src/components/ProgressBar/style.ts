import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    progressBg: {
      backgroundColor: theme.palette.divider,
      borderRadius: '20px',
      margin: '10px auto',
    },
    progressBar: {
      padding: '2px 10px',
      borderRadius: '20px',
      color: '#fff',
      backgroundColor: theme.palette.primary.main,
      textAlign: 'center',
    },
    progressText: {
      fontSize: 'small',
    },
  }),
);
