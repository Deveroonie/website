import "../App.css";
import Navigation from "../components/Navigation.js";
import Box from "../components/Box.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";

import {
    faHtml5,
    faCss3Alt,
    faSquareJs,
    faReact
} from "@fortawesome/free-brands-svg-icons";
function Projects() {
  return (

    <div>
    <Helmet>
        <title>Projects | Deveroonie.uk</title>
    </Helmet>
      <Navigation></Navigation>
      <br></br>
      <br></br>
      <br></br>

    <Box desc="This page shows all of the projects that I have created, what they use and where you can find the source code."></Box>
    <br></br>
    <div className="container mx-auto p-8 m-10">
    <div className="grid last:md:grid-cols-2 sm:grid-cols-1 gap-4">
        
    <div className="bg-zinc-900 text-white rounded-xl drop-shadow-md p-8">
    <h3
        className="text-right hfont text-3xl">
            <a href="https://tflstatus.deveroonie.uk/" target="_blank" rel="noreferrer">TfL Status Website</a>&nbsp;&nbsp;
            <FontAwesomeIcon icon={faReact} />
        </h3>
        <div className="flx">
        <img src="/TFL.png" width={192} height={192} className="proj-icon" alt="TFL's Logo"></img>
        <br />
        <p className="text-right">
            A website to see the status of the TfL network. It uses TailwindCSS<br /> and React.
            You can see the source code <a href="https://github.com/Deveroonie/TfLStatus" target="_blank" rel="noreferrer" className="underline">here</a>.
        </p>  
        </div>

        
    </div>
    <div className="bg-zinc-900 text-white rounded-xl drop-shadow-md p-8">
    <h3
        className="text-right hfont text-3xl">
            <a href="https://nrstatus.deveroonie.uk/" target="_blank" rel="noreferrer">National Rail Status Website</a>&nbsp;&nbsp;
            <FontAwesomeIcon icon={faReact} />
        </h3>
        <div className="flx">
        <img src="/NR.png" width={192} height={192} className="proj-icon" alt="National Rail's Logo"></img>
        <br />
        <p className="text-right">
            A website to see the status of the National Rail network.
            It uses TailwindCSS, and React.<br />
            You can see the source code <a href="https://github.com/Deveroonie/NRStatus" target="_blank" rel="noreferrer" class="underline">here</a>.
        </p>  
        </div>
    </div>
        <div className="bg-zinc-900 text-white rounded-xl drop-shadow-md p-8">
    <h3
        className="text-right hfont text-3xl">
            <a href="https://nrdepartures.deveroonie.uk/" target="_blank" rel="noreferrer">National Rail Departures Website</a>&nbsp;&nbsp;
            <FontAwesomeIcon icon={faReact} />
        </h3>
        <div className="flx">
        <img src="/NR.png" width={192} height={192} className="proj-icon" alt="National Rail's Log"></img>
        <br />
        <p className="text-right">
            A website to see the live departures/arrivals of any station on the National Rail network.
            It uses TailwindCSS, and React.
            You can see the source code <a href="https://github.com/Deveroonie/NRDepartures" target="_blank" rel="noreferrer" className="underline">here</a>.
        </p> 
        </div>
    </div>
    <div className="bg-zinc-900 text-white rounded-xl drop-shadow-md p-8">
    <h3
        className="text-right hfont text-3xl">
            <a href="https://deveroonie.uk/">This Website</a>&nbsp;&nbsp;
            <FontAwesomeIcon icon={faHtml5} />&nbsp;
            <FontAwesomeIcon icon={faCss3Alt} />&nbsp;
            <FontAwesomeIcon icon={faSquareJs} />&nbsp;
            <FontAwesomeIcon icon={faReact} />  
        </h3>
        <div className="flx">
        <img src="/Logo.png" width={192} height={192} className="proj-icon" alt="My Logo"></img>
        <br />
        <p className="text-right">
            This website. It displays information about the frameworks that I can work with, and the projects that I have made.<br />
            It uses React and TailwindCSS.<br />
            You can see the source code <a href="https://github.com/Deveroonie/Website" target="_blank" rel="noreferrer" className="underline">here</a>.
        </p>  
        </div>
    </div>
</div>
    
    </div>
    </div>
  );

};


export default Projects;
