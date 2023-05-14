import Footer from "../routes/pages/shared/Footer";
import Header from "../routes/pages/shared/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;