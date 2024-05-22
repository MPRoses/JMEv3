import $ from 'jquery';
import './App.css';
import {
    useEffect,
    useState,
    React,
    useCallback
} from 'react';
import animejs from 'animejs';
import Tape from './components/tape.jsx';
import Bg from './components/bg.jsx';
import Cursor from './components/cursor.jsx';
import Menu from './components/menu.jsx';
import Title from './components/title.jsx';
import Title2 from './components/title2.jsx';
import Projects from './components/projects.jsx';

function App() {
    useEffect(() => {
        document.title = "Jens van der Sloot"
    }, []);

    const [skillsOff, setSkillsOff] = useState(1);

    const toggleSkillsOff = useCallback(() => {
      if (sessionStorage.getItem("skillsVisited") === "0") {
        sessionStorage.setItem("skillsVisited", "1");
      }

      console.log(sessionStorage.getItem("scrollTop"));
      if (skillsOff === 1 && sessionStorage.getItem("skillsOff") === "1") {
        sessionStorage.setItem("scrollTop", `${$(window).scrollTop()}`);
        sessionStorage.setItem("skillsOff", "0");
      } else {
        sessionStorage.setItem("skillsOff", "1");
        // refersh page
        window.location.reload();
        console.log(sessionStorage.getItem("scrollTop") + "end");

      }

      $(".transition").css({
        "opacity": "1",
        "pointer-events": "all"
    });

      setTimeout(() => {
        setSkillsOff(skillsOff === 0 ? 1 : 0);
      }, 780);     
    }, [skillsOff]);
    
    if (!sessionStorage.getItem("skillsOff")) {
      sessionStorage.setItem("skillsOff", "1");
    }
    if (!sessionStorage.getItem("76t6g3hja5sd")) {
      sessionStorage.setItem("76t6g3hja5sd", "0");
    }
    if (!sessionStorage.getItem("skillsVisited")) {
      sessionStorage.setItem("skillsVisited", "0");
    }

    if (sessionStorage.getItem("skillsVisited") === "0") {
      $(".title-reenter").css("opacity", "0");
      $(".title-container2").attr("style", "pointer-events: none !important");
    } else {
      $(".title-container2").attr("style", "pointer-events: all !important");
      
    }


    if (sessionStorage.getItem("skillsOff") === "0") {
      if (skillsOff === 1) {
        //toggleSkillsOff();
      }
    } else {
      console.log("reached1");
      console.log("WE GET SCROLLTOP " + sessionStorage.getItem("scrollTop"));
      if (sessionStorage.getItem("scrollTop") !== "0") {
        console.log("reached2");
        setTimeout(() => {
          $(window).scrollTop(sessionStorage.getItem("scrollTop"));
        }, 700);

      }
    }
  
    if (!sessionStorage.getItem("scrollTop")) {
      sessionStorage.setItem("scrollTop", "0");
    }

    
    useEffect(() => {
      $(".title-container").on("click", function() {
        console.log("reached2");
        toggleSkillsOff();
      })

  }, [toggleSkillsOff]);
    
    
    $(() => {
      $(window).scrollTop(0);
      
      $(window).on('beforeunload', function() {
        if (sessionStorage.getItem("scrollTop") !== "0") {
          sessionStorage.setItem("76t6g3hja5sd", `${sessionStorage.getItem("76t6g3hja5sd")}1`);

          if (sessionStorage.getItem("76t6g3hja5sd").length > 3) {
            sessionStorage.setItem("76t6g3hja5sd", "0");
            sessionStorage.setItem("scrollTop", "0");
          }
        }

      });


      //#############################

      $(".title-container2").on("click", () => {
        sessionStorage.setItem("76t6g3hja5sd", "0");
        toggleSkillsOff();
      })
      
      setTimeout(() => {
        
          /*CODE FOR NAV */
  
          $(".navbar").css("opacity", ".5");
          var isNavAnimating = false;
          $(".navbar").on("click", () => {
              console.log("reached");
              if (isNavAnimating) {
                  return;
              }
              isNavAnimating = true;
              if ($(".navbar").hasClass("navbar-active")) {
                  $(".navbar").removeClass("navbar-active");
                  // CLOSE MENU
                  if (skillsOff === 1) {
                      $('body, #root, html').css('overflow-y', 'auto'); // allow scrolling
                  }
  
                  $(".menu-left-1, .menu-left-2, .menu-left-switch-item, .menu-left-switch-item2").css({
                      opacity: 0,
                      "pointer-events": "none"
                  })
                  $(".menu-container").css("pointer-events", "none");
                  $(".navbar div").css("background-color", "black")
                  setTimeout(() => {
                      animejs({
                          targets: '.menu-left-1, .menu-credits, .main-textitem',
                          translateY: [0, -50],
                          opacity: [1, 0],
                          easing: 'spring',
                          duration: 500,
                          delay: animejs.stagger(50)
                      });
                  }, 0);
                  setTimeout(() => {
                      $(".menu-circle").css("transform", "scale(0)")
                  }, 500);
              } else {
                  $(".navbar").addClass("navbar-active");
                  // OPEN MENU
                  $('body, #root, html').css('overflow-y', 'hidden'); // Prevent scrolling
  
                  $(".menu-container").css("pointer-events", "all");
                  $(".navbar div").css("background-color", "white");
                  $(".menu-circle").css("transform", "scale(250)")
                  setTimeout(() => {
                      animejs({
                          targets: '.menu-left-1, .menu-credits, .main-textitem',
                          translateY: [-50, 0],
                          opacity: [0, 1],
                          easing: 'spring',
                          duration: 500,
                          delay: animejs.stagger(50)
                      });
                  }, 780);
              }
              setTimeout(() => {
                  isNavAnimating = false;
              }, 1400);
          })
  
          $(".main-textitem").on("click", function() {
              if ($(this).attr("tag") === "PROJECTS") {
                  $(".navbar").trigger("click");
                  setTimeout(() => {
                      $(window).scrollTop(window.innerHeight * .95);
                  }, 0);
  
              } else if ($(this).attr("tag") === "SKILLS") {
                  toggleSkillsOff();
              }
          })
  
      }, 1000)
    })
    // onload


    $(() => {

      
      $(document).on('keypress', function(e) {
        if (sessionStorage.getItem("skillsOff") === "0" && e.which === 53) {
          console.log(sessionStorage.getItem("scrollTop"));
          toggleSkillsOff();
        }
      });

      

        if (sessionStorage.getItem("scrollTop")) {
          if (sessionStorage.getItem("skillsOff") === 1) {
            $(window).scrollTop(sessionStorage.getItem("scrollTop"));
          } else {
            $(window).scrollTop(0);
          }
      
        }

      

        if (skillsOff) {
          $('body, #root, html').css('overflow-y', 'auto');
        }   
        setTimeout(() => {
          if (!skillsOff) {
            $(".transition").css({
              "opacity": "1",
              "pointer-events": "all"
          });
          } else {
            $(".transition").css({
              "opacity": "0",
              "pointer-events": "none"
          });
          }
  
        }, 200);

        //


       
      
        // moving of Tape and Bg/*W
        if (skillsOff) {
          $('body, #root, html').css('overflow-y', 'auto'); // Allow scrolling
          // Clear existing event listeners
          const ex1Layer = document.getElementById("tape-movement");
          const ex2Layer = document.querySelector(".background");
      
          // Clone and replace elements to remove event listeners
          const ex1Clone = ex1Layer.cloneNode(true);
          const ex2Clone = ex2Layer.cloneNode(true);
          ex1Layer.replaceWith(ex1Clone);
          ex2Layer.replaceWith(ex2Clone);
      
          // Rest of your code (without event listeners)
          let constrain = 50;
          let isEnabled = true;
          var lastKnownPos = [0, 0];
      
          function transforms(x, y, el) {
              let box = el.getBoundingClientRect();
              let calcX = -(y - box.y - box.height / 2) / constrain;
              let calcY = (x - box.x - box.width / 2) / constrain;
              return `rotateX(${calcX}deg) rotateY(${calcY}deg)`;
          }
      
          function transformElement(el, xyEl) {
              el.style.transform = transforms.apply(null, xyEl);
          }
      
          function transformMain(xy) {
              if (isEnabled) {
                  let position = xy.concat([ex1Clone]);
                  window.requestAnimationFrame(function() {
                      transformElement(ex1Clone, position);
                      transformElement(ex2Clone, position);
                  });
              }
          }
      
          $("body").on("mousemove", function(e) {
              lastKnownPos = [e.clientX, e.clientY];
              transformMain(lastKnownPos);
          });
      
          $(document).on("scroll", function() {

              transformMain(lastKnownPos);

              if (($(window).scrollTop() / window.innerHeight) > 2.8) {
                if (sessionStorage.getItem("skillsVisited") === "0") {
                  toggleSkillsOff();
                }
              }
          });
      }
      
        if (!skillsOff) {
            setTimeout(() => {
                $(".transition").css({
                    "opacity": "0",
                    "pointer-events": "none"
                });
            }, 1800);
            $('body, #root, html').css('overflow-y', 'hidden');
            $(".spline-container").css("display", "block");
            setTimeout(() => {
                $(".spline-container").css("opacity", "1");
            }, 300);
        }
    });

  return(
    <div className="App" id="App">
          <Bg />
          <Tape />
          <Cursor />
          {skillsOff === 1 ? (
            <div id="scroll-container">
              
               <div className="transition">
        <span className="loader"></span>
          </div>

            <div className="black-bars">
              <div className="bars-b1"></div>
              <div className="bars-b1 b1-left"></div>
              <div className="bars-b1"></div>
            </div>
            <Title />
            <Projects />
            <Title2 />
            <Menu />
            </div>
          ) : (
            <div>
              <div className="transition">
                <span className="loader"></span>
              </div>
              <div className="black-bg-bg"></div>
                <div className="spline-container">
                  <div>
                    <spline-viewer url="https://prod.spline.design/sJJFbbEr9MgnRHnW/scene.splinecode"></spline-viewer>
                  </div>
                  <div className="bottom-border-spline">
                    <p>1 ➯ Home</p>
                    <p>2 ➯ Languages</p>
                    <p>3 ➯ Technologies</p>
                    <p>4 ➯ Other skills</p>
                    <p>5 ➯ Exit skills</p>
                </div>
                <p className="bottom-border-descr">Use 1,2,3,4 and 5 on your keypad to navigate</p>
              </div>
              <Menu />
            </div>
          )}

    
    </div>
  )
}

export default App;