import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";

const navitems = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Work", path: "/what-we-do" }, // 'What We Do' replaced with 'Work'
  { title: "Services", path: "/services" }, // 'Our Services' replaced with 'Services'
  { title: "Projects", path: "/projects" },
  { title: "Stories", path: "/stories" },
  { title: "Publications", path: "/publications" },
  { title: "Contact", path: "/contact" },
  { title: "Join", path: "/join-us" }, // 'Join Us' replaced with 'Join'
];

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.classList.toggle("overflow-hidden", !isSidebarOpen);
  };

  const closeSidebarWithDelay = () => {
    setTimeout(() => {
      setIsSidebarOpen(false);
      document.body.classList.remove("overflow-hidden");
    }, 200); // Adjust delay as needed
  };

  return (
    <main className="w-full lg:w-10/12 mx-auto h-[100px] flex flex-col justify-between z-[9999] py-5">
      <nav className="flex justify-between items-center">
        <div className="flex items-center justify-between w-full">
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

        <section className="flex items-center justify-center flex-nowrap gap-2 md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-10">
          {/* Navbar For Larger Displays */}
          {navitems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="hover:text-[#456C2F] hidden lg:inline-block font-montserrat font-bold text-center text-sm md:text-base"
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
            className="overflow-scroll text-white bg-black/90 h-screen w-56 absolute left-0 top-0 flex flex-col items-center gap-8 py-16"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the sidebar
          >
            <p className="text-center">
              <TbLayoutSidebarLeftCollapse size="30" onClick={toggleSidebar} />
            </p>

            {navitems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="font-bold flex flex-col items-center justify-center"
                onClick={closeSidebarWithDelay} // Close sidebar with delay
              >
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
