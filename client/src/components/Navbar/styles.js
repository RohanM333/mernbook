import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    backgroundColor : 'transparent',
    flexWrap: 'wrap',
  },
  heading: {
    color: 'white',
    fontFamily : 'sans-serif',
    textDecoration: 'none',
    fontSize: '3rem',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: 'auto',
  },
  profile: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: 'auto',
  },
  userName: {
    display: 'flex-end',
    alignItems: 'flex',
    color: 'white',
    marginRight: '20px',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
