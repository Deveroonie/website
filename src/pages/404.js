import "../App.css";
import Navigation from "../components/Navigation.js";
import Box from "../components/Box.js";
import Helmet from "react-helmet";

function NotFound() {
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
      
    <Box desc="We couldn't find the page you were looking for."></Box>
    </div>
  );

};


export default NotFound;