import Album from "../../components/About/Album";
import BgAbout from "../../components/About/BgAbout";
import History from "../../components/About/History";
import Importance from "../../components/About/Importance";
import MissionVision from "../../components/About/MissionVision";

const About = () => {
  return (
    <div>
      <BgAbout />
      <Importance />
      <MissionVision />
      <History />
      <Album />
    </div>
  );
};

export default About;
