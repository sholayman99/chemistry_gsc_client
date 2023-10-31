import BgAbout from "../../components/About/BgAbout";

import History from "../../components/About/History";
import ImgGallery from "../../components/About/ImgGallery";
import Importance from "../../components/About/Importance";
import MissionVision from "../../components/About/MissionVision";

const About = () => {
  return (
    <div>
      <BgAbout />
      <Importance />
      <MissionVision />
      <History />
      <ImgGallery />
    </div>
  );
};

export default About;
