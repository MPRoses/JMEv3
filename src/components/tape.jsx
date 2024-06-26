import $ from 'jquery';
import './tape.css';
import { useEffect } from 'react';
function Tape() {
  useEffect(() => {
    setTimeout(() => {
      
        $("#tape-movement").on("mouseenter", () => {
            $("#tape-movement").css(
              "transition",
              " transform 5s cubic-bezier(0.16, 0.69, 0.26, 0.88)"
            );
            $(".background").css(
              "transition",
              "background-color 15s cubic-bezier(.83,-0.01,.36,1.02), transform 3s cubic-bezier(0.16, 0.69, 0.26, 0.88), opacity 1s ease-in-out .25s"
            );
            $("body").css(
              "transition",
              "background-color 15s cubic-bezier(.83,-0.01,.36,1.02), opacity 1s ease-in-out .25s"
            );
            $("#tape-movement, .background").css("transform", "rotate(0deg)");
          });
      
          $("#tape-movement").on("mouseleave", () => {
            $("#tape-movement").css(
              "transition",
              " transform 3s cubic-bezier(0.16, 0.69, 0.26, 0.88)"
            );
            $(".background").css(
              "transition",
              "background-color 15s cubic-bezier(.83,-0.01,.36,1.02), transform 1s cubic-bezier(0.16, 0.69, 0.26, 0.88), opacity 1s ease-in-out .25s"
            );
            $("body").css(
              "transition",
              "background-color 15s cubic-bezier(.83,-0.01,.36,1.02), opacity 1s ease-in-out .25s"
            );
          });

    if (localStorage.getItem("colorSpot")) {
        $(".tape-colorspot").css("background-color", `${localStorage.getItem("colorSpot")}`);
      } else {
        var colorSpotTemp = "#E38157";
      }
  
      $(".colorwheel-segment").on("mouseenter", (e) => {
        console.log("reached2");
        $(e.target).css({
          height: "25px",
          top: "-6.25px"
        });
  
        $(".tape-colorspot").css(
          "background-color",
          `${$(e.target).css("background-color")}`
        );
      });
      $(".colorwheel-segment").on("mouseleave", (e) => {
        $(e.target).css({
          height: "12.5px",
          top: "0px"
        });
  
        $(".tape-colorspot").css("background-color", `${colorSpotTemp}`);
      });
  
      $(".colorwheel-segment").on("click", (e) => {
        colorSpotTemp = $(e.target).css("background-color");
        localStorage.setItem("colorSpot", `${$(e.target).css("background-color")}`);
  
        $(".tape-colorspot").css("background-color", `${colorSpotTemp}`);
      });
    }, 1000);
    }, []);
    return (
        <div id="tape-size">
        <div id="tape-movement">
          <div id="tape-container">
            <svg className="tape" width="758" height="394" viewBox="0 0 758 394" fill="none" xmlns="http://www.w3.org/2000/svg">

              <rect width="696" height="354" transform="matrix(1 0 0 -1 5 388)" fill="#F2F2F2" />
              <rect x="2.5" y="31.5" width="701" height="359" stroke="black" strokeWidth="5" />

              <rect x="5" y="157" width="696" height="3" fill="black" />
              <rect x="5" y="236" width="696" height="3" fill="black" />
              <rect x="5" y="315" width="696" height="3" fill="black" />
              <rect x="281" y="160" width="3" height="76" fill="black" />
              <rect x="514" y="239" width="3" height="76" fill="black" />
              <rect x="364" y="315" width="3" height="76" fill="black" />
              <rect x="534" y="315" width="3" height="76" fill="black" />

              <path d="M51 5H750L703.5 29H10L51 5Z" fill="#F2F2F2" />
              <path d="M752 360.756V7L706 33.5V387.5L752 360.756Z" fill="#F2F2F2" />


              <rect x="0.192627" y="29.3336" width="58.6673" height="4.61474" transform="rotate(-30 0.192627 29.3336)" fill="black" />
              <rect x="702" y="30" width="60" height="5" transform="rotate(-30 702 30)" fill="black" />
              <rect x="703.515" y="388.703" width="59.4053" height="5" transform="rotate(-30 703.515 388.703)" fill="black" />
              <rect x="51" width="706" height="5" fill="black" />
              <rect x="752" y="363" width="363" height="5" transform="rotate(-90 752 363)" fill="black" />
            </svg>
            <p className="tape-title">FEATURING</p>
            <p className="tape-name">JENS VAN
              <br />&nbsp;&nbsp;&nbsp;&nbsp;DER SLOOT
            </p>
            <p className="tape-whoisthat">Who's that?</p>
            <p className="tape-description">DESIGNER AND DEVELOPER BASED IN LISSE, NETHERLANDS</p>
            <p className="tape-age">17.09.05</p>
            <div className="tape-colorwheel">
            <div className="colorwheel-segment hoverable" style={{ "backgroundColor": "#360000" }}></div>
              <div className="colorwheel-segment hoverable" style={{ "backgroundColor": "#6B1111" }}></div>
              <div className="colorwheel-segment hoverable" style={{ "backgroundColor": "#96411C" }}></div>
              <div className="colorwheel-segment hoverable" style={{ "backgroundColor": "#C0633B" }}></div>
              <div className="colorwheel-segment hoverable" style={{ "backgroundColor": "#E38157" }}></div>
              <div className="colorwheel-segment hoverable" style={{ "backgroundColor": "#E3A357" }}></div>
              <div className="colorwheel-segment hoverable" style={{ "backgroundColor": "#F0BE74" }}></div>
              <div className="colorwheel-segment hoverable" style={{ "backgroundColor": "#8DC3DA" }}></div>
              <div className="colorwheel-segment hoverable" style={{ "backgroundColor": "#94ABB5" }}></div>
              <div className="colorwheel-segment hoverable" style={{ "backgroundColor": "#293C44" }}></div>

            </div>
            <div className="tape-colorspot"></div>
            <div className="tape-hashtag">
              <p className="hashtag-text glitch" data-text="#MAKINGDREAMSCOMETRUE">#MAKINGDREAMSCOMETRUE</p>
            </div>
            <img className="tape-img-globe clickable hoverable open-webpage" src="https://mproses.github.io/hosted-assets/image%201.png" alt="globe-icon" />
            <img className="tape-img-linkedin clickable hoverable open-linkedin" src="https://mproses.github.io/hosted-assets/image%202.png" alt="linkedin-icon" />
          </div>
        </div>
      </div>
    );
}

export default Tape;