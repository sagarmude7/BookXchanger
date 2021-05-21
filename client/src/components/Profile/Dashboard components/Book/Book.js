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
import { updatedIsSold, deleteaBook } from "../../../../actions/books";

const Book = ({ book }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

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
    dispatch(deleteaBook(book._id));
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
          <div className={classes.overlay2}>
            <Button
              style={{ color: "#E98074" }}
              size="medium"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon fontSize="default" />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={editBook} disabled={book.isSold === true}>
                Edit
              </MenuItem>
              <MenuItem
                onClick={handleSoldOpen}
                disabled={book.isSold === true}
              >
                Sold
              </MenuItem>
            </Menu>
            <Dialog
              open={SoldOpen}
              onClose={handleSoldClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Have you sell this book?"}
              </DialogTitle>

              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  If Yes, this book will no longer be able for sell.
                </DialogContentText>
              </DialogContent>

              <DialogActions>
                <Button onClick={handleSoldClose} color="primary">
                  No
                </Button>
                <Button onClick={soldBook} color="primary" autoFocus>
                  Yes
                </Button>
              </DialogActions>
            </Dialog>
          </div>
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
                {"Do you want to delete this Ad?"}
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
        <div className={classes.BookName}>
          <Typography variant="h6">
            {book.bookName}
          </Typography>
        </div>
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
  );
};

export default Book;
