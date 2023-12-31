import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home"
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import NotFound from "../components/shared/NotFound";
import Signup from "../pages/Auth/Signup";
import Login from "../pages/Auth/Login";
import Dashboard from "../layout/Dashboard/Dashboard";
import UpdateProfile from "../pages/Auth/UpdateProfile";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import StudentProfile from "../pages/Dashboard/StudentProfile";
import Notice from "../pages/Notice/Notice";
import Members from "../pages/Members/Members";
import PeriodicTableHistory from "../components/Dashboard/PeriodicTableHistory";


const routes = createBrowserRouter([
    {
        path : "/" ,
        element : <Main />,
        children : [
            {
                path : "/",
                element : <Home />
            },
            {
                path : "about",
                element : <About />
            },
            {
                path : "contact",
                element : <Contact />
            },
            {
                path : "notices",
                element : <Notice />
            },
            {
                path : "members",
                element : <Members />
            },
            {
                path : "signup",
                element : <Signup />
            },
            {
                path : "login",
                element : <Login />
            },
            {
                path : "*",
                element : <NotFound />
            },
            {
                path:"update-profile",
                element: <UpdateProfile />
            }
           
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>, 
        children: [
          {
            path: '/dashboard', 
            element: <DashboardPage />
          },
          {
            path:"profile",
            element:<StudentProfile />
          },
          {
            path:"periodic-table-history",
            element:<PeriodicTableHistory />
          },
        ]
      }
])

export default  routes ;