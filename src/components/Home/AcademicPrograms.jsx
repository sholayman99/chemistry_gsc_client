import Carousel from "../shared/Carousel";

const AcademicPrograms = () => {
  return (
    <section className="lg:my-10">
      <div className="lg:my-10 flex items-center justify-center flex-col">
        <h2 className="lg:text-[2.2rem] font-serif font-extrabold text-primary ">
          Academic Programs
        </h2>
        <div className="lg:w-20 lg:h-[3px] bg-secondary rounded-2"></div>
      </div>
      <Carousel />
    </section>
  );
};

export default AcademicPrograms;
