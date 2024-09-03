import "../App.css";
import Navigation from "../components/Navigation.js";
import Box from "../components/Box.js";
import { Helmet } from "react-helmet";

import { FaReact, FaJs } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
function Projects() {
  return (

    <>
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
                    <h3 className="text-left hfont text-3xl">
                        <a href="https://deveroonie.uk/" className="underline hover:text-violet-400">This website</a>&nbsp;&nbsp;
                        <FaReact className="inline-flex items-baseline"/>&nbsp;
                        <RiTailwindCssFill className="inline-flex items-baseline" />
                    </h3><br />
                    <p>
                        This website. It is one of my longest running projects, and has been rewritten 4 times. The current rewrite uses React and TailwindCSS. It displays information about the coding languages I can use, my projects, and some other things.
                    </p>
                </div>
                <div className="bg-zinc-900 text-white rounded-xl drop-shadow-md p-8">
                    <h3 className="text-left hfont text-3xl">
                        <a href="https://woody.cat/" className="underline hover:text-violet-400">Woody's Website</a>&nbsp;&nbsp;
                        <RiNextjsFill className="inline-flex items-baseline"/>&nbsp;
                        <RiTailwindCssFill className="inline-flex items-baseline" />&nbsp;
                        <SiExpress className="inline-flex items-baseline" />&nbsp;
                        <SiMongodb className="inline-flex items-baseline" />&nbsp;
                    </h3><br />
                    <p>
                        A website that shows photos of my cat. On the frontend, it uses NextJS and TailwindCSS, and on the backend it uses ExpressJS and Mongoose.
                    </p>
                </div>
                <div className="bg-zinc-900 text-white rounded-xl drop-shadow-md p-8">
                    <h3 className="text-left hfont text-3xl">
                        <a href="https://tflstatus.deveroonie.uk/" className="underline hover:text-violet-400">TfL Status Website</a>&nbsp;&nbsp;
                        <FaReact className="inline-flex items-baseline"/>&nbsp;
                        <RiTailwindCssFill className="inline-flex items-baseline" />
                    </h3><br />
                    <p>
                        A website that shows the live status of the TfL network, including the Underground, Overground, Trams, Elizabeth Line, etc. It uses React and TailwindCSS, and fetches data from the TfL Unified API.
                    </p>
                </div>
                <div className="bg-zinc-900 text-white rounded-xl drop-shadow-md p-8">
                    <h3 className="text-left hfont text-3xl">
                        <a href="https://nrdepartures.deveroonie.uk/" className="underline hover:text-violet-400">National Rail Departures Website</a>&nbsp;&nbsp;
                        <FaReact className="inline-flex items-baseline"/>&nbsp;
                        <RiTailwindCssFill className="inline-flex items-baseline" />
                    </h3><br />
                    <p>
                        A website that shows the live departures of any National Rail station in the UK. It uses React and TailwindCSS.
                    </p>
                </div>
                <div className="bg-zinc-900 text-white rounded-xl drop-shadow-md p-8">
                    <h3 className="text-left hfont text-3xl">
                        <a href="https://builtbybit.com/resources/uk-train-information-solix-module.50126/" className="underline hover:text-violet-400">UK Trains Solix Module</a>&nbsp;&nbsp;
                        <FaJs className="inline-flex items-baseline"/>
                    </h3><br />
                    <p>
                        A module for a Discord Bot called Solix, that displays the status of the TfL network, has a journey planner, can show the departures at any National Rail station, any tube station, or any DLR station!
                    </p>
                </div>
                <div className="bg-zinc-900 text-white rounded-xl drop-shadow-md p-8">
                    <h3 className="text-left hfont text-3xl">
                        <a href="https://builtbybit.com/resources/us-train-information-solix-module.50581/" className="underline hover:text-violet-400">US Trains Solix Module</a>&nbsp;&nbsp;
                        <FaJs className="inline-flex items-baseline"/>
                    </h3><br />
                    <p>
                        A module for a Discord Bot called Solix, that can show the departures at any Amtrak or Washington Metro station!
                    </p>
                </div>
                <div className="bg-zinc-900 text-white rounded-xl drop-shadow-md p-8">
                    <h3 className="text-left hfont text-3xl">
                        <a href="https://builtbybit.com/resources/vouchley-module-for-solix.50790/" className="underline hover:text-violet-400">Vouchley Solix Module</a>&nbsp;&nbsp;
                        <FaJs className="inline-flex items-baseline"/>
                    </h3><br />
                    <p>
                        A module for a Discord Bot called Solix, that displays the reviews and other information about any Vouchley user.
                    </p>
                </div>
            </div>
        </div>
    </>
  );

};


export default Projects;
