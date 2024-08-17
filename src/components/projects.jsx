import './projects.css';
import $ from 'jquery';
import {useEffect} from 'react';
import gsap from 'gsap';

import arrow from './../img/image 29.png'

import bg1 from './../img/gradient-varicolored-abstract-hued-soap-bubbles-black-background.jpg';
import bg2 from './../img/gradient-multicolored-soap-bubbles-black-background.jpg';
import bg3 from './../img/abstract-background-with-blue-pink-orange-spheres.jpg';

import banner1 from './../img/banner.png';
import banner2 from './../img/Screenshot 2024-04-11 174941.png';
import banner3 from './../img/Screenshot 2024-04-19 195421.png';
import banner4 from './../img/Screenshot 2024-04-19 195051.png';
import banner5 from './../img/Screenshot 2024-04-19 201830.png';
import banner6 from './../img/Screenshot 2024-04-19 202154.png';

function Projects() {
useEffect(() => {
  $(() => {
    var strength = 500;
    var targetStrength = 70;
    var lerpRate = 0.03;
    var elementSize = 0.5 * $(".project-item").width();
    let isHovering = false;
    let hoverTimeout;
  
    function lerp(start, end, rate) {
      return start * (1 - rate) + end * rate;
    }
  
    $(window).on("resize", () => {
      elementSize = 0.5 * $(".project-item").width();
    });

    $(".project-item").on("click", function() {
      $(".black-bars").css("height", "600vh");
      setTimeout(() => {
        window.location.href = "/projects/portfolio"; 
      }, 1400);
    });




  
    $(".project-item")
      .on("mousemove", function (e) {
        clearTimeout(hoverTimeout);
        updatePosition(e, this);
      })
      .on("mouseout", function () {
        clearTimeout(hoverTimeout);
        $(this).css(
          "transition",
          "filter .73s cubic-bezier(.25,.85,.4,.96), transform .73s cubic-bezier(.25,.85,.4,.96)"
        );
        $(this).css("transform", "scale(1) translate(0px, 0px)");
        $(this)
        .children()
        .eq(3)
        .children()
        .css("transform", `rotate(0deg)`);
        $(this).children().eq(1).css(
          "transition",
          "transform .73s cubic-bezier(.25,.85,.4,.96)"
        );
        $(this).children().eq(1).css(
          "transform",
          "scale(1) translate(0px, 0px)"
        );
        $(this).children().eq(3).css("background-color", "#232323");
        $(this).children().eq(3).children().css("filter", "invert(0)");
      })

      .on("mouseenter", function (e) {
        isHovering = true;
        strength = 300;
        $(this).css(
          "transition",
          "filter .73s cubic-bezier(.25,.85,.4,.96), transform 0s cubic-bezier(.25,.85,.4,.96)"
        );
        $(this)
        .children()
        .eq(1)
        .css(
          "transition",
          "transform 0s cubic-bezier(.25,.85,.4,.96)"
        );
        $(this).children().eq(3).css("background-color", "white");
        $(this).children().eq(3).children().css("filter", "invert(1)");
        updatePosition(e, this);
  
        var lerpInterval = setInterval(() => {
          strength = lerp(strength, targetStrength, lerpRate);
          if (Math.abs(strength - targetStrength) < 0.01) {
            strength = targetStrength;
            clearInterval(lerpInterval);
          }
        }, 10);
      });
  
    function updatePosition(e, element) {
      if (isHovering) {
        var mouseX = e.pageX - $(element).offset().left;
        var mouseY = e.pageY - $(element).offset().top;
        var mouseXRelative = (mouseX - elementSize) / strength;
        var mouseYRelative = (mouseY - elementSize) / strength;
        if (mouseXRelative > 30 || mouseXRelative < -30) {
          // EXIT HOVER, MOUSE IS NO LONGER ON ELEMENT
          $(element).trigger("mouseout");
        }
        if ($(element).children().length >= 3) {
          var mouseXARR = e.pageX;
          var mouseYARR = e.pageY;
  
          var imgCenterX =
            $(element).children().eq(3).children().offset().left + 15;
          var imgCenterY =
            $(element).children().eq(3).children().offset().top + 15;
  
          var mouseXRelativeArrow = mouseXARR - imgCenterX;
          var mouseYRelativeArrow = mouseYARR - imgCenterY;
          var rad = Math.atan2(mouseYRelativeArrow, mouseXRelativeArrow);
  
          var deg = rad * (180 / Math.PI);
          $(element)
            .children()
            .eq(3)
            .children()
            .css("transform", `rotate(${deg}deg)`);
  
          $(element)
            .children()
            .eq(1)
            .css(
              "transform",
              `scale(1) translate(${-mouseXRelative}px, ${-mouseYRelative}px)`
            );
        }
  
        $(element).css(
          "transform",
          `scale(1) translate(${mouseXRelative}px, ${mouseYRelative}px)`
        );
  
        hoverTimeout = setTimeout(function () {
          updatePosition(e, element);
        }, 50);
      }
    }
  
    // on scroll speed up movement

$(() => {
$(window).on("scroll", () => {
  $(".project-row").css("pointer-events", "none");

  setTimeout(() => {
    $(".project-row").css("pointer-events", "all");
  }, 600);
  gsap.to([tlRow1, tlRow2, tlRow3, tlRow4], { timeScale: 4, duration: 0.15 });
  setTimeout(function () {
    gsap.to([tlRow1, tlRow2, tlRow3, tlRow4], {
      timeScale: 1,
      duration: 0.15
    });
  }, 300);
});
});
    }, []);


  
    // gsap
    const normalSpeed = 50;
  
    let projectRows = gsap.utils.toArray(".project-row");
  
    let tlRow1 = gsap.timeline({
      repeat: -1,
      defaults: {
        duration: normalSpeed,
        ease: "none"
      }
    });
  
    let tlRow2 = gsap.timeline({
      repeat: -1,
      defaults: {
        duration: normalSpeed,
        ease: "none"
      }
    });
  
    let tlRow3 = gsap.timeline({
      repeat: -1,
      defaults: {
        duration: normalSpeed,
        ease: "none"
      }
    });
  
    let tlRow4 = gsap.timeline({
      repeat: -1,
      defaults: {
        duration: normalSpeed,
        ease: "none"
      }
    });
  
    tlRow1.fromTo(
      projectRows[0],
      { x: "-1240px" },
      {
        x: "0",
        onStart: function () {
          gsap.set(projectRows[0], { x: "-1240px" });
        }
      }
    );
  
    tlRow2.fromTo(
      projectRows[1],
      { x: "0" },
      {
        x: "-1240px",
        onStart: function () {
          gsap.set(projectRows[1], { x: "0" });
        }
      }
    );
  
    tlRow3.fromTo(
      projectRows[2],
      { x: "-1240px" },
      {
        x: "0",
        onStart: function () {
          gsap.set(projectRows[2], { x: "-1240px" });
        }
      }
    );
  
    tlRow4.fromTo(
      projectRows[3],
      { x: "0" },
      {
        x: "-1240px",
        onStart: function () {
          gsap.set(projectRows[3], { x: "0" });
        }
      }
    );
  });

    return (
        <div className="project-container">
        <div className="project-row">
            <div className="project-item hoverable black">
              <img src={banner1} alt="bg" />
              <p>Cursor Pursuit</p>
              <p>PERSONAL PROJECT</p>
              <div><img src={arrow} alt="arrow" /></div>
            </div>
            <div className="project-item hoverable">
              <img src={banner2} alt="bg" />
              <p>Connectr.</p>
              <p>LEIDEN UNIVERSITY</p>
              <div><img src={arrow} alt="arrow" /></div>
            </div>
            <div className="project-item hoverable black">
              <img src={banner1} alt="bg" />
              <p>Cursor Pursuit</p>
              <p>PERSONAL PROJECT</p>
              <div><img src={arrow} alt="arrow" /></div>
            </div>
            <div className="project-item hoverable">
              <img src={banner2} alt="bg" />
              <p>Connectr.</p>
              <p>LEIDEN UNIVERSITY</p>
              <div><img src={arrow} alt="arrow" /></div>
            </div>
            <div className="project-item hoverable black">
              <img src={banner1} alt="bg" />
              <p>Cursor Pursuit</p>
              <p>PERSONAL PROJECT</p>
              <div><img src={arrow} alt="arrow" /></div>
            </div>
            <div className="project-item hoverable">
              <img src={banner2} alt="bg" />
              <p>Connectr.</p>
              <p>LEIDEN UNIVERSITY</p>
              <div><img src={arrow} alt="arrow" /></div>
            </div>
        </div>
        <div className="project-row">
            <div className="project-item hoverable">
            <img src={banner3} alt="bg" />
              <p className="project-item-smalltext">Franse Werkwoorden</p>
              <p className="project-item-smalltext-description">PERSONAL PROJECT</p>
              <div><img src={arrow} alt="arrow" /></div>
            </div>
            <div className="project-item hoverable black">
            <img src={banner4} alt="bg" />
              <p>Numero</p>
              <p>DA VINCI COLLEGE LEIDEN</p>
              <div><img src={arrow} alt="arrow" /></div>
            </div>
            <div className="project-item hoverable">
            <img src={banner3} alt="bg" />
              <p className="project-item-smalltext">Franse Werkwoorden</p>
              <p className="project-item-smalltext-description">PERSONAL PROJECT</p>
              <div><img src={arrow} alt="arrow" /></div>
            </div>
            <div className="project-item hoverable black">
              <img src={banner4} alt="bg" />
              <p>Numero</p>
              <p>DA VINCI COLLEGE LEIDEN</p>
              <div><img src={arrow} alt="arrow" /></div>
            </div>
            <div className="project-item hoverable">    
            <img src={banner3} alt="bg" />
              <p className="project-item-smalltext">Franse Werkwoorden</p>
              <p className="project-item-smalltext-description">PERSONAL PROJECT</p>
              <div><img src={arrow} alt="arrow" /></div>
            </div>
            <div className="project-item hoverable black">
              <img src={banner4} alt="bg" />
              <p>Numero</p>
              <p>DA VINCI COLLEGE LEIDEN</p>
              <div><img src={arrow} alt="arrow" /></div>
            </div>
        </div>
        <div className="project-row">
        <div className="project-item hoverable black">
              <img src={banner6} alt="bg" />
              <p>101Mailz</p>
              <p>FIORETTI COLLEGE LISSE</p>
              <div><img src={arrow} alt="arrow" /></div>
            </div>
            <div className="project-item hoverable">
              <img src={banner5} alt="bg" />
              <p>Portfolio</p>
              <p className="project-item-smalltext-description">PERSONAL PROJECT</p>
              <div><img src={arrow} alt="arrow" /></div>
            </div>
            <div className="project-item hoverable black">
              <img src={banner6} alt="bg" />
              <p>101Mailz</p>
              <p>FIORETTI COLLEGE LISSE</p>
              <div><img src={arrow} alt="arrow" /></div>
            </div>
            <div className="project-item hoverable">
            <img src={banner5} alt="bg" />
              <p>Portfolio</p>
              <p className="project-item-smalltext-description">PERSONAL PROJECT</p>
              <div><img src={arrow} alt="arrow" /></div>
            </div>
            <div className="project-item hoverable black">
            <img src={banner6}alt="bg" />
              <p>101Mailz</p>
              <p>FIORETTI COLLEGE LISSE</p>
              <div><img src={arrow} alt="arrow" /></div>
            </div>
            <div className="project-item hoverable">
            <img src={banner5} alt="bg" />
              <p>Portfolio</p>
              <p>PERSONAL PROJECT</p>
              <div><img src={arrow} alt="arrow" /></div>
            </div>
        </div>
        <div className="project-row">
            <div className="project-item">
            <img src={bg3} alt="bg" />
              <p>To Be Decided</p>
            </div>
            <div className="project-item black">            <img src={bg2} alt="bg" />
              <p>To Be Decided</p></div>
            <div className="project-item">            <img src={bg1} alt="bg" />
              <p>To Be Decided</p></div>
            <div className="project-item black">            <img src={bg3}alt="bg" />
              <p>To Be Decided</p></div>
            <div className="project-item">            <img src={bg2}alt="bg" />
              <p>To Be Decided</p></div>
            <div className="project-item black">            <img src={bg1} alt="bg" />
              <p>To Be Decided</p></div>
        </div>
        </div>
    );
}

export default Projects;