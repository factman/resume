import {makeStyles} from '@material-ui/core/styles';

export default makeStyles({
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
    padding: '90px 130px 88px 148px',
  },
  ImageContainer: {
    width: '33.5%',
  },
  Image: {
    maxWidth: '100%',
  },
  FormContainer: {
    width: '44%',
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
});
