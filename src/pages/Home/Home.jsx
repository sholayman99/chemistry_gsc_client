import AcademicPrograms from "../../components/Home/AcademicPrograms";

import Banner from "../../components/Home/Banner";
import Hero from "../../components/Home/Hero";
import ImgGallery from "../../components/Home/ImgGallery";
import LatestEvents from "../../components/Home/LatestEvents";
import Message from "../../components/Home/Message";

const Home = () => {
  return (
    <div>
      <Banner />
      <Message />
      <Hero />
      <AcademicPrograms />
      <LatestEvents />
      <ImgGallery />
    </div>
  );
};

export default Home;
