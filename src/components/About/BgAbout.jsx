import aboutBg from "../../assets/images/about.jpg";

const BgAbout = () => {
  return (
    <section
    className="hero lg:min-h-[90vh] md:min-h-[60vh] min-h-[50vh] bg-image"
      style={{
        backgroundImage:
          `url(${aboutBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
        
          <h1 className="mb-5 text-4xl font-bold">Department of Chemistry</h1>
          <h1 className="text-5xl uppercase font-bold text-base-100">About us</h1>
          
        </div>
      </div>
    </section>
  );
};

export default BgAbout;
