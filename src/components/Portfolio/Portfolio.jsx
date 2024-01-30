import React from "react";
// import project data
import Projects from "/src/Data/project.json";
// import img
import p1 from "/src/components/Portfolio/img/sam2.png";
import p2 from "/src/components/Portfolio/img/sam4.png";
import p3 from "/src/components/Portfolio/img/sam5.png";
import p4 from "/src/components/Portfolio/img/sam1.png";
import f1 from "/src/components/Portfolio/img/sam6.png";
import f2 from "/src/components/Portfolio/img/sam7.png";
import g1 from "/src/components/Portfolio/img/g1.png"
import g2 from "/src/components/Portfolio/img/g2.png"
import g3 from "/src/components/Portfolio/img/g3.png"
// import css
import '/src/components/Portfolio/Portfolio.css'

const Portfolio = () => {
  // display img
  const images = [p1, p2, p3, p4,f1 ,f2,g1,g2,g3];
  return (
    <div className="lg:mx-12 mx-4 my-32  ">
      {/* left title*/}
      <div className="text-headingColor  test-cp" id="work">
        <p className="text-xl font-semibold mb-5 ">My Recreate Design</p>
        <h2 className="md:text-5xl text-4xl font-bold">My Work</h2>
      </div>
      {/* project */}
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 p-20">
        {Projects.map((proj, i) => {
          return (
            // <div>
            //   <h1>{proj.name}</h1>
            //   <img src={images[i]} alt=""   className="hover:scale-90 transition-all duration-300"/>
            // </div>

            <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <a href="#!">
                <img
                  src={images[i]}
                  alt=""
                  className="hover:scale-90 transition-all duration-300"
                />
              </a>
              <div class="p-6">
                <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  <h1 className="italic text-center ">{proj.name}</h1>
                  <p className="italic text-center ">{proj.description}</p>
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
