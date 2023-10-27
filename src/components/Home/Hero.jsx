import hero from "../../assets/images/hero-home.png";
import { BiSolidChevronRight } from "react-icons/bi";


const Hero = () => {
  const text = "'";
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col-reverse gap-16 px-4 mx-2 lg:mx-0 py-10 shadow-xl bg-base-100 lg:flex-row-reverse">
        <img src={hero} className="lg:max-w-md hover:border-accent border-[2px]
         hover: transform hover:scale-105  transition duration-500 ease-in-out
          w-full rounded-lg shadow-2xl" />
        <div className="lg:max-w-[50%] w-full ">
          <div className="flex  justify-start items-center">
            <div className="lg:w-[3px] w-[2px] h-5 lg:h-8 bg-secondary rounded-2"></div>
            <h1 className="lg:text-[2.2rem] text-[1.3rem] font-[sans-serif] text-primary lg:ml-2 ml-1 font-semibold">
              About Dept. Of Chemistry
            </h1>
          </div>

          <p className="py-6 font-[sans-serif]">
            Welcome to the Department of Chemistry at the Govt. Saadat
            College,Tangail. The Department views student{text}s education and
            training as its top priority and prepares them for today{text}s
            technology-driven society and the job market. Our Department is one
            of the leading departments among all other allied facilities in the
            country. We are committed to excellence in research, teaching. It
            provides a diverse research environment, which enables students to
            actively participate in the department{text}s life, and excel in their
            studies.
          </p>
          <button
            className="lg:w-40 btn btn-xs md:btn-sm lg:btn-md  bg-gradient-to-r from-primary 
            text-base-100 to-blue-500  hover: transform hover:scale-105  transition duration-500 ease-in-out"
          >
            Read More...
            <span className="text-xl">
                    <BiSolidChevronRight />
                  </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
