import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    width:'540px',
    marginBottom:'20px',
    marginLeft:'80px'
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width:'40%'
  },
  customLogin:{
    width:'60%',
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
  mainContainer:{
    backgroundColor: "#286FB4",
    backgroundImage: `url(${'https://www.transparenttextures.com/patterns/concrete-wall-2.png'})`,
  },
  avt:{
    //justifySelf:'left',
    backgroundColor:"#df4c73",
    marginLeft:"20px"
  },
  grid:{
    marginTop: theme.spacing(9)
  },
  list:{
      textAlign:"center",
  },

  [theme.breakpoints.down(1400)]:{
    paper:{
      width:"90%",
      marginLeft:"20px"
    }

  },

  [theme.breakpoints.down(700)]:{
    paper:{
      marginLeft:"15px",
      width:"90%",
    },
  }
}));