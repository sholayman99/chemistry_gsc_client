import heroContact from "../../assets/images/heroContact.png";
import { MdMarkEmailRead, MdLocationOn } from "react-icons/md";
import { AiFillMobile } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { ExternalLink } from "react-external-link";

const ContactInfo = () => {
  return (
    <div className="hero bg-base-100 font-[sans-serif]  ">
      <div
        className="hero-content lg:min-w-[75%] min-h-full items-center flex-col-reverse 
       mx-2  lg:mx-0 lg:flex-row-reverse lg:px-10"
      >
        <img
          src={heroContact}
          className="lg:max-w-sm 
          w-full rounded-full"
        />
        <div className="w-full ">
          <div className="flex  justify-center flex-col items-center">
            <h1 className="lg:text-[2.2rem] text-[1.5rem] text-primary font-semibold">
              How To Reach Us
            </h1>
            <div className="lg:w-10 w-6 h-0.5 bg-secondary rounded-2"></div>
          </div>
          {/* text */}
          <div className="m-8 flex text-gray-600 flex-col gap-4">
            {/* Location  */}
            <div className="flex text-justify items-center gap-2">
              <div className="bg-black rounded-full text-white p-2">
                <MdLocationOn />
              </div>
              <p className=""> Karatia,Tangail,Dhaka,Bangladesh </p>
            </div>
            {/* Em--ail   */}
            <div className="flex text-justify items-center gap-2">
              <div className="bg-black rounded-full text-white p-2">
                <MdMarkEmailRead />
              </div>
              <p className=""> chemistry@demo.com </p>
            </div>
            {/* Mobile   */}
            <div className="flex text-justify items-center gap-2">
              <div className="bg-black rounded-full text-white p-2">
                <AiFillMobile />
              </div>
              <p className=""> +8801XXXXXXX </p>
            </div>
            {/* Facebook   */}
            <div className="flex text-justify items-center gap-2">
              <div className="bg-black rounded-full text-white p-2">
                <BsFacebook />
              </div>
              <ExternalLink
                href="https://www.facebook.com/groups/2741967459244928"
                target="blank"
                className=" hover:text-primary hover:font-bold"
              >
                {" "}
                Facebook{" "}
              </ExternalLink>
            </div>
          </div>

          {/* text----end */}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
