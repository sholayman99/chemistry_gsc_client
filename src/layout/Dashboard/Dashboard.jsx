import { Link, Outlet } from "react-router-dom";
import {MdDashboard} from "react-icons/md"



const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-base-200 flex flex-col px-4">
        <div className="flex items-center gap-1 text-2xl font-extrabold font-[robotto]">
        <MdDashboard />
        <h1> Dashboard </h1>
        </div>
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#111C43] text-base-100 text-start "> 
        <div>
          <h1 className="font-bold my-3 uppercase text-center p-2 text-xl">Chemistry</h1>
          <div className="w-52  bg-gray-400 h-[0.1px]"></div>
        </div>

        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu w-full min-h-full text-start  text-base-100">
          {/* Sidebar content here */}
         <li className="text-gray-400 my-3 uppercase font-semibold text-xs">
            <p>Main</p>
         </li>
          {/* <li>
            <Link to={"/dashboard/mainPage"}>Main</Link>
          </li> */}
          <li>
            <Link to={"/dashboard/studentProfile"}>Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
