import { Link, NavLink, Outlet } from "react-router-dom";
import { PiDotsNineBold } from "react-icons/pi";
import { FaUserCircle, FaDotCircle, FaHome } from "react-icons/fa";


const Dashboard = () => {
  return (
    <div className="drawer relative lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex pl-4  flex-col items-start justify-start">
        {/* Page content here */}
        <div className="flex  items-center gap-1 pt-4   font-[sans-serif]">
          <PiDotsNineBold className="lg:text-4xl" />
          <h1 className="text-xl font-bold"> Dashboard </h1>
        </div>
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn swap absolute top-1 border-none p-0 m-0
           right-5 drawer-button lg:hidden"
        >
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          {/* close icon */}
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu min-h-full z-30 bg-custom-new text-base-content">
          {/* Sidebar content here */}
          <div>
            <h1 className="font-bold my-3 uppercase lg:text-center text-start p-2 text-xl">
              Chemistry
            </h1>
            <div className="w-52  bg-gray-600 h-[0.1px]"></div>
          </div>

          {/* Sidebar content here */}
          <li>
            <Link
              className={"bg-transparent font-bold text-neutral uppercase"}
              to={"/dashboard"}
            >
              <FaDotCircle /> Dashboard
            </Link>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
              }
              to={"/dashboard/profile"}
            >
              <FaUserCircle /> Profile
            </NavLink>
          </li>
         

          <div className="divider w-52  bg-gray-600 h-[0.1px]"></div> 

          <li>
            <Link to={"/"} className="font-semibold" > <FaHome /> Home </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
