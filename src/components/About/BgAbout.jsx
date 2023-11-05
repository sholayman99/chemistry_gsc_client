import aboutBg from "../../assets/images/about.jpg";

const BgAbout = () => {
  return (
    <section
    className="hero lg:min-h-[90vh] font-[sans-serif] md:min-h-[60vh] min-h-[50vh] bg-image"
      style={{
        backgroundImage:
          `url(${aboutBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div>
        
          <h1 className="lg:text-[2.5rem] md:text-[2rem] text-[1rem] font-bold">Department of Chemistry</h1>
          <h1 className="lg:text-[4rem] md:text-[3rem] text-[1.5rem] font-bold text-base-100">About Us</h1>
          
        </div>
      </div>
    </section>
  );
};

export default BgAbout;
