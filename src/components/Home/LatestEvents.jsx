import { BsFillCalendarCheckFill } from "react-icons/bs";
import { BiSolidHandRight, BiSolidChevronRight } from "react-icons/bi";

const LatestEvents = () => {
  const data = [
    {
      date: "25-10-2023",
      title: "Hello November",
      img: "https://t4.ftcdn.net/jpg/01/43/23/83/360_F_143238306_lh0ap42wgot36y44WybfQpvsJB5A1CHc.jpg",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus, dolor eget faucibus maximus, velit ipsum tincidunt diam, eget iaculis libero leo in odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur felis ante. Morbi nisl eros, aliquam nec placerat eu, rutrum a quam. Morbi dignissim lacus ut enim tincidunt feugiat id non orci. ",
    },
    {
      date: "26-10-2023",
      title: "Hello November",
      img: "https://as1.ftcdn.net/v2/jpg/02/21/73/70/500_F_221737038_0Rzvn4wObui68bS8KVFAmhFSvwAW5Xjw.jpg",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus, dolor eget faucibus maximus, velit ipsum tincidunt diam, eget iaculis libero leo in odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur felis ante. Morbi nisl eros, aliquam nec placerat eu, rutrum a quam. Morbi dignissim lacus ut enim tincidunt feugiat id non orci. ",
    },
  ];
  return (
    <section className="mt-6 mb-16 md:mt-10 md:mb-20 relative lg:mt-10 lg:mb-24 ">
      <div className="flex flex-col items-center justify-center lg:my-10">
        <h1 className="lg:text-[2.5rem] md:text-[2rem] uppercase text-[1.3rem] font-bold font-[sans-serif] text-primary">
          Latest Events
        </h1>
        <div className="lg:w-20 w-12 h-0.5 bg-neutral"></div>
      </div>
      {data?.map((event) => (
        <div
          key={event.img}
          className="hero  hover: transform hover:scale-105  transition duration-500 ease-in-out
        hover:border-accent border-[2px] my-6"
        >
          <div className="hero-content px-4  gap-16  flex-col-reverse  shadow-xl bg-base-100 lg:flex-row">
            <img
              src={event.img}
              className="lg:max-w-md w-full rounded-lg shadow-2xl"
            />
            <div className="lg:max-w-[50%] w-full ">
              <div className="flex flex-col justify-start items-start">
                <p className="flex items-center ">
                  <span className="ml-1 mr-2">
                    <BsFillCalendarCheckFill />
                  </span>
                  {event.date}
                </p>
                <h1 className="lg:text-[2.2rem] text-[1.3rem] font-[sans-serif] text-primary  font-semibold">
                  {event.title}
                </h1>
              </div>

              <p className="py-6 font-[sans-serif] text-justify">{event.details}</p>
              <button
                className="lg:w-40 btn btn-xs md:btn-sm lg:btn-md  bg-gradient-to-r from-primary 
              text-base-100 to-blue-500  hover: transform hover:scale-105  transition duration-500 ease-in-out"
              >
                Read More...
                <span className="text-xl">
                  <BiSolidChevronRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}
      <button
        className="btn btn-outline absolute bottom-[-3] right-5 lg:btn-md px-2 md:btn-sm btn-xs 
        hover:underline 
      btn-neutral"
      >
        All Events..
        <BiSolidHandRight className="lg:text-xl md:text-lg text-sm" />
      </button>
    </section>
  );
};

export default LatestEvents;
