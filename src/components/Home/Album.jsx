import Gallery from "react-photo-gallery";

const Album = () => {
  const photos = [
    {
      src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
      width: 3,
      height: 4,
    },
    {
      src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
      width: 3,
      height: 4,
    },
    {
      src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
      width: 3,
      height: 4,
    },
    {
      src: "https://source.unsplash.com/PpOHJezOalU/800x599",
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
      width: 3,
      height: 4,
    },
    {
      src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
      width: 4,
      height: 3,
    },
    {
      src: "https://saadatcollege.gov.bd/public/Photo_gallery/1695119351.jpg",
      width: 5,
      height: 2,
    },
    {
      src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
      width: 4,
      height: 3,
    },
  ];
  return (
    <section className="my-10" >
     <div className="lg:px-6 bg-base-100 shadow-xl my-10  p-6">
     <div className="flex flex-col items-center justify-center my-3">
        <h1 className="lg:text-[2.5rem] md:text-[2rem] uppercase text-[1.3rem]
         font-bold font-[sans-serif] text-primary">
          Our Photo Gallery
        </h1>
        <div className="lg:w-20 lg:h-1 w-12 h-0.5 bg-neutral"></div>
      </div>
      <Gallery photos={photos} />;
     </div>
    </section>
  );
};

export default Album;
