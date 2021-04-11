import React from 'react'
import { Container, Typography,Card,CardActions,CardContent,Button } from "@material-ui/core";
import { getRecentUsers } from "./../../../actions/user";
import useStyles from "../styles";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {useHistory} from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import img from '../profilepic.png';
import ChatIcon from '@material-ui/icons/Chat';
import IconButton from '@material-ui/core/IconButton';

const Message = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();
    const recents = useSelector(state=>state.recents);

    useEffect(()=>{
        dispatch(getRecentUsers())
      },[])

    return (
        
    <div >
      <Container className={classes.messageBody}>
      <Typography variant="h6" component="h6">Messages</Typography>
        {recents.map((user)=>(
          <Card className={classes.messageCard} variant="outlined">
            <CardContent className={classes.messageCardContent} >
              <Avatar src={user.profilePic} className={classes.large}></Avatar>
              <div>
                <Typography className={classes.messagePrimary} variant="h5" component="h2">
                    {user.name}
                </Typography>
                <Typography className={classes.messageSecondary} variant="body2" component="p">
                    Recently Sent You a Message
                </Typography>
            </div>
            </CardContent>
              <CardActions>
                <IconButton className={classes.messageButtonOuter} onClick={()=>history.push(`user/${user.id}`)} size="small"><ChatIcon className={classes.messageButton}/></IconButton>
              </CardActions>
        </Card>
        ))}
      </Container>
    </div>
        
    )
}

export default Message
