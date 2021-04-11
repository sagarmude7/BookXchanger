import React from "react";
import Description from "./Description/Description.js";
import Feature from "./Features/Feature.js";
import DevelopedBy from "./DevelopedBy/DevelopedBy.js";
import useStyles from "./styles.js";
import ContactForm from "./ContactForm/contactform.js";
const About = () => {
  return (
    <>
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
