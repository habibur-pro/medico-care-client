import Footer from "../routes/pages/shared/Footer";
import Header from "../routes/pages/shared/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className="min-h-[calc(100vh-250px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;