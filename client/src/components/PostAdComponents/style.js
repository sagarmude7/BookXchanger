import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor:'#e7dbc9',
    borderRadius:"0.7rem"
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    backgroundColor:"#E85A4F",
    "&:hover": {
      backgroundColor: "#8E8D8A",
    },
    margin:theme.spacing(1),
    color:'white'
  },
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root1: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
  mainContainer:{
    backgroundColor: "#e5e1d4",
  },
  textfield:{
    marginBottom:'20px'
  },
  backbutton:{
    backgroundColor: "#8E8D8A",
    color:"white",
    margin:theme.spacing(1)
  },
  nextbutton:{
    backgroundColor:"#E85A4F",
    "&:hover": {
      backgroundColor: "#8E8D8A",
    },
    color:"white",
    margin:theme.spacing(1)
  },
  box:{
    margin:theme.spacing(2),
    //marginTop:'50px'
  },
  stepper:{
    background:"#E98074",
    borderRadius:"0.7rem",
    width:"80%"
  },
  step:{
    margin: theme.spacing(1),
    width: theme.spacing(10),
    height: theme.spacing(10)
  }
}));