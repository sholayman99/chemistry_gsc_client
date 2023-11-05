import contact from "../../assets/images/contact.jpg";
import Textra from "react-textra";

const BgContact = () => {
  return (
    <section
      className="hero lg:min-h-[90vh] font-[sans-serif] md:min-h-[60vh] min-h-[50vh] bg-image"
      style={{
        backgroundImage: `url(${contact})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div>
          <h2 className="lg:text-[2.5rem] md:text-[2rem] text-[1rem] font-bold">
            Departement of Chemistry
          </h2>
          <h1 className="lg:text-[4rem] md:text-[3rem] text-[1.5rem] text-base-100 font-bold">
          <Textra
              effect="flip"
              duration={1000}
              data={["Contact US"]}
            />
          </h1>
        </div>
      </div>
    </section>
  );
};

export default BgContact;
