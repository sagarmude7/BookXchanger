import React,{useEffect,useState} from 'react'
import SendIcon from "@material-ui/icons/Send";
import useStyles from "./styles.js";
import {Button,Typography,TextField,Container} from '@material-ui/core'
import {useSelector,useDispatch} from 'react-redux'
import { ADD_CHAT,INITIAL_CHAT } from '../../../constants/actions.js';
import {socket} from '../../../service/socket'

const initialState = {
  content:'',from:'',to:'',fromName:''
}
const ChatBox = (props) => {
  const receiver = useSelector(state=>state.user)
  const chats = useSelector(state=>state.chats)
  const classes = useStyles()
  const dispatch = useDispatch()
  const [msgData,setMsgData] = useState(initialState)
  const user = JSON.parse(localStorage.getItem('profile')).profile

  useEffect(()=>{
    if(receiver){
      setMsgData({...msgData,to:receiver._id})
      console.log(receiver._id)
    }
  },[receiver])

  // useEffect(()=>{
  //   setChat(chat)
  //   console.log(chat)
  // },[chat])

  
  useEffect(()=>{
    if(receiver){
      socket.emit('join',{id:props.sender.id,receiver:receiver._id})
      console.log({id:props.sender.id,receiver:receiver._id})
    }
    socket.on('initial_msgs',(chat)=>{
      console.log(chat)
      // if(chats.length===0)
        dispatch({type:INITIAL_CHAT,payload:chat})
    })
    setMsgData({...msgData,from:props.sender.id,fromName:props.sender.name})
  },[receiver])
  var i=0;
  useEffect(()=>{
    socket.on('send_msg',(msg)=>{
      console.log(msg)
      console.log(chats)
      console.log(++i)
      // if(msg.from==)
      dispatch({type:ADD_CHAT,payload:msg})
    })
  },[])
  

  const handleChange = (e)=>{
    setMsgData({...msgData,[e.target.name]:e.target.value})
    if(msgData.to===""){
      setMsgData({...msgData,to:receiver._id})
    }
  }

  const handleSubmit = async(e)=>{
    await socket.emit('message',msgData)
    dispatch({type:ADD_CHAT,payload:msgData})
    setMsgData({...msgData,content:''})
  }

  return (
    <Container className={classes.chatBox}>
            <h1 style={{ color: "black", textAlign: "center" }}>
              Contact {receiver?.name}
            </h1>
            <Typography variant="h6" style={{ textAlign: "center" }}>
              Send Message
            </Typography>
            <hr
              style={{
                border: "1px solid #DF4C73",
                width: "80%",
              }}
            />
            <div style={{height:"300px",border:"2px solid #ff0"}}>
              {chats.length!==0?(chats.map(msg=>(
                (msg.from===user.id)?(
                  <>
                  <div style={{marginTop:"2px",padding:"3px",border:"1px solid #afa",background:"grey",maxWidth:"200px",textAlign:"center"}}>{msg.content}</div>
                  <br/>
                  </>
                ):(<>
                  <div style={{marginTop:"2px",padding:"3px",border:"1px solid #afa",background:"grey",maxWidth:"200px",textAlign:"center"}}>{msg.content}</div>
                  <br/>
                  </>
                )
              ))):null}
            </div>
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={2}
              name="content"
              value={msgData.content}
              onChange={handleChange}
              variant="outlined"
              style={{ width: "80%", margin: "20px" }}
            />
            <Button
              variant="outline"
              color="primary"
              className={classes.SendButton}
              endIcon={<SendIcon />}
              onClick={handleSubmit}
            >
              Send
            </Button>
            <div className={classes.guidelines}>
              <Typography variant="body1">Read before you deal</Typography>
              <div>
                <ul
                  style={{ listStyleType: "none" }}
                  className={classes.guidelineList}
                >
                  <li>1. Please follow Government guidelines for COVID19.</li>
                  <li>2. Use a safe location to meet seller</li>
                  <li>3. Never provide your personal or banking information</li>
                  <li>4. Beware of unrealistic offers</li>
                </ul>
              </div>
            </div>
          </Container>
  )
}

export default ChatBox
