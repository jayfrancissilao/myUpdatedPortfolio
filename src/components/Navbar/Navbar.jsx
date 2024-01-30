import React, { useEffect, useState } from "react";
// import logo
import { HiMenu } from "react-icons/hi";
// import link
import { Link } from "react-scroll";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // toogle for menuBtn
  const toogleMenu = () => {
    // true kabaliktaran
    setIsMenuOpen(!isMenuOpen);
  };
  // function for making navbar sticky when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className="w-full fixed top-0 left-0 right-0">
      <nav
        className={`py-4 md:px-12 px-4 bg-white ${isSticky} ? "sticky top-0 right-0 left-0 bg-white" : ""`}
      >
        {/* for large devices */}
        <div className="flex items-center justify-between">
          {/* for logo */}
          <div>
            <h1 className="font-roboto text-xl">JAY SILAO</h1>
          </div>
          {/* menu item for large devices */}
          <div className="lg:flex items-center gap-3 hidden text-lg">
         
            <Link
              to="home"
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-100}
              className="block py-2 px-4 cursor-pointer text-primary hover:text-gray-400 "
            >
              Home
            </Link>

            <Link
              to="skill"
              spy={true}
              offset={-100}
              activeClass="active"
              smooth={true}
              className="block py-2 px-4 cursor-pointer  hover:text-gray-400 "
            >
              Skills
            </Link>
          
            <Link
              to="work"
              spy={true}
              offset={-100}
              activeClass="active"
              smooth={true}
              className="block py-2 px-4 cursor-pointer  hover:text-gray-400 "
            >
              Work
            </Link>
          </div>
          {/* conatct me btn */}
          <div className="lg:block hidden">
            <button className="contact-btn">
              <a href="https://www.facebook.com/profile.php?id=100084760541482" target="_blank">Contact Me</a></button>
          </div>
          {/* btn menu for mobile */}
          {/* install react icons */}
          <button onClick={toogleMenu} className="lg:hidden text-body text-3xl">
            <HiMenu />
          </button>
        </div>
        {/* menu item for small devices */}
        {isMenuOpen && (
          <div className="mt-4 p-4 bg-body rounded-lg text-white">
          <Link
              to="home"
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-100}
              className="block py-2 px-4 cursor-pointer text-primary hover:text-gray-400 "
            >
              Home
            </Link>

         
            <Link
              to="skill"
              spy={true}
              offset={-100}
              activeClass="active"
              smooth={true}
              className="block py-2 px-4 cursor-pointer  hover:text-gray-400 "
            >
              Skills
            </Link>
            <Link
              to="work"
              spy={true}
              offset={-100}
              activeClass="active"
              smooth={true}
              className="block py-2 px-4 cursor-pointer  hover:text-gray-400 "
            >
              Work
            </Link>
            <a
              href="https://www.facebook.com/profile.php?id=100084760541482" target="_blank"
              className="block py-2 px-4 cursor-pointer
                 hover:text-gray-400 "
            >
              Contact Me
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
