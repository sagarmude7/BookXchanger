import React,{useState,useEffect} from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Dialog,
  List,
  ListItemText,
  ListItem,
  IconButton,
  Toolbar,
  AppBar,
  Divider,
  Slide ,
} from "@material-ui/core/";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import CloseIcon from "@material-ui/icons/Close";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import useStyles from "./style";
import moment from "moment";
import { useDispatch } from "react-redux";
import { addToWishList } from "../../../actions/books";
import {useHistory} from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Book = ({ book }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));
const [fav,setFav] = useState(book?.wishListedBy?.find((id) => id === user?.profile?.id));
const addtofavourite = () => {
  console.log("Adding To Favorites..");
  fav ? setFav(false): setFav(true);
  dispatch(addToWishList(book?._id));
};


const getBook = () => {
  history.push(`all/book/${book._id}`)
}

// const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
  return (
    <>
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        src="book"
        image={book?.selectedFile}
        title={book?.bookName}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{book?.bookName}</Typography>
        <Typography variant="body2">
          {moment(book?.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button color="primary" size="small">
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        ${book?.price}
      </Typography>
      <div className={classes.details}>
        <Typography variant="body2" color="secondary" component="h2">
          {book?.description}
        </Typography>
      </div>
      <CardContent>
        <Typography variant="body2" color="secondary" component="p">
          {book?.tags?.map((tag) => `#${tag} `)}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="medium" color="secondary" onClick={getBook}>
         {fav ? <FavoriteIcon /> :  <FavoriteBorderIcon />}
        </Button>
      </CardActions>
      <CardActions className={classes.cardActions}>
      <Button variant="outlined" color="primary" onClick={getBook}>
          bookInfo
      </Button>
      </CardActions>
    </Card>

{/* <div>

<Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
  <AppBar className={classes.appBar}>
    <Toolbar>
      <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
        <CloseIcon />
      </IconButton>
      <Typography variant="h6" className={classes.title} >
      {book?.bookName}
      </Typography>
    </Toolbar>
  </AppBar>
  <List>
    <ListItem button>
      <ListItemText primary="Branch" secondary={book?.branch} />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Subject" secondary={book?.subject} />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Price" secondary={book?.price} />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Condition" secondary={book?.condition} />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Date" secondary={book?.createdAt} />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Last Updated" secondary={book?.updatedAt} />
    </ListItem>
    <ListItem button>
    <ListItemText primary="Book Image" />
     <img src={book?.selectedFile} style={{position :"relative",right : "10px",top:"2px",width:"400px",height:"300px"}}/>
    </ListItem>
    <Divider />
  </List>
</Dialog>
</div> */}

</>

  );
};

export default Book;
