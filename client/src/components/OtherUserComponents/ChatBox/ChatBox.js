import React,{useEffect,useState} from 'react'
import SendIcon from "@material-ui/icons/Send";
import useStyles from "./styles.js";
import {Button,Typography,TextField,Container} from '@material-ui/core'
import {useSelector,useDispatch} from 'react-redux'
import { ADD_CHAT,INITIAL_CHAT } from '../../../constants/actions.js';
import {socket} from '../../../service/socket'
import moment from 'moment'

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
      setMsgData({...msgData,to:receiver._id,from:user.id,fromName:user.name})
      console.log(receiver._id)
    }
  },[receiver])

  // useEffect(()=>{
  //   setChat(chat)
  //   console.log(chat)
  // },[chat])

  
  
  useEffect(()=>{
    if(receiver){
      socket.emit('join',{id:user.id,receiver:receiver._id})
      console.log({id:user.id,receiver:receiver._id})
    }
    socket.on('initial_msgs',async(chat)=>{
      // if(chats.length===0)
        await dispatch({type:INITIAL_CHAT,payload:chat})
    })
    setMsgData({...msgData,from:user.id,fromName:user.name})
  },[receiver])
  var i=0;
  useEffect(()=>{
    socket.on('send_msg',(msg)=>{
      // console.log(msg)
      
      // console.log(++i)
      // console.log(msg.from===receiver._id)
      if(i == 0 ){
        console.log("Msg")
        console.log(i++)
        if((msg.from===receiver._id)||(msg.from===user.id))
         dispatch({type:ADD_CHAT,payload:msg})
      }

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
    // dispatch({type:ADD_CHAT,payload:msgData})
    setMsgData({...msgData,content:''})
  }

  return (
    <Container className={classes.chatBox}>
            <h1 className={classes.title} >
              Contact {receiver?.name}
            </h1>
            <Typography variant="h6" style={{ textAlign: "center" }}>
              Send Message
            </Typography>
            <hr
              style={{
                border: "1px solid green",
                width: "80%",
              }}
            />
            <div className={classes.msgBox}>
            
              {chats.length!==0?(chats.map(msg=>(
                (msg.from===user.id)?(
                  <>

                  <p className={classes.msg1}>{msg.content} &nbsp; {moment(msg.sentAt).format('LT')}</p>
                
                  <br/>
                  </>
                ):(<>
                  <p className={classes.msg2}>{msg.content} &nbsp; {moment(msg.sentAt).format('LT')}</p>

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