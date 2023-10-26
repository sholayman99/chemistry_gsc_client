import { FaChalkboardTeacher, FaFemale, FaMale, FaUserAlt } from "react-icons/fa";

const DashboardPage = () => {
  return (
    <main className="font-[sans-serif]">
        <h1 className="text-3xl my-10 text-primary  font-semibold"> Welcome Back , Md. Sholayman!</h1>
        <section className="flex px-2 py-4 rounded-md items-start bg-base-100 justify-evenly gap-10">
          {/* Student--Count */}
          <div className="flex gap-2 justify-center items-center">
            <div className="bg-accent rounded-full p-6"><FaUserAlt className="text-xl text-base-100" /></div>
            <div className="flex flex-col items-start justify-center">
              <p className="text-gray-500 text-sm">Students</p>
              <h2 className="text-2xl text-primary font-bold">500</h2>
            </div>
          </div>
          {/*Male Student Count */}
          <div className="flex gap-2 justify-center items-center">
            <div className="bg-warning rounded-full p-6"><FaFemale className="text-xl text-base-100" /></div>
            <div className="flex flex-col items-start justify-center">
              <p className="text-gray-500 text-sm">Female Students</p>
              <h2 className="text-2xl text-primary font-bold">500</h2>
            </div>
          </div>
          {/*FeMale Student Count */}
          <div className="flex gap-2 justify-center items-center">
            <div className="bg-neutral rounded-full p-6"><FaMale className="text-xl text-base-100" /></div>
            <div className="flex flex-col items-start justify-center">
              <p className="text-gray-500 text-sm">Male Students</p>
              <h2 className="text-2xl text-primary font-bold">500</h2>
            </div>
          </div>
          {/*Teachers Student Count */}
          <div className="flex gap-2 justify-center items-center">
            <div className="bg-success rounded-full p-6"><FaChalkboardTeacher className="text-xl text-base-100" /></div>
            <div className="flex flex-col items-start justify-center">
              <p className="text-gray-500 text-sm">Teachers</p>
              <h2 className="text-2xl text-primary font-bold">500</h2>
            </div>
          </div>
        </section>
    </main>
  );
};

export default DashboardPage;
