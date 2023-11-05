import { Divide as Hamburger } from 'hamburger-react'
import icon from "../../assets/images/icon.png";
import { Link, NavLink } from "react-router-dom";
import { ExternalLink } from 'react-external-link';

const Navbar = () => {
  const navList = (
    <>
      <li>
        <ExternalLink
          href='https://saadatcollege.gov.bd/'
          className={ "text-sm  font-semibold" }
          target="_blank"
        >
          GSC_HOME
        </ExternalLink>
      </li>
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
          to={"/notices"}
          className={({ isActive }) =>
            isActive
              ? "font-bold  text-primary underline text-sm"
              : "text-sm  font-semibold"
          }
        >
         ALL_NOTICE
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
            ABOUT_US
          </NavLink>
        }
      </li>
      <li>
        {
          <NavLink
            to={"/members"}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-primary underline text-sm"
                : "text-sm  font-semibold"
            }
          >
           DEP. MEMBERS
          </NavLink>
        }
      </li>
      <li>
        {
          <NavLink
            to={"/dashboard"}
            className={({ isActive }) =>
              isActive
                ? "font-bold bg-warning text-primary underline text-sm"
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
    <div className="navbar z-20 top-0 bg-base-100 h-20 max-w-screen-2xl fixed">
      <div className="navbar-start">
        <details className="dropdown lg:hidden">
          <summary className="m-1 border-none btn">
            <Hamburger  size={20} rounded  easing="ease-in" />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
           {navList}
           <Link
                to={"/login"}
                className="text-base-100 bg-primary ml-2 lg:ml-0 w-20 text-[12px] 
                lg:text-md lg:w-32 text-center
                rounded-tr-md rounded-tl-md 
                rounded-bl-md rounded-br-2xl"
              >
                Login
              </Link>
          </ul>
        </details>
        <Link>
          <div className="lg:w-56 w-40 md:w-56 flex items-center justify-center">
            <img className="" src={icon} />
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navList}</ul>
        <div>
          <Link
            to={"/login"}
            className="text-base-100 bg-primary lg:w-32 text-center btn hover:bg-blue-950 
            rounded-tr-md rounded-tl-md 
            rounded-bl-md lg:rounded-br-3xl rounded-br-2xl"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
