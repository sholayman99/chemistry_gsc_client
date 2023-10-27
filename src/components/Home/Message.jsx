import chairman from "../../assets/images/chairman.jpg";

const Message = () => {
  const s = "'";
  return (
    <div className="hero min-h-screen">
      <div className="hero-content gap-16 flex-col-reverse px-4 mx-2 lg:mx-0 py-10 shadow-xl bg-base-100 lg:flex-row-reverse">
        <img
          src={chairman}
          className="lg:max-w-md hover:border-accent border-[2px]
           hover: transform hover:scale-105  transition duration-500 ease-in-out
            w-full max-h-xl lg:h-[500px] md:h-[800px] rounded-lg shadow-2xl"
        />
        <div className="lg:max-w-[50%] w-full ">
          <div className="flex  justify-start items-center">
            <div className="lg:w-[3px] w-[2px] h-5 lg:h-8 bg-secondary rounded-2"></div>
            <h1 className="lg:text-[2.2rem] text-[1.3rem] font-[sans-serif] text-primary lg:ml-2 ml-1 font-semibold">
              MESSAGE FROM CHAIRMAN
            </h1>
          </div>

          <p className="py-6 font-[sans-serif]">
            Welcome to the Department of Chemistry at the Govt. Saadat College.
            As Chairman of this promising Department, it is my immense pleasure
            to work every day with the joy and promise of leading forward
            gradually. The Department has started its journey in 1992. The aim
            and objective of the Department is to explore quality education,
            pursue creative achievement, and health sciences research. I am
            confident to do so joined together by providing the world of
            knowledge in generating talented and effective manpower for the
            betterment of the nation and human wellbeing. I am grateful to serve
            as Founder Chairman of a distinguished group of faculty and
            enthusiastic students to oversee their exciting new changes in this
            Department to stand it apart. To me, the young and energetic faculty
            are the soul of our Chemistry Department. I do thankfully
            acknowledge our dedicated faculty and staff who work quietly
            progressing this Department. I simply want to thank all for the
            opportunity of being able to serve as the Chairman, and for the
            opportunity to support this great shared endeavor that is {s}the
            Department of Chemistry, Govt. Saadat College{s}.
          </p>
          <div>
            <h3 className="font-bold">Professor Dr. S. M. Afzal Hossain </h3>
            <h2 className="font-bold">Chairman</h2>
            <p className="text-gray-600">Department Of Chemistry</p>
            <p className="text-gray-600">Faculty Of Science</p>
            <p className="text-gray-600">Govt. Saadat College</p>
            <p className="text-gray-600">Karatia,Tangail,Dhaka</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
