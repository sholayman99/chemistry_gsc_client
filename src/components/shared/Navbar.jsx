import { Divide as Hamburger } from 'hamburger-react'
import icon from "../../assets/images/icon.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navList = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "font-bold underline text-primary  text-sm"
              : "text-sm  font-semibold"
          }
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive
              ? "font-bold  text-primary underline text-sm"
              : "text-sm  font-semibold"
          }
        >
          CONTACT
        </NavLink>
      </li>
      <li>
        {
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-primary underline text-sm"
                : "text-sm  font-semibold"
            }
          >
            ABOUT
          </NavLink>
        }
      </li>
      <li>
        {
          <NavLink
            to={"/dashboard"}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-primary underline text-sm"
                : "text-sm  font-semibold"
            }
          >
            DASHBOARD
          </NavLink>
        }
      </li>
    </>
  );

  return (
    <div className="navbar z-20 bg-base-100 h-20 fixed">
      <div className="navbar-start">
        <details className="dropdown lg:hidden">
          <summary className="m-1 btn">
            <Hamburger  rounded  easing="ease-in" />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
           {navList}
           <Link
                to={"/login"}
                className="text-base-100 bg-primary ml-2 lg:ml-0 w-20 text-[12px] lg:text-md lg:w-28 text-center 
               btn btn-xs lg:btn-lg hover:bg-blue-950 
               rounded-tr-sm lg:rounded-tl-3xl rounded-tl-2xl
               rounded-bl-sm lg:rounded-br-3xl rounded-br-2xl"
              >
                Login
              </Link>
          </ul>
        </details>
        <Link>
          <div className="lg:w-52 w-40  flex items-center justify-center">
            <img className="" src={icon} />
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navList}</ul>
        <div>
          <Link
            to={"/login"}
            className="text-base-100 bg-primary w-28 text-center btn hover:bg-blue-950 
     rounded-tr-sm rounded-tl-3xl
    rounded-bl-sm rounded-br-3xl"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
