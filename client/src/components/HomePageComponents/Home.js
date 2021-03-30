import React, { useEffect } from "react";
import Description from "./Description/Description.js";
import Chatbot from "./Chatbot/chatbot.js";
import HowToSell from "./HowToSell/HowToSell.js";
import Footer from "../Footer/footer.js";
import BookSlider from "./BookSlider/BookSlider.js";

import Feedback from "./Feedback/Feedback.js";
const Home = () => {
  return (
    <>
      <Description />
      <BookSlider />
      <HowToSell />
      <Feedback />
      <Chatbot />
      <Footer />
    </>
  );
};

export default Home;
