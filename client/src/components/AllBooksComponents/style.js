import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  container:{
    paddingTop:'20px'
  },
  actionDiv: {
    textAlign: 'center',
  },
}));