import React from "react";
import bannerImg from "./img/pris.png";
import "/src/components/Hero/Hero.css";
import { Link } from "react-scroll";
import CV from "/src/assets/Cv/myResume.pdf";
const Hero = () => {
  return (
    <div className="mt-10 bg-bgShade" id="home">
      <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-24 gap-5 test-pc">
        {/* left */}
        <div className="md:w-1/2 w-full mt-5">
          <h3 className="text-xl text-headingColor font-semibold mb-5">
            Hello, I am Jay Francis Silao
          </h3>
          <h1 className="md:text-6xl text-4xl font-bold text-headingColor leading-snug md:leading-snug-[76px] mb-5">
            I DO <span className="text-primary">WEBSITE DESIGN </span>
            <br /> GRAPHIC DESIGN
          </h1>

          <div className="inline-flex" role="group">
            <Link
              to="work"
              spy={true}
              offset={-100}
              activeClass="active"
              smooth={true}
              className="block py-2 px-4 cursor-pointer  hover:text-gray-400 "
            >
              <button className="inline-block bg-primary px-8 py-4 hover:bg-body transition-all duration-300 hover:-translate-y-4 text-white text-xl rounded-md">
                My Work
              </button>
            </Link>

            <button className="ml-0.5 inline-block text-black text-xl  ">
              <a href={CV} download="myResume">
                DOWNLOAD CV
              </a>
            </button>
          </div>
        </div>
        {/* right */}
        <div className="md:w-1/2 w-full">
          <img src={bannerImg} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
