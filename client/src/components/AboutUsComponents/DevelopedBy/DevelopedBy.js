import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Typography, Grid, Container } from "@material-ui/core";
import Profile from "./Profile";
import { profiles } from "./descProfile";
const DevelopedBy = () => {
  console.log(profiles);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      // profile: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      // profile: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 460 },
      items: 2,
      // profile: 2,
    },
    mobile: {
      breakpoint: { max: 460, min: 0 },
      items: 1,
      // profile: 1,
    },
  };

  return (
    <>
      <Typography variant="h6" style={{ textAlign: "center", color: "black" }}>
        Developed By-
      </Typography>
      <hr style={{ border: "1px solid black", width: "300px" }} />
      <hr style={{ borderWidth: "0px" }} />

      <Carousel
        responsive={responsive}
        arrows={false}
        infinite={true}
        autoPlay={true}
      >
        {profiles.map((profile, index) => (
          <div>
            <Grid>
              <Container>
                <Profile
                  key={index}
                  name={profile.name}
                  subHeading={profile.subHeading}
                  img={profile.img}
                  github={profile.github}
                  linkedin={profile.linkedin}
                />
              </Container>
            </Grid>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default DevelopedBy;
