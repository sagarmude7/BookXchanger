import React from "react";
import Description from "./Description/Description.js";
import Feature from "./Features/Feature.js";
import DevelopedBy from "./DevelopedBy/DevelopedBy.js";
import useStyles from "./styles.js";
import ContactForm from "./ContactForm/contactform.js";
const About = () => {
  const classes = useStyles();

  return (
    <>
      <Description />
      <Feature />
      <ContactForm />
      <DevelopedBy />


    </>
  );
};

export default About;
