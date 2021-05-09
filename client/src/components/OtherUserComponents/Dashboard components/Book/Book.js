import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core/";

import useStyles from "./style";
import moment from "moment";

const Book = ({ book }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={book?.selectedFile}
        title={book?.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{book?.bookName}</Typography>
        <Typography variant="body2">
          {moment(book?.createdAt).fromNow()}
        </Typography>
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
          {book?.tags.map((tag) => `#${tag} `)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Book;
