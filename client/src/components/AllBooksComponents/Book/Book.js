import React, { useState, useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Slide,
} from "@material-ui/core/";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import ScheduleIcon from "@material-ui/icons/Schedule";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import CloseIcon from "@material-ui/icons/Close";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import useStyles from "./style";
import moment from "moment";
import { useDispatch } from "react-redux";
import { addToWishList, getBooks } from "../../../actions/books";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const user = JSON.parse(localStorage.getItem("profile"));
const Book = ({ book }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));
  const [fav, setFav] = useState(false);
  useEffect(() => {
    if (book)
      setFav(book?.wishListedBy?.find((id) => id === user?.profile?.id));
  }, []);
  const addtofavourite = () => {
    console.log("Adding To Favorites..");
    fav ? setFav(false) : setFav(true);
    dispatch(addToWishList(book._id));
    // dispatch(getBooks())
  };

  const getBook = () => {
    history.push(`/all/book/${book._id}`);
  };

  return (
    <>
      <Card className={classes.card}>
        <div className={classes.top}>
          <CardMedia
            className={classes.media}
            src="book"
            image={book.selectedFile}
          />

          <Typography className={classes.price}>
            {"₹"}
            {book.price}
            {" ("}
            {book.priceType}
            {")"}
          </Typography>

          <CardActions className={classes.favourite}>
            <Button size="medium" color="secondary" onClick={addtofavourite}>
              {fav ? (
                <FavoriteIcon disableFocusRipple={true} disableRipple={false} />
              ) : (
                <FavoriteBorderIcon />
              )}
            </Button>
          </CardActions>
        </div>

        <div>
          <Typography variant="body2" className={classes.Branch}>
            {book.branch}
          </Typography>
        </div>

        <Typography variant="h6" className={classes.BookName}>
          {book.bookName}
        </Typography>

        <Typography variant="body2" className={classes.Description}>
          {book.description}
        </Typography>

        <CardActions disableSpacing>
          <PersonPinIcon
            style={{
              marginLeft: "5px",
              marginRight: "5px",
              color: "#df4c73",
            }}
          />
          {
            user ? 
            <Link to={`/user/${book.owner}`}  style={{ textDecoration: "none" }}>
            <Typography className={classes.owner}>{book.ownerName}</Typography>
          </Link>
            :
            <Link to={`/auth`}  style={{ textDecoration: "none" }}>
            <Typography className={classes.owner}>{book.ownerName}</Typography>
          </Link>
          }
        </CardActions>

        <CardActions disableSpacing>
          <ScheduleIcon
            fontSize="small"
            style={{ marginLeft: "5px", marginRight: "5px" }}
          />
          <Typography variant="body2">
            {moment(book.createdAt).format("DD MMM, YYYY")}
          </Typography>
        </CardActions>

        <Button variant="outlined" onClick={getBook} className={classes.button}>
          bookInfo
        </Button>
      </Card>
    </>
  );
};

export default Book;
