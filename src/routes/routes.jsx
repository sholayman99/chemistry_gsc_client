import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home"
import Contact from "../pages/Contact";
import About from "../pages/About";
import NotFound from "../components/shared/NotFound";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Dashboard from "../layout/Dashboard/Dashboard";


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
                path : "/about",
                element : <About />
            },
            {
                path : "/contact",
                element : <Contact />
            },
            {
                path : "/signup",
                element : <Signup />
            },
            {
                path : "/login",
                element : <Login />
            },
            {
                path : "*",
                element : <NotFound />
            },
           
        ]
    },
    {
        path:"/dashboard",
        element: <Dashboard />,
        children : [
            
        ]
    }
])

export default  routes ;