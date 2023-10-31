import BgAbout from "../../components/About/BgAbout";
import Gallery from "../../components/About/Gallery";
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
      <Gallery />
    </div>
  );
};

export default About;
