import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faYoutube, faGithub, faSteam, faTwitter, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
export default function Box(data) {
    return (
        <div className="container mx-auto p-8 m-10">
      <div>
      <img src="/Logo.png" width={192} height={192} alt="My Logo" className="self-center w-32 h-32 rounded-full mx-1 box" />
      <p className="text-3xl text-white font-bold mb-5 text-left">
       Deveroonie<br></br>
      </p>
      <div className="flxd">
      <p className="text-gray-500 text-lg">
      {data.desc}
        </p>
        </div>
        
        <br></br>
        <p className="text-3xl text-white font-bold mb-5 text-left">
        <a href="https://x.com/deveroonie" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>&nbsp;&nbsp;&nbsp;
        <a href="https://instagram.com/deve.roonie/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>&nbsp;&nbsp;&nbsp;
        <a href="https://youtube.com/@DeveroonieWasTaken" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>&nbsp;&nbsp;&nbsp;
        <a href="https://www.tiktok.com/@deve.roonie" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTiktok} /></a>&nbsp;&nbsp;&nbsp;
        <a href="https://discord.com/users/689173890450194434/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDiscord} /></a>&nbsp;&nbsp;&nbsp;
        <a href="https://github.com/Deveroonie" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>&nbsp;&nbsp;&nbsp;
        <a href="https://steamcommunity.com/id/Deveroonie/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faSteam} /></a>&nbsp;&nbsp;&nbsp;

        </p>
        
      </div>
    
      
    </div>
    );
};