
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../components/shared/Navbar';
import Footer from '../../components/shared/Footer';

const Main = () => {
    const location = useLocation()
  const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');

    return (
        <div>
           {noHeaderFooter  || <Navbar/>}
            <Outlet />
            {noHeaderFooter || <Footer />}
        </div>
    );
};

export default Main;