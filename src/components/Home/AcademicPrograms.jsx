import Carousel from "../Home/Carousel";

const AcademicPrograms = () => {
  return (
    <section className="my-10">
      <div className="my-10 flex items-center justify-center flex-col">
        <h2 className="lg:text-[2.2rem] text-[1.3rem] font-[sans-serif] font-bold text-primary ">
          Academic Programs
        </h2>
        <div className="lg:w-20 lg:h-[3px] w-12 h-[1.5px] bg-secondary rounded-2"></div>
      </div>
      <Carousel />
    </section>
  );
};

export default AcademicPrograms;
