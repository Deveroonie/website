import "../App.css";
import Navigation from "../components/Navigation.js";
import Box from "../components/Box.js";
import { Helmet } from "react-helmet";
import { DiReact } from "react-icons/di";
function Domains() {
  return (

    <div>
    <Helmet>
        <title>Domains | Deveroonie.uk</title>
    </Helmet>
      <Navigation></Navigation>
      <br></br>
      <br></br>
      <br></br>

    <Box desc={<span>This page shows all of the domains I own. If a domain is not on this page, I do <u>not</u> own it.</span>}></Box>
    <br></br>
    <div className="container mx-auto p-8 m-10">
    <div className="grid last:md:grid-cols-2 sm:grid-cols-1 gap-4">
        
    <div className="bg-zinc-900 text-white rounded-xl drop-shadow-md p-8">
        <h3 className="text-left hfont text-3xl">
            <a href="https://woody.cat/" className="underline hover:text-violet-400">woody.cat</a>
        </h3><br />
        <p>
            <code>woody.cat</code> is a website that shows photos of my cat, Woody.
        </p>
    </div>
    <div className="bg-zinc-900 text-white rounded-xl drop-shadow-md p-8">
        <h3 className="text-left hfont text-3xl">
            <a href="http://11202311.xyz/" className="underline hover:text-violet-400">11202311.xyz</a>
        </h3><br />
        <p>
            <code>11202311.xyz</code> is a domain that I purchased for my Minecraft server. It isn't currently in use.
        </p>
    </div>
    <div className="bg-zinc-900 text-white rounded-xl drop-shadow-md p-8">
        <h3 className="text-left hfont text-3xl">
            <a href="https://deveroonie.uk/" className="underline hover:text-violet-400">deveroonie.uk</a>
        </h3><br />
        <p>
            <code>deveroonie.uk</code> is this website. It is my portfolio and shows information about me, such as what coding languages I can use, what projects I have made, and other information.
        </p>
    </div>
    <div className="bg-zinc-900 text-white rounded-xl drop-shadow-md p-8">
        <h3 className="text-left hfont text-3xl">
            <a href="https://deveroonie.co.uk/" className="underline hover:text-violet-400">deveroonie.co.uk</a>
        </h3><br />
        <p>
            <code>deveroonie.co.uk</code> is a domain I purchased. I plan to move this website over to it.
        </p>
    </div>
    <div className="bg-zinc-900 text-white rounded-xl drop-shadow-md p-8">
        <h3 className="text-left hfont text-3xl">
            <a href="http://cdexsgacademy.xyz/" className="underline hover:text-violet-400">cdexsgacademy.xyz</a>
        </h3><br />
        <p>
            <code>cdexsgacademy.xyz</code> is a domain I purchased for a friend, however they didn't end up needing it. It isn't currently in use.
        </p>
    </div>
    <div className="bg-zinc-900 text-white rounded-xl drop-shadow-md p-8">
        <h3 className="text-left hfont text-3xl">
            <a href="https://blazeburstmc.com/" className="underline hover:text-violet-400">blazeburstmc.com</a>
        </h3><br />
        <p>
            <code>blazeburstmc.com</code> is a domain I purchased for my Minecraft server. It isn't currently in use.
        </p>
    </div>
</div>
    
    </div>
    </div>
  );

};


export default Domains;
