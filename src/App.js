import $ from 'jquery';
import './App.css';
import {
    useEffect,
    useState
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

    const [skillsOff, setSkillsOff] = useState(1); // Initialize skills state

    const toggleSkillsOff = () => {
        $(".transition").css({
          "opacity": "1",
          "pointer-events": "all"
      });

        setTimeout(() => {
          setSkillsOff(skillsOff === 0 ? 1 : 0);
        }, 780);     
    };


    // onload
    $(() => {
        $(window).scrollTop(0);

      

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
      
        /*CODE FOR NAV */
        $(".navbar").css("opacity", ".5");
        var isNavAnimating = false;
        $(".navbar").on("click", () => {
            if (isNavAnimating) {
                return;
            }
            isNavAnimating = true;
            if ($(".navbar").hasClass("navbar-active")) {
                $(".navbar").removeClass("navbar-active");
                // CLOSE MENU
                if (skillsOff === 1) {
                    $('body, #root, html').css('overflow-y', 'auto'); // Prevent scrolling
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
          if($(this).attr("tag") === "PROJECTS") {
            $(".navbar").trigger("click");
            setTimeout(() => {
              $(window).scrollTop(window.innerHeight * .95);
            }, 0);

          } else if($(this).attr("tag") === "SKILLS") {
           toggleSkillsOff(); 
          }
        })

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
          <button onClick={toggleSkillsOff}>Toggle Skills</button>
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
            <div className="spline-container">
            <div>
              <spline-viewer url="https://prod.spline.design/sJJFbbEr9MgnRHnW/scene.splinecode"></spline-viewer>
            </div>
            <div className="bottom-border-spline"></div>
          </div>
          <Menu />
          </div>
          )}

    
    </div>
  )
}

export default App;