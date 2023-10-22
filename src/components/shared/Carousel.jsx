// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

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
      img : "https://i.ibb.co/2ntR79b/pexels-dat-vu-mm-17986565.jpg"
    },
    {
      img : "https://i.ibb.co/PrYnn0n/img5.png"
    },
    {
      img : "https://i.ibb.co/Nx3RZ2M/360-F-547305591-dc73rko-NJv-D5r-At87-Rse-EVA3-A2-K8gnk1.jpg"
    },
    {
      img : "https://i.ibb.co/G9N69v2/photo-1628851479386-3f6db0efa7fa.jpg"
    },
    {
      img : "https://images.freeimages.com/images/large-previews/d4f/www-1242368.jpg"
    },
    {
      img : "https://cdn.pixabay.com/photo/2014/09/20/23/44/website-454460_1280.jpg"
    },
    {
      img : "https://images.freeimages.com/images/large-previews/3f0/links-1177906.jpg"
    },
    {
      img : "https://images.freeimages.com/images/large-previews/eca/a-day-at-the-links-v2-0-1539603.jpg"
    },
    {
      img : "https://images.freeimages.com/images/large-previews/234/preschool-class-activities-3-1565825.jpg"
    },
  ]
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
          clickable: true,
        }}
        loop={true}
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        freeMode={true}
        navigation={true}
        modules={[Autoplay, FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          images.map((slide) => <SwiperSlide key={slide.img}>
            <img className="w-80 h-80" src={slide.img} />
          </SwiperSlide>)
        }
       
        
      </Swiper>
    </>
  );
};

export default Carousel;
