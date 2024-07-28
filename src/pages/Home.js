import "../App.css";
import Navigation from "../components/Navigation.js";
import Box from "../components/Box.js";
import Helmet from "react-helmet";

function Home() {
  return (
    <div>
          <Helmet>
        <title>Deveroonie.uk</title>
    </Helmet>
      <Navigation></Navigation>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
    <Box desc="Full-stack developer from the UK."></Box>
    </div>
  );

};


export default Home;