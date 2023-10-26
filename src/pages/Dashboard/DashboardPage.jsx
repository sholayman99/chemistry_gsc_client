import {
  FaChalkboardTeacher,
  FaFemale,
  FaMale,
  FaUserAlt,
} from "react-icons/fa";
import Calender from "../../components/Dashboard/Calender";

const DashboardPage = () => {
  return (
    <main className="font-[sans-serif]">
      <section className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4  px-4 py-4  mt-10 rounded-md
       items-start bg-base-100 justify-evenly lg:gap-10 md:gap-8 gap-3">
        {/* Student--Count */}
        <div className="flex lg:gap-2 gap-1  lg:justify-center items-center">
          <div className="bg-accent rounded-full md:p-5 p-3 lg:p-6">
            <FaUserAlt
              className="lg:text-xl
             md:text-lg text-sm text-base-100"
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <p className="text-gray-500 text-[10px] md:text-[16px] lg:text-sm">Students</p>
            <h2 className="lg:text-2xl md:text-xl text-sm text-primary font-bold">
              500
            </h2>
          </div>
        </div>
        {/*Male Student Count */}
        <div className="flex lg:gap-2 gap-3  lg:justify-center items-start">
          <div className="bg-warning rounded-full md:p-5 p-3 lg:p-6">
            <FaFemale
              className="lg:text-xl
             md:text-lg text-sm text-base-100"
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <p className="text-gray-500 text-[10px] md:text-[16px]">Female Students</p>
            <h2 className="lg:text-2xl md:text-xl text-sm text-primary font-bold">250</h2>
          </div>
        </div>
        {/*FeMale Student Count */}
        <div className="flex lg:gap-2 gap-3  lg:justify-center items-center">
          <div className="bg-neutral rounded-full md:p-5 p-3 lg:p-6">
            <FaMale
              className="lg:text-xl
             md:text-lg text-sm text-base-100"
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <p className="text-gray-500 text-[10px] md:text-[16px]">Male Students</p>
            <h2 className="lg:text-2xl md:text-xl text-sm text-primary font-bold">250</h2>
          </div>
        </div>
        {/*Teachers Student Count */}
        <div className="flex lg:gap-2 gap-3  lg:justify-center items-center">
          <div className="bg-success rounded-full md:p-5 p-3 lg:p-6">
            <FaChalkboardTeacher
              className="lg:text-xl
             md:text-lg text-sm text-base-100"
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <p className="text-gray-500 text-[10px] md:text-[16px]">Teachers</p>
            <h2 className="lg:text-2xl md:text-xl text-sm text-primary font-bold">10</h2>
          </div>
        </div>
      </section>
      <div>
        <Calender />
      </div>
    </main>
  );
};

export default DashboardPage;
