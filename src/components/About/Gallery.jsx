import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = () => {
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
  ];
  return (
    <section className="p-6">
      <div className="lg:w-[90%] my-5 mx-auto">
      <h1 className="lg:text-[2rem]  uppercase md:text-[1.5rem] text-[1rem] font-bold text-secondary">
        Glimpse of the Department
      </h1>
      <div className="bg-accent mb-4 lg:h-1 h-0.5 lg:w-20 md:w-14 w-10"></div>
      </div>
      <ImageGallery
        loading = "eager"
        fullscreen
        infinite={true}
        lazyLoad={false}
        autoPlay={true}
        items={images}
      />
    </section>
  );
};

export default Gallery;
