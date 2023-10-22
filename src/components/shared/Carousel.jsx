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
  const images = [
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
        spaceBetween={30}
        freeMode={true}
        navigation={true}
        modules={[Autoplay, FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((slide) => (
          <SwiperSlide className="px-10 py-10" key={slide.img}>
            <div className="card 
            hover: transform hover:scale-105  transition duration-500 ease-in-out 
             w-84 h-96 bg-base-100 shadow-xl hover:border-secondary border-[2px]">
              <figure className="">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="rounded-md h-52 w-full "
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-primary font-extrabold">{slide.title} </h2>
                <div className=" btn lg:mt-6 flex items-center justify-evenly lg:px-8 lg:max-w-72 
                 text-center mx-auto 
                bg-gradient-to-r from-warning to-[#f59e0b]
                transform hover:scale-105 transition duration-500 ease-in-out"
                >
                  <p className=" lg:text-[14px] font-bold">Read More..</p>
                    <BsFillCheckCircleFill className="lg:text-3xl"/>
                 
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
