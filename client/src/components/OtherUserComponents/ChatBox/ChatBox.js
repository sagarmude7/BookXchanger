import React, { useEffect, useState } from "react";
import SendIcon from "@material-ui/icons/Send";
import useStyles from "./styles.js";
import { Typography, TextField, Container, Fab } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { ADD_CHAT, INITIAL_CHAT } from "../../../constants/actions.js";
import { socket } from "../../../service/socket";
import moment from "moment";

const initialState = {
  content: "",
  from: "",
  to: "",
  fromName: "",
};
const ChatBox = () => {
  const receiver = useSelector((state) => state.user);
  const chats = useSelector((state) => state.chats);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [msgData, setMsgData] = useState(initialState);
  const [newMsg, setNewMsg] = useState({});
  const user = JSON.parse(localStorage.getItem("profile")).profile;

  useEffect(() => {
    if (receiver._id) {
      localStorage.setItem("receiver", JSON.stringify({ id: receiver._id }));
      setMsgData({
        ...msgData,
        to: receiver._id,
        from: user.id,
        fromName: user.name,
      });
      socket.emit("join", { id: user.id, receiver: receiver._id });
      socket.on("initial_msgs", (chat) => {
        dispatch({ type: INITIAL_CHAT, payload: chat });
      });
    }
  }, [receiver._id]);

  useEffect(() => {
    socket.on("send_msg", (msg) => {
      const receiver_id = JSON.parse(localStorage.getItem("receiver")).id;

      if (msg.from === receiver_id || msg.from === user.id) {
        setNewMsg(msg);
      }
    });
  }, []);
  useEffect(() => {
    dispatch({ type: ADD_CHAT, payload: newMsg });
  }, [newMsg, dispatch]);

  const handleChange = (e) => {
    setMsgData({ ...msgData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    if (msgData.content !== "") {
      socket.emit("message", msgData);
    }
    setMsgData({ ...msgData, content: "" });
  };

  return (
    <Container>
      <div className={classes.chatHead}>
        <Typography variant="h6" className={classes.title}>
          Contact {receiver?.name}
        </Typography>
        <Typography variant="body1" style={{ textAlign: "center" }}>
          Send Message
        </Typography>
      </div>

      <div className={classes.msgBox}>
        {chats.length !== 0
          ? chats.map((msg) =>
              msg.from === user.id ? (
                <>
                  <Typography
                    variant="body2"
                    component="p"
                    className={classes.msg1}
                  >
                    {msg.content} <br />
                    <span style={{ fontSize: "12px" }} className={classes.time}>
                      {moment(msg.sentAt).format("LT")}
                    </span>{" "}
                  </Typography>

                  <br />
                </>
              ) : (
                <>
                  <Typography
                    variant="body2"
                    component="p"
                    className={classes.msg2}
                  >
                    {msg.content} <br />
                    <span style={{ fontSize: "12px" }} className={classes.time}>
                      {" "}
                      {moment(msg.sentAt).format("LT")}
                    </span>
                  </Typography>

                  <br />
                </>
              )
            )
          : null}
      </div>
      <div className={classes.send}>
        <TextField
          id="standard-multiline-static"
          multiline
          name="content"
          value={msgData.content}
          onChange={handleChange}
          variant="standard"
          style={{ width: "100%", margin: "20px 2px" }}
          placeholder="Type message here..."
        />
        <Fab
          aria-label="edit"
          onClick={handleSubmit}
          className={classes.SendButton}
          style={{ backgroundColor: "#e85a4f", margin: "0px 10px" }}
        >
          <SendIcon style={{ backgroundColor: "#e85a4f", color: "white" }} />
        </Fab>
      </div>
    </Container>
  );
};

export default ChatBox;
