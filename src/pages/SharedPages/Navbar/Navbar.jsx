import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";

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

  return (
    <main className="w-full h-[100px] sticky top-0 shadow-lg ">
      <nav className="flex justify-around items-center px-8 py-3">
        <section className="flex items-center gap-4">
          {/* MENU */}
          <h1
            className="text-3xl cursor-pointer md:hidden"
            onClick={() => setIsSidebarOpen(true)}
          >
            Open
          </h1>
          {/* LOGO */}
          <img src="/src/assets/cnrs.png" width="80px" />
        </section>

        <section className="flex gap-5 ">
          {/* Navbar For Larger Displays */}
          {navitems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="hidden md:block text-2xl font-bold "
            >
              {item.title}
            </Link>
          ))}
        </section>

        {/* Mobile Sidebar */}
        <div
          className={clsx(
            "fixed h-full w-screen md:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all ",
            isSidebarOpen && "translate-x-0"
          )}
        >
          <section className="text-white bg-black/90 h-screen w-56 absolute left-0 top-0 flex flex-col gap-8 p-10 ">
            <h1
              onClick={() => setIsSidebarOpen(false)}
              className="text-3xl cursor-pointer"
            >
              Close
            </h1>

            {navitems.map((item, index) => (
              <Link key={index} to={item.path} className="font-bold">
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
