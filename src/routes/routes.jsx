import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home"
import Contact from "../pages/Contact";
import About from "../pages/About";
import NotFound from "../components/shared/NotFound";


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
                path : "*",
                element : <NotFound />
            },
           
        ]
    }
])

export default  routes ;