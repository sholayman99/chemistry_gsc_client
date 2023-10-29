
import { BiSolidObjectsHorizontalRight } from "react-icons/bi";

const Staff = () => {
    const staffs = [
        {
            name: " Md. Rakibul Hasan",
            image: "https://saadatcollege.gov.bd/public/Staff/1695117449.jpg",
            designation: "Computer Operator",
            email: "example@demo.com",
            mobile: "01XXXXXXXXX",
          },
          {
            name: " MD Tofazjol Hossain",
            image: "https://saadatcollege.gov.bd/public/Staff/1695527114.jpg",
            designation: "M.L.S.S",
            email: "example@demo.com",
            mobile: "01XXXXXXXXX",
          },
          {
            name: "Md. Sayed Miah",
            image: "https://saadatcollege.gov.bd/public/Staff/1695526903.jpg",
            designation: "M.L.S.S",
            email: "example@demo.com",
            mobile: "01XXXXXXXXX",
          },
    ]
    return (
        <section className="my-2">
             <div className="flex flex-col my-8 items-center justify-center gap-1 p-2">
        <h1 className="lg:text-[2.5rem] text-[1.3rem] md:text-[2rem] uppercase font-bold font-[sans-serif] text-primary">
          Staff List
        </h1>
        <div className="lg:w-20 lg:h-1 w-12 h-0.5 bg-neutral"></div>
      </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 text-neutral gap-10 lg:p-4  items-center">
                {
                    staffs.map((staf,i) =>(
                        <div
                          key={i}
                          className="flex bg-base-100 hover:border-2 border-info hover:scale-105  transition duration-500 ease-in-out justify-center p-10 items-start gap-10"
                        >
                          <div className="avatar">
                            <div className="lg:w-36 w-16 md:w-28 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
                              <img src={staf.image} alt={staf.name} />
                            </div>
                          </div>
                          <div className="">
                            <h2 className="font-bold md:text-2xl text-md lg:text-2xl">
                              {staf.name}{" "}
                            </h2>
                            <h3 className="font-semibold text-[#86198f] md:text-2xl text-md lg:text-2xl">
                              {staf.designation}{" "}
                            </h3>
                            <p className="my-2 text-sm lg:text-md">
                              <span className="font-bold mr-1">Email Address:</span>
                              {staf.email}
                            </p>
                            <p className="my-2 text-sm lg:text-md">
                              <span className="font-bold mr-1">Mobile No:</span>
                              {staf.mobile}
                            </p>
                            <button
                              className="btn hover:scale-105  transition duration-500 ease-in-out
                             btn-outline btn-xs md:btn-sm lg:btn-md btn-info"
                            >
                              Details... <BiSolidObjectsHorizontalRight />
                            </button>
                          </div>
                        </div>
                      ))
                }
            </div>
        </section>
    );
};

export default Staff;