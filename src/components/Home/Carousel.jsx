// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//import icons
import { BiSolidObjectsHorizontalRight } from "react-icons/bi";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Carousel = () => {
  const data = [
    {
      img: "https://i.ibb.co/DbV8XdR/honours.jpg",
      title: "B.Sc Honours in Chemistry",
    },
    {
      img: "https://i.ibb.co/55vD1QW/Masters-Degree-Spelling-27c5571306.jpg",
      title: "M.Sc in Organic Chemistry",
    },
    {
      img: "https://i.ibb.co/DbV8XdR/honours.jpg",
      title: "M.Sc in Physical Chemistry",
    },
    {
      img: "https://i.ibb.co/55vD1QW/Masters-Degree-Spelling-27c5571306.jpg",
      title: "M.Sc in Inorganic Chemistry",
    },
  ];
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
          clickable: true,
        }}
        style={{
          "--swiper-pagination-color": "black",
          "--swiper-navigation-color": "black",
        }}
        loop={true}
        slidesPerView={1}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data?.map((slide, index) => (
          <SwiperSlide
            className="flex bg-warning items-center p-5 justify-center  "
            key={index}
          >
            <Link
              to={"/"}
              className="bg-base-100 shadow-xl rounded-md m-3 lg:m-8 hover:scale-105 transition 
              duration-500 ease-in-out hover:border-2 border-neutral"
            >
              <div className="flex items-start  justify-around lg:flex-row flex-col gap-5 p-3 ">
                <img
                  src={slide.img}
                  className="lg:w-[500px]  lg:h-[350px]  w-[250px] h-[150px] md:h-[200px] md:w-[500px]"
                />
                <div className="lg:max-w-md md:max-w-sm md:h-[200px] mx-auto h-[100px] w-full ">
                  <h1 className="lg:text-[2.3rem] md:text-[1.6rem] text-secondary font-bold">
                    {slide.title}
                  </h1>
                  <p className="mt-5 mb-3">Click the button to see details</p>
                  <button className="lg:w-40 btn btn-xs md:btn-sm lg:btn-md bg-gradient-to-r from-primary
              text-base-100 to-blue-500  hover: transform hover:scale-105 transition duration-500 ease-in-out">
                    READ MORE..
                    <BiSolidObjectsHorizontalRight />
                  </button>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
