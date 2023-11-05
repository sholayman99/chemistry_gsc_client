import contact from "../../assets/images/contact.jpg";

const BgContact = () => {
  return (
    <section
      className="hero lg:min-h-[90vh] md:min-h-[60vh] min-h-[50vh] bg-image"
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
          <h2 className="mb-5 lg:text-[3rem] md:text-[2.5rem] text-[1.4rem] font-bold">
            Departement of Chemistry
          </h2>
          <h1 className="mb-5 lg:text-[3.5rem] md:text-[3rem] text-[2rem] text-base-100 font-bold">
            Contact US
          </h1>
        </div>
      </div>
    </section>
  );
};

export default BgContact;
