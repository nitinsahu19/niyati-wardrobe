import React from "react";
// import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";
import { HomepageContainer } from "../../pages/homepage/homepage.styles";

const Homepage = () => {
  return (
    <HomepageContainer>
      <Directory />
    </HomepageContainer>
  );
};

export default Homepage;
