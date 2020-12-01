import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    InputPage: {
      width: '100%',
      minHeight: '100vh',
      padding: '15px',
      background: 'linear-gradient(left,#0072ff,#00c6ff)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    Container: {
      width: '100%',
      background: '#fff',
      borderRadius: '10px',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '60px 130px 58px 148px',
      [theme.breakpoints.only('xs')]: {
        padding: '50px',
      },
    },
    Image: {
      maxWidth: '100%',
    },
    Form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyItems: 'center',
    },
    FormTitle: {
      display: 'block',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      lineHeight: '1.2',
      textAlign: 'center',
      paddingBottom: '44px',
    },
    FormField: {
      marginBottom: '20px',
    },
    ThemeContainer: {
      width: '100%',
      marginTop: '10px',
      padding: '5px 20px 20px',
      border: '1px solid #cacaca',
      borderRadius: '5px',
      marginBottom: '20px',
    },
    ThemeSectionLabel: {
      backgroundColor: '#fff',
      marginTop: '-20px',
      marginBottom: '16px',
      padding: '5px 10px',
    },
  }),
);
