import { Outlet } from "react-router-dom";
import Navbar from "../../pages/sharedPages/Navbar/Navbar";
import Footer from "../../pages/sharedPages/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default MainLayout;
