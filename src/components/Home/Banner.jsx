import bg from "../../assets/images/home.jpg";

const Banner = () => {
  return (
    <div
      className="bg-image lg:min-h-[100vh] md:min-h-[60vh] min-h-[50vh] flex items-center justify-center flex-col"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <h2 className="text-base-100 lg:text-[2.5rem] md:text-[2rem] text-[1rem] font-bold ">
        Welcome to{" "}
      </h2>
      <h1 className="text-base-100 lg:text-[3.5rem] md:text-[3rem] text-[1.5rem] font-extrabold">
        Department of Chemistry
      </h1>
      <h3 className="text-warning lg:text-[1.5rem] md:text-[1rem] text-[0.8rem] font-semibold">
        Govt. Saadat College,Tangail
      </h3>
      <button
        className="btn font-bold mt-4 hover: transform hover:scale-105  transition
             duration-500 ease-in-out btn-xs md:btn-sm lg:btn-md lg:w-40"
      >
        Read More..
      </button>
    </div>
  );
};

export default Banner;
