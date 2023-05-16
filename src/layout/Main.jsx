import Footer from "../routes/pages/shared/Footer";
import Header from "../routes/pages/shared/Header";
import { Outlet, useLocation } from "react-router-dom";

const Main = () => {
    const { pathname } = useLocation()
    console.log(pathname)
    return (
        <div>
            {
                pathname === '/' ? '' : <Header></Header>
            }
            <div className="min-h-[calc(100vh-250px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;