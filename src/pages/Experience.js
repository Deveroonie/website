import '../App.css';
import Navigation from '../components/Navigation.js';
import Box from '../components/Box.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faHtml5, 
    faCss3Alt, 
    faSquareJs, 
    faReact, 
    faBootstrap, 
    faNodeJs, 
    faNpm 
} from '@fortawesome/free-brands-svg-icons'
function Experience() {
  return (
    <div>
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
            <FontAwesomeIcon icon={faHtml5} />&nbsp;
            <FontAwesomeIcon icon={faCss3Alt} />&nbsp;
            <FontAwesomeIcon icon={faSquareJs} />&nbsp;
            <FontAwesomeIcon icon={faBootstrap} />&nbsp;
            <FontAwesomeIcon icon={faReact} />
        </h3><br />
        <p>
            I do quite a lot of frontend development!
            I use HTML5, CSS3, and Bootstrap for most of my websites,<br />
            however I have started learning React and Tailwind (which is in use for this website).<br />
            I use EJS for most of my backend website's templating, however I am going to try and use React for that instead.
        </p>
    </div>
    <div className="bg-zinc-900 text-white rounded-xl drop-shadow-md p-8">
        <h3
        className="text-left hfont text-3xl">
            Backend Development&nbsp;&nbsp;
            <FontAwesomeIcon icon={faNodeJs} />&nbsp;
            <FontAwesomeIcon icon={faNpm} />
            </h3>
        <br />
        <p>
            I do some backend development, however not as much as I do frontend development.<br />
            I use NodeJS and NPM for this, with the Express package.
        </p>
    </div>
    <div className="bg-zinc-900 text-white rounded-xl drop-shadow-md p-8">
        <h3
        className="text-left hfont text-3xl">
            Discord Bot Development&nbsp;&nbsp;
            <FontAwesomeIcon icon={faNodeJs} />&nbsp;
            <FontAwesomeIcon icon={faNpm} />
        </h3>
        <br />
        <p>
            I do some Discord bot development occasionally.<br />
            For this i use the WornOffKeys command handler and Discord.js
        </p>
    </div>
    
</div>
    
    </div>
    </div>
  );

}


export default Experience;

    //<div className="col-start-2 row-start-2 bg-zinc-900 text-white rounded-xl drop-shadow-m">6</div>
    //<div className="col-start-1 row-start-2 bg-zinc-900 text-white rounded-xl drop-shadow-m">7</div>