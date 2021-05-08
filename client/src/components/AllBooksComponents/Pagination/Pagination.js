import React from "react";
import { Button } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import useStyles from "./styles";
export const Pagination = ({ booksPerpage, totalBooks, paginate }) => {
  const classes = useStyles();

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBooks / booksPerpage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <nav>
        <ul
          className="pagination"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translatex(-50%)",
          }}
        >
          <Button
            size="small"
            onClick={() => paginate(pageNumbers[0])}
            className={classes.button}
          >
            <NavigateBeforeIcon />
          </Button>
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <Button
                onClick={() => paginate(number)}
                className={classes.button}
              >
                {number}
              </Button>
            </li>
          ))}
          <Button
            onClick={() =>
              paginate(pageNumbers[Math.ceil(totalBooks / booksPerpage) - 1])
            }
            className={classes.button}
          >
            <NavigateNextIcon />
          </Button>
        </ul>
      </nav>
    </>
  );
};
