import AcademicPrograms from "../components/Home/AcademicPrograms";
import Banner from "../components/Home/Banner";
import Hero from "../components/Home/Hero";
import LatestEvents from "../components/Home/LatestEvents";




const Home = () => {
    return (
        <div>
           <Banner />
           <Hero />
           <AcademicPrograms />
           <LatestEvents />
        </div>
    );
};

export default Home;