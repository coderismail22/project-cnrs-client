// import { useState } from "react";
// import { Link } from "react-router-dom";

// const navitems = [
//   { title: "Home", path: "/" },
//   { title: "Services", path: "#services" },
//   { title: "Pricing", path: "#pricing" },
// ];

// const Navbar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <main className="w-full h-[65px] sticky top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 ">
//       <nav className="flex justify-around items-center px-8 py-3">
//         <section className="flex items-center gap-4">
//           {/* MENU */}
//           <IoMdMenu
//             className="text-3xl cursor-pointer md:hidden"
//             onClick={() => setIsSidebarOpen(true)}
//           />
//           {/* LOGO */}
//           <Link href={"/"} className="text-4xl ">
//             Logo
//           </Link>
//         </section>

//         <section className="flex gap-5 ">
//           {/* Navbar For Larger Displays */}
//           {navitems.map((item, index) => (
//             <Link
//               key={index}
//               href={item.path}
//               className="hidden md:block text-2xl font-bold "
//             >
//               {item.title}
//             </Link> 
//           ))}
//         </section>

//         {/* Mobile Sidebar */}
//         <div
//           className={clsx(
//             "fixed h-full w-screen md:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all ",
//             isSidebarOpen && "translate-x-0"
//           )}
//         >
//           <section className="text-white bg-black/90 h-screen w-56 absolute left-0 top-0 flex flex-col gap-8 p-10 ">
//             <IoCloseSharp
//               onClick={() => setIsSidebarOpen(false)}
//               className="text-3xl cursor-pointer"
//             />

//             {navitems.map((item, index) => (
//               <Link key={index} href={item.path} className="font-bold">
//                 {item.title}
//               </Link>
//             ))}
//           </section>
//         </div>
//         <section className="flex gap-4">
//           {/* Social Media Icons */}
//           {/* <IoCart className="text-3xl" /> */}
//         </section>
//       </nav>
//     </main>
//   );
// };

// export default Navbar;
