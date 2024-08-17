import React from 'react';
import './Connectr.css';

const ProjectPage = () => {
  return (
    <div className="project-page">
      <div className="top-section">
        <div className="project-title">Connectr</div>
        <div className="project-image">
          <img src="https://example.com/product-image.jpg" alt="Product Image" />
        </div>
        <div className="project-description">
          <p>
          Connectr is a powerful web texting application built using Flask (= Python framework). It empowers users to seamlessly connect with friends, create chat groups, and establish communication channels. Connectr was developed in just 5 days, showcasing over 5,000 lines of code—a testament to my efficiency and was a project for the class “Programming Techniques” at Leiden University.
          </p>
        </div>
      </div>
      <div className="circle-app"></div>
        <div className="circle-app"></div>
        <div className="circle-app"></div>
        <div className="circle-app"></div>

        <svg className="wave-app" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#1e2125" fill-opacity="1" d="M0,288L21.8,245.3C43.6,203,87,117,131,122.7C174.5,128,218,224,262,272C305.5,320,349,320,393,277.3C436.4,235,480,149,524,128C567.3,107,611,149,655,181.3C698.2,213,742,235,785,208C829.1,181,873,107,916,112C960,117,1004,203,1047,213.3C1090.9,224,1135,160,1178,154.7C1221.8,149,1265,203,1309,224C1352.7,245,1396,235,1418,229.3L1440,224L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path>
            </svg>
    </div>
  );
};

export default ProjectPage;