import React from "react";
// import skills.json here
import DataSkills from "/src/Data/skills.json";
// import img
import Html from "/src/components/Skill/img/html.png";
import Css from "/src/components/Skill/img/css.png";
import Tailwind from "/src/components/Skill/img/tailwind.png";
import Boostrap from "/src/components/Skill/img/boostrap.png";
import Figma from "/src/components/Skill/img/figma.png";
import Photoshop from "/src/components/Skill/img/photoshop.png";
import Adobe from "/src/components/Skill/img/adobePro.png";
import Js from "/src/components/Skill/img/javascript.png";
import ReactJs from "/src/components/Skill/img/react.png";
import Git from "/src/components/Skill/img/git.png";
import Github from "/src/components/Skill/img/github.png";
import AdobeIls from "/src/components/Skill/img/adobeIllustrator.png";
// import css
import '/src/App.css'
import '/src/components/Skill/Skill.css'

const Skill = () => {
  //  display img
  const images = [
    Html,
    Css,
    Tailwind,
    Boostrap,
    Figma,
    Photoshop,
    Adobe,
    Js,
    ReactJs,
    Git,
    Github,
    AdobeIls,
  ];
  return (
    <div className="lg:mx-12 mx-4 py-32 skill-body-pc" id="skill">
      <div className="text-headingColor mb-20">
        <p className="text-xl font-semibold mb-5 test">My Skills</p>
        <h2 className="md:text-5xl text-4xl font-bold">My Knowledge</h2>
      </div>
      {/* skill card */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {DataSkills.map((skill, i) => {
          return (
            <div >
              <div className="bg-white rounded-lg shadow-md mb-7 p-3 bg-bgShade  p-8 rounded-lg cursor-pointer  hover:-translate-y-4 transition-all duration-300 border-bottom-css">
                <img src={images[i]} alt="" className="w-14 h-14 mb-5 " />
                <h3 className="text-2xl font-bold mb-4">{skill.name}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;
