import AcademicPrograms from "../components/Home/AcademicPrograms";
import Banner from "../components/Home/Banner";
import Hero from "../components/Home/Hero";
import Footer from "../components/shared/Footer";



const Home = () => {
    return (
        <div>
           <Banner />
           <Hero />
           <AcademicPrograms />
           <Footer />
        </div>
    );
};

export default Home;