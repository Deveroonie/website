import { FaDiscord, FaGithub, FaInstagram, FaSteam, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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
        <a href="https://x.com/deveroonie" target="_blank" rel="noreferrer"><FaXTwitter className="inline-flex items-baseline" /></a>&nbsp;
        <a href="https://instagram.com/deve.roonie/" target="_blank" rel="noreferrer"><FaInstagram className="inline-flex items-baseline" /></a>&nbsp;
        <a href="https://youtube.com/@DeveroonieWasTaken" target="_blank" rel="noreferrer"><FaYoutube className="inline-flex items-baseline" /></a>&nbsp;
        <a href="https://www.tiktok.com/@deve.roonie" target="_blank" rel="noreferrer"><FaTiktok className="inline-flex items-baseline" /></a>&nbsp;
        <a href="https://discord.com/users/689173890450194434/" target="_blank" rel="noreferrer"><FaDiscord className="inline-flex items-baseline" /></a>&nbsp;
        <a href="https://github.com/Deveroonie" target="_blank" rel="noreferrer"><FaGithub className="inline-flex items-baseline" /></a>&nbsp;
        <a href="https://steamcommunity.com/id/Deveroonie/" target="_blank" rel="noreferrer"><FaSteam className="inline-flex items-baseline" /></a>&nbsp;

        </p>
        
      </div>
    
      
    </div>
    );
};