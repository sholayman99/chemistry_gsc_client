import hero from "../../assets/images/hero-home.png";

const Hero = () => {
  const text = "'s";
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={hero} className="max-w-md rounded-lg shadow-2xl" />
        <div className="max-w-[50%] ">
          <div className="flex  justify-start items-center">
            <div className="lg:w-[4px] lg:h-10 bg-secondary rounded-2"></div>
            <h1 className="lg:text-[2.2rem] font-serif text-primary lg:ml-1 font-semibold">
              About Dept. Of Chemistry
            </h1>
          </div>

          <p className="py-6">
            Welcome to the Department of Chemistry at the Govt. Saadat
            College,Tangail. The Department views student{text} education and
            training as its top priority and prepares them for today{text}{" "}
            technology-driven society and the job market. Our Department is one
            of the leading departments among all other allied facilities in the
            country. We are committed to excellence in research, teaching. It
            provides a diverse research environment, which enables students to
            actively participate in the department’s life, and excel in their
            studies.
          </p>
          <button
            className="btn  bg-gradient-to-r from-primary 
            text-base-100 to-blue-500  hover: transform hover:scale-105  transition duration-500 ease-in-out"
          >
            Read More...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
