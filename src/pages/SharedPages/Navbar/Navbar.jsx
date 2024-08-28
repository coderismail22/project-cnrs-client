import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";

const navitems = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "What We Do", path: "/what-we-do" },
  { title: "Our Services", path: "/services" },
  { title: "Projects", path: "/projects" },
  { title: "Stories", path: "/stories" },
  { title: "Publications", path: "/publications" },
  { title: "Contact", path: "/contact" },
  { title: "Join Us", path: "/join-us" },
];

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    // Toggle overflow-hidden on the body element
    if (!isSidebarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  return (
    <main className="h-[100px] shadow-lg flex flex-col justify-between p-5 z-[9999]">
      <nav className="flex justify-between items-center px-5">
        <div className="flex items-center justify-between w-[1000px] lg:w-[100px]">
          <Link to="/" className="w-[50px]">
            {/* LOGO */}
            <img src="/assets/cnrs.png" width="80px" />
          </Link>

          <section className="w-[50px]">
            {/* MENU for Mobile */}
            <h1
              className="text-3xl cursor-pointer lg:hidden"
              onClick={toggleSidebar}
            >
              <FaBars />
            </h1>
          </section>
        </div>

        <section className="flex items-center gap-10 xl:gap-16 2xl:gap-20">
          {/* Navbar For Larger Displays */}
          {navitems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="min-w-[30px] hover:text-[#456C2F] hidden lg:block font-montserrat font-bold text-center"
            >
              {item.title}
            </Link>
          ))}
        </section>

        {/* Mobile Sidebar */}
        <div
          className={clsx(
            "fixed inset-0 z-[10000] lg:hidden bg-black/50 backdrop-blur-sm transition-all",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
          onClick={toggleSidebar} // Close sidebar when background is clicked
        >
          <section
            className="text-white bg-black/90 h-screen w-56 absolute left-0 top-0 flex flex-col gap-8 p-10"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the sidebar
          >
            <h1
              onClick={toggleSidebar}
              className="text-3xl cursor-pointer"
            >
              <TbLayoutSidebarLeftCollapse size="30" />
            </h1>

            {navitems.map((item, index) => (
              <Link key={index} to={item.path} className="font-bold flex flex-col items-center justify-center">
                {item.title}
              </Link>
            ))}
          </section>
        </div>

        <section className="flex gap-4">
          {/* Social Media Icons */}
          {/* <IoCart className="text-3xl" /> */}
        </section>
      </nav>
    </main>
  );
};

export default Navbar;
