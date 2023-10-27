// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//import icons
import { BsFillCheckCircleFill } from "react-icons/bs";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
// import required modules
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules";

const Carousel = () => {
  const data = [
    {
      img: "https://i.ibb.co/3cqqPkr/bsc.jpg",
      title: "B.Sc Honours in Chemistry",
    },
    {
      img: "https://i.ibb.co/S3tQ2bg/organic.jpg",
      title: "M.Sc in Organic Chemistry",
    },
    {
      img: "https://i.ibb.co/vwqTZ8L/physical.jpg",
      title: "M.Sc in Physical Chemistry",
    },
    {
      img: "https://i.ibb.co/TbLvHsZ/inorganic.jpg",
      title: "M.Sc in Inorganic Chemistry",
    },
    {
      img: "https://i.ibb.co/LzyWD2s/Industrial.jpg",
      title: "M.Sc in Industrial Chemistry",
    },
    {
      img: "https://i.ibb.co/30DCwdC/sterio.jpg",
      title: "M.Sc in Sterio Chemistry",
    },
    {
      img: "https://i.ibb.co/RpXZNZH/agri.jpg",
      title: "M.Sc in Agriculture Chemistry",
    },
    {
      img: "https://i.ibb.co/cLPzHpt/Spectroscopy.png",
      title: "M.Sc in Spectroscopy",
    },
    {
      img: "https://i.ibb.co/qm3sKJr/degree.jpg",
      title: "3 Years Degree Program",
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
        slidesPerView={3}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        freeMode={true}
        navigation={true}
        modules={[Autoplay, FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        {data?.map((slide) => (
          <SwiperSlide className="lg:px-10  lg:py-10 py-8" key={slide.img}>
            <div className="card md:ml-3
            hover: transform hover:scale-105  transition duration-500 ease-in-out 
             lg:w-full lg:h-96 bg-base-100 w-28 md:w-[75%] md:h-60 h-32 shadow-xl hover:border-accent border-[2px]">
              <figure className="">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="rounded-md lg:h-52 w-full h-16 md:h-32 "
                />
              </figure>
              <div className="flex flex-col items-center text-center mt-4 lg:mt-0">
                <h2 className="lg:card-title md:text-[13px] lg:font-bold lg:mt-2 font-normal text-[8px] text-primary">{slide.title} </h2>
                <div className="lg:mt-6 flex items-center lg:px-8 lg:max-w-[70%] 
                max-w-[70%] mt-3 px-1 md:px-3 py-0.5 rounded-md lg:py-2 md:py-1 text-center mx-auto 
                bg-gradient-to-r from-[#f9c320] to-[#eefe04]
                transform hover:scale-105 transition duration-500 ease-in-out"
                >
                  <p className=" lg:text-[14px] text-[7px] md:text-[12px]  font-bold">Read More..</p>
                    <BsFillCheckCircleFill className="lg:text-2xl md:text-[14px] text-[6px]"/>
                 
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
