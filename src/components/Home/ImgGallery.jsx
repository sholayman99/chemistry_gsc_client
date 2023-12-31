import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

const ImgGallery = () => {
  const images = [
    {
      original: "https://saadatcollege.gov.bd/public/Photo_gallery/1695280296.jpg",
      thumbnail: "https://saadatcollege.gov.bd/public/Photo_gallery/1695280296.jpg",
    },
    {
      original: "https://saadatcollege.gov.bd/public/Photo_gallery/1695118918.jpg",
      thumbnail: "https://saadatcollege.gov.bd/public/Photo_gallery/1695118918.jpg",
      
    },
    {
      original: "https://saadatcollege.gov.bd/public/Photo_gallery/1695119351.jpg",
      thumbnail: "https://saadatcollege.gov.bd/public/Photo_gallery/1695119351.jpg",
    },
    {
      original: "https://saadatcollege.gov.bd/public/Photo_gallery/1695119679.JPG",
      thumbnail: "https://saadatcollege.gov.bd/public/Photo_gallery/1695119679.JPG",
    },
    {
      original: "https://saadatcollege.gov.bd/public/Photo_gallery/1695119188.jpg",
      thumbnail: "https://saadatcollege.gov.bd/public/Photo_gallery/1695119188.jpg",
    },
  ];
  return (
    <section className="mt-5 shadow-xl">
       <div className="lg:my-5 my-3 flex flex-col p-6 items-center justify-center">
      <h1 className="lg:text-[2.5rem]  uppercase md:text-[2rem] text-[1.2rem] font-bold text-primary">
        Glimpse of the Department
      </h1>
      <div className="bg-neutral mb-4 h-0.5 lg:w-20 md:w-14 w-10"></div>
      </div>
     <div  className="bg-warning py-4">
      <ImageGallery
        loading = "eager"
        infinite={true}
        lazyLoad={false}
        autoPlay={true}
        items={images}
        description={images.description}
      />

     </div>
    </section>
  );
};

export default ImgGallery;
