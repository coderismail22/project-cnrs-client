import { Outlet } from "react-router-dom";
import Navbar from "../../pages/sharedPages/Navbar/Navbar";
import Footer from "../../pages/sharedPages/Footer/Footer";
import ScrollToTop from "../../pages/SharedPages/ScrollToTop/ScrollToTop";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ScrollToTop />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
