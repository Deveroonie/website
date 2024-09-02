import "../App.css";
import Navigation from "../components/Navigation.js";
import Box from "../components/Box.js";
import Helmet from "react-helmet";
import { FaHtml5, FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io";
import { CgNpm } from "react-icons/cg";

function Experience() {
  return (
    <div>
            <Helmet>
        <title>Experience | Deveroonie.uk</title>
    </Helmet>
      <Navigation></Navigation>
      <br></br>
      <br></br>
      <br></br>

    <Box desc="This page shows all of the coding languages/frameworks I am able to use."></Box>
    <br></br>
    <div className="container mx-auto p-8 m-10">
    <div className="grid last:md:grid-cols-2 sm:grid-cols-1 gap-4">
    <div className="bg-zinc-900 text-white rounded-xl drop-shadow-md p-8">
        <h3
        className="text-left hfont text-3xl">
            Frontend Development&nbsp;&nbsp;
            <FaHtml5 className="inline-flex items-baseline" />&nbsp;
            <IoLogoCss3 className="inline-flex items-baseline"/>&nbsp;
            <FaJsSquare className="inline-flex items-baseline" />&nbsp;
            <FaReact className="inline-flex items-baseline" />&nbsp;
            <RiNextjsFill className="inline-flex items-baseline" />&nbsp;
            <RiTailwindCssFill className="inline-flex items-baseline" />
        </h3><br />
        <p>
            Frontend Development is what I have been doing the longest, since August 2020. Over the last 4 years, I have gone from creating basic websites to creating full-stack web applications with TailwindCSS, React, etc.
        </p>
    </div>
    <div className="bg-zinc-900 text-white rounded-xl drop-shadow-md p-8">
        <h3
        className="text-left hfont text-3xl">
            Backend Development&nbsp;&nbsp;
            <FaNodeJs className="inline-flex items-baseline" />&nbsp;
            <CgNpm className="inline-flex items-baseline" />&nbsp;
            <SiExpress className="inline-flex items-baseline" />&nbsp;
            <SiMongodb className="inline-flex items-baseline" />&nbsp;
            </h3>
        <br />
        <p>
            I've being doing Backend website development since July 2021, using NodeJS and Express. Over the last 3 years, I have learned how to handle authentication, database integration, file uploads to S3, and more!
        </p>
    </div>
    <div className="bg-zinc-900 text-white rounded-xl drop-shadow-md p-8">
        <h3
        className="text-left hfont text-3xl">
            Discord Bot Development&nbsp;&nbsp;
            <FaNodeJs className="inline-flex items-baseline" />&nbsp;
            <CgNpm className="inline-flex items-baseline" />&nbsp;
            <SiMongodb className="inline-flex items-baseline"/>
        </h3>
        <br />
        <p>
            I've been doing Discord Bot Development since November 2020. During the last 3 years, I have learned how to create Discord bots with every kind of feature you can think of! Moderation, suggestions, API integrations, and a lot of other features!
        </p>
    </div>
    
</div>
    
    </div>
    </div>
  );

};


export default Experience;

    //<div className="col-start-2 row-start-2 bg-zinc-900 text-white rounded-xl drop-shadow-m">6</div>
    //<div className="col-start-1 row-start-2 bg-zinc-900 text-white rounded-xl drop-shadow-m">7</div>