import React from "react";
import Banner from "../../components/Banner/Banner";
import Dropdown from "../../components/Dropdown/Dropdown";

function About({dataAbout}) {
  const imageIndex = 2;

  return (
    <div className="about">
      <Banner imageSrc={`./banner${imageIndex}.jpg`}/>
      <div className="otherInfo">
        {
          dataAbout.map((item, index) => (
            <Dropdown key={index} title={item.title} content={item.description}/>
          ))
        }
      </div>
    </div>
  );
}

export default About;
