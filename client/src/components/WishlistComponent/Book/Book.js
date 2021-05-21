import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardMedia,
  Button,
  Typography,
  Menu,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core/";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import ScheduleIcon from "@material-ui/icons/Schedule";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import useStyles from "./style";
import moment from "moment";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteaBookFromWish } from "../../../actions/books";
import { updatedIsSold } from "../../../actions/books";

const Book = ({ book }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  // const [book, setBook] = useState({});
  const localUser = JSON.parse(localStorage.getItem("profile"));
  const getBook = () => {
    history.push(`/all/book/${book._id}`);
  };

  const [DeleteOpen, setDeleteOpen] = React.useState(false);

  const handleDeleteOpen = () => {
    setDeleteOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  const deleteBook = () => {
    book.wishListedBy = book.wishListedBy.filter(
      (userId) => userId !== localUser.profile.id
    );
    dispatch(deleteaBookFromWish(book));
  };

  const [SoldOpen, setSoldOpen] = React.useState(false);

  const handleSoldOpen = () => {
    setSoldOpen(true);
  };

  const handleSoldClose = () => {
    setSoldOpen(false);
  };

  const soldBook = () => {
    dispatch(updatedIsSold(book._id));
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const editBook = () => {
    history.push(`/editBook/${book._id}`);
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
            <Button
              size="medium"
              style={{ color: "#E98074" }}
              onClick={handleDeleteOpen}
            >
              <DeleteIcon />
            </Button>
            <Dialog
              open={DeleteOpen}
              onClose={handleDeleteClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Do you want to remove this book from Wishlist ?"}
              </DialogTitle>

              <DialogActions>
                <Button
                  onClick={handleDeleteClose}
                  style={{ color: "#E85A4F" }}
                >
                  No
                </Button>
                <Button
                  onClick={deleteBook}
                  style={{ color: "#E85A4F" }}
                  autoFocus
                >
                  Yes
                </Button>
              </DialogActions>
            </Dialog>
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
              color: "#E98074",
            }}
          />
          <Link to={`/user/${book.owner}`} style={{ textDecoration: "none" }}>
            <Typography className={classes.owner}>{book.ownerName}</Typography>
          </Link>
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
    // <Card className={classes.card}>
    //   <CardMedia
    //     className={classes.media}
    //     image={book?.selectedFile}
    //     title={book?.title}
    //   />
    //   <div className={classes.overlay}>
    //     <Typography variant="h6">{book?.bookName}</Typography>
    //     <Typography variant="body2">
    //       {moment(book?.createdAt).fromNow()}
    //     </Typography>
    //   </div>
    //   <div className={classes.overlay2}>
    //     <Button color="primary" size="small" onClick={editaBook}>
    //       <MoreHorizIcon fontSize="default" />
    //     </Button>
    //   </div>
    //   <Typography
    //     className={classes.title}
    //     gutterBottom
    //     variant="h5"
    //     component="h2"
    //   >
    //     ${book?.price}
    //   </Typography>
    //   <div className={classes.details}>
    //     <Typography variant="body2" color="secondary" component="h2">
    //       {book?.description}
    //     </Typography>
    //   </div>
    //   <CardContent>
    //     <Typography variant="body2" color="secondary" component="p">
    //       {book?.tags.map((tag) => `#${tag} `)}
    //     </Typography>
    //   </CardContent>
    //   <CardActions className={classes.cardActions}>
    //     <Button size="medium" color="secondary" onClick={deleteBook}>
    //       <DeleteIcon />
    //     </Button>
    //     {book.isSold === false ? (
    //       <Button variant="contained" color="primary" onClick={onClickSold}>
    //         Sold
    //       </Button>
    //     ) : null}
    //   </CardActions>
    // </Card>
  );
};

export default Book;
