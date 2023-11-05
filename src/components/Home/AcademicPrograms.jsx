import Carousel from "../Home/Carousel";

const AcademicPrograms = () => {
  return (
    <section className="lg:my-10 my-6">
      <div className="lg:my-10 my-6 flex items-center justify-center flex-col">
        <h2 className="lg:text-[2.5rem] md:text-[2rem] uppercase text-[1.3rem] font-[sans-serif] font-bold text-primary ">
          Academic Programs
        </h2>
        <div className="lg:w-20  w-12 h-0.5 bg-secondary rounded-2"></div>
      </div>
      <Carousel />
    </section>
  );
};

export default AcademicPrograms;
