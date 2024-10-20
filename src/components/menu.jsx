import './menu.css';
import $ from 'jquery';
import animejs from 'animejs';

import linkedin from './../img/image 18.png';
import pointer from './../img/image 18 (1).png'
import github from './../img/Rectangle 12.png'
import codepen from './../img/image 19.png';

const Menu = ({ skillsOff }) => {

    $(() => {
        /*CODE FOR MENU */
         // Split text into letters for all elements with .menu-left-switch-item span and .main-textitem span
        const allSpans = $(
            ".menu-left-switch-item span, .menu-left-switch-item2 span, .main-textitem span"
        );
        allSpans.each(function () {
            const text = $(this).text();
            const newContent = text
            .split("")
            .map((letter) => `<span class="letter">${letter}</span>`)
            .join("");
            $(this).html(newContent);
        });

        let animationComplete = true;

        // Combine animation triggers for both elements
        $(".menu-left-switch-item, .menu-left-switch-item2").on(
            "mouseenter",
            function () {
            if (animationComplete) {
                animationComplete = false;
                animejs.timeline({ loop: false }).add({
                targets: ".letter",
                translateY: ["3px", "-2px", "1px", "0"],
                translateZ: 0,
                duration: 650,
                delay: (el, i) => 50 * i,
                easing: "linear",
                complete: () => (animationComplete = true)
                });
            }
            }
        );

        $(".main-textitem").hover(
            function () {
              console.log("1");
              var letters = $(this).find(".letter");

              
              var letterSpacing = "30px";
              if (window.innerWidth < 1500) {
                letterSpacing = "15px";
              }
              if (window.innerWidth < 1200) {
                letterSpacing = "10px";
              }
              if (window.innerWidth < 600) {
                letterSpacing = "8px";
              }
          
              console.log(letterSpacing);
              animejs.remove(letters.get());
              animejs.timeline({ loop: false }).add({
                targets: letters.get(),
                letterSpacing: ["0px", "20px"],
                easing: "spring(1, 80, 10, 0)",
                duration: 250,
                delay: (el, i) => 10 * (i + 1)
              });
            },
            function () {
              var letters = $(this).find(".letter");
              animejs.remove(letters.get());
              animejs.timeline({ loop: false }).add({
                targets: letters.get(),
                letterSpacing: ["0px"],
                easing: "spring",
                duration: 250,
                delay: (el, i) => 10 * (i + 1)
              });
            }
          );
        $(".menu-left-switch-item2").on("click", () => {
            //'exit'
            $(".menu-left-switch-item2").css({
            opacity: "0",
            "pointer-events": "none"
            });
            $(".menu-left-2").css({
            opacity: "0",
            "pointer-events": "none"
            });
            //enter
            $(".menu-left-switch-item1").css({
                opacity: "1",
                "pointer-events": "all"
                });
            $(".menu-left-1").css({
            opacity: "1",
            "pointer-events": "all"
            });
        });
        $(".menu-left-switch-item").on("click", () => {
            //'exit'
            $(".menu-left-switch-item1").css({
                opacity: "0",
                "pointer-events": "none"
                });
            $(".menu-left-1").css({
            opacity: "0",
            "pointer-events": "none"
            });
            //enter
            $(".menu-left-switch-item2").css({
            opacity: "1",
            "pointer-events": "all"
            });
            $(".menu-left-2").css({
            opacity: "1",
            "pointer-events": "all"
            });
        });
    })


    $(() => {
      setTimeout(() => {
        
      $(".github").on("click", () => {
        console.log("reahhdsadsada");
          window.location.href = "https://github.com/mproses";
      });

      $(".linkedin").on("click", () => {
        console.log("reahhdsadsada");
          window.location.href = "https://www.linkedin.com/in/jensvandersloot";
      });

      $(".codepen").on("click", () => {
        console.log("reahhdsadsada");
          window.location.href = "https://codepen.io/mproses";
      });

    }, 1000);

    })

    return (
        <div className="Menu">
<div className="navbar hoverable">
            <div>

            </div>
            <div>
        
            </div>
            <div>
    
            </div>
        </div>

<div className="menu-circle-fixed"><div className="menu-circle"></div></div>
<div className="menu-container">
  <div className="menu-credits">
    <img src={github} alt="github" className="github hoverable" />
    <img src={linkedin} alt="linkedin" className="linkedin hoverable" />
    <img src={codepen} alt="codepen" className="codepen hoverable" />
    <p>© Jens van der Sloot - All rights served</p>
  </div>
  <div className="menu-left">
    <div className="menu-left-1">
      <img src="https://i.ibb.co/0Vdt7G3/aboutMe1.png" alt="me" />
      <p>Me on holiday in Venice, Italy</p>
      <p className="menu-left-switch-item hoverable">Want to<br /><span>search</span> instead?</p>

    </div>
    <div className="menu-left-2">
      <div className="menu-left-2-search-container">
        <input id="menu-search" placeholder="Search" />
        <img src={pointer} alt="search-icon" />
      </div>
      <div className="menu-left-2-items-container">
        <div className="menu-item">
          <p>Responsive type scales</p>
          <p>With the help of calc(), calmp and CSS vars, we can create composable responve, and fluid type scales that smoothly adapts to viewport and container widths.</p>
        </div>
        <div className="menu-item">
          <p>Responsive type scales</p>
          <p>With the help of calc(), calmp and CSS vars, we can create composable responve, and fluid type scales that smoothly adapts to viewport and container widths.</p>
        </div>
        <div className="menu-item">
          <p>Responsive type scales</p>
          <p>With the help of calc(), calmp and CSS vars, we can create composable responve, and fluid type scales that smoothly adapts to viewport and container widths.</p>
        </div>
        <div className="menu-item">
          <p>Responsive type scales</p>
          <p>With the help of calc(), calmp and CSS vars, we can create composable responve, and fluid type scales that smoothly adapts to viewport and container widths.</p>
        </div>
        <div className="menu-item">
          <p>Responsive type scales</p>
          <p>With the help of calc(), calmp and CSS vars, we can create composable responve, and fluid type scales that smoothly adapts to viewport and container widths.</p>
        </div>
      </div>
    </div>
  </div>
  <p className="menu-left-switch-item2 hoverable">Go&nbsp;<span>back</span></p>
  <div className="menu-main">
    <div className="main-textitem hoverable" tag="PROJECTS">
      <img src={pointer} alt="arrow" /><span>PROJECTS</span>
    </div>
    <div className="main-textitem hoverable" tag="SKILLS"> <img src={pointer} alt="arrow" /><span>SKILLS</span></div>
    <div className="main-textitem hoverable" tag="ABOUTME"> <img src={pointer} alt="arrow" /><span>ABOUT&nbsp;ME</span></div>
    <div className="main-textitem hoverable" tag="CONTACT"> <img src={pointer} alt="arrow" /><span>CONTACT</span></div>
  </div>
</div>

        </div>

    
    );
}

export default Menu;