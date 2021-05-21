import React from "react";
import { Button, Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { verifiedUser } from "../../actions/auth";

const VerifyEmail = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClick = () => {
    const token = match.params.token;

    dispatch(verifiedUser(token, history));
  };
  return (
    <>
      <br />
      <br />
      <Box
        width="100%"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
        }}
      >
        <Button
          onClick={handleClick}
          variant="h4"
          style={{
            textAlign: "center",
            color: "cyan",
            background: "#e85a4f",
          }}
        >
          Verify Email
        </Button>
      </Box>
    </>
  );
};

export default VerifyEmail;
