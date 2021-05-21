import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import useStyles from "./styles.js";
import { Grid } from "@material-ui/core";

import Typography from "@material-ui/core/Typography";
import Book from "../../AllBooksComponents/Book/Book";
import { useSelector } from "react-redux";
import { css } from "@emotion/react";
import PulseLoader from "react-spinners/PulseLoader";

const Dashboard = ({ userId }) => {
  const user = useSelector((state) => state.user);
  const books = useSelector((state) => state.books);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (books.length !== 0) {
      setLoading(false);
    }
  }, [books]);

  const override = css`
    display: block;
    border-color: red;
    background-color: #eae7dc;
  `;

  function card(book) {
    return (
      <Grid className={classes.grid}>
        <Book key={book._id} book={book} style={{ width: "auto" }} />
      </Grid>
    );
  }

  const classes = useStyles();

  return (
    <>
      <Container className={classes.body}>
        <Typography
          variant="h5"
          style={{ textAlign: "center", paddingTop: "10px" }}
        >
          Ads Posted By {user.name}
        </Typography>
        <hr
          style={{
            border: "1.5px solid #8e8d8a",
            width: "50%",
            background: "rgb(234,231,220)",
            margin: "0px auto",
          }}
        />
        {loading ? (
          <div style={{ textAlign: "center" }}>
            <PulseLoader
              loading={loading}
              color="#e98074"
              css={override}
              size={30}
              style={{ background: "rgb(234,231,220)" }}
            />
          </div>
        ) : (
          <Grid
            className={classes.container}
            container
            alignItems="stretch"
            spacing={2}
          >
            {books.filter(
              (book) => book.owner === userId && book.isSold === false
            ).length !== 0 ? (
              <>
                {books
                  .filter(
                    (book) => book.owner === userId && book.isSold === false
                  )
                  ?.map(card)}
              </>
            ) : (
              <>
                <Typography align="center" variant="h3">
                  {" "}
                  No Active Ads{" "}
                </Typography>{" "}
              </>
            )}
          </Grid>
        )}
      </Container>
    </>
  );
};

export default Dashboard;
