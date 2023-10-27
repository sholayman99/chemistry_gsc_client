import memberBg from "../../assets/images/members.jpg";

const BannerMember = () => {
    return (
        <section
      style={{
        backgroundImage: `url(${memberBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
      className="bg-image  flex flex-col items-center lg:items-end justify-center"
    >
     <div className="lg:p-4 flex flex-col items-center lg:items-end justify-center ">
     <h2 className="lg:text-[2.5rem] text-gray-400 font-bold md:text-[2rem] text-[1rem]">
        Department of Chemistry
      </h2>
      <h1 className="font-bold text-base-100 lg:text-[4rem] md:text-[4rem] text-[1.5rem] ">
        Department Members
      </h1>
     </div>
    </section>
    );
};

export default BannerMember;