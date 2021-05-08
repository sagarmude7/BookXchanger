import React from "react";
import Description from "./Description/Description.js";
import Feature from "./Features/Feature.js";
import DevelopedBy from "./DevelopedBy/DevelopedBy.js";
import useStyles from "./styles.js";
import ContactForm from "./ContactForm/contactform.js";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const About = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <>
      <ArrowBackIcon
        className={classes.back}
        onClick={() => history.goBack()}
        fontSize="large"
      ></ArrowBackIcon>
      <div style={{ background: "e85a4f" }}>
        <Description />
        <Feature />
        <DevelopedBy />
        <ContactForm />
      </div>
    </>
  );
};

export default About;
