import $ from 'jquery';
import anime from 'animejs';
import TweenMax from 'gsap';
import { useMediaQuery } from 'react-responsive';
import skillsWheel from './Shape.png';
import wheelPointer from './Arrow.png';
import proj1 from './proj1.webp';
import proj3 from './project_ban3.png';
import aboutMe1 from './aboutMe1.png';
import aboutMe2 from './aboutMe2.png';
import aboutMe3 from './aboutMe3.png';
import aboutMe4 from './aboutMe4.png';
import aboutMe5 from './aboutMe5.png';
import aboutMe6 from './aboutMe6.png';
import Linkedin from './Linkedin.png';
import email from './email.gif';
import calling from './calling.gif';
import contactBackground from './contactBackground.png';
import phoneNumero from './phoneNumero2.png';
import phoneNumero1 from './phoneNumero1.png';
import phoneNumero3 from './phoneNumero3.png';
import timeline from './timeline.png';
import pentagon from './pentagon.gif';
import pentagon2 from './pentagon2.png';
import pentagon3 from './pentagon3.png';
import pentagon4 from './pentagon4.gif';
import pentagon5 from './pentagon5.gif';
import pentagon6 from './pentagon6.png';
import codepen from './codepen.png';
import github from './github.png';
import projectban1 from './project_ban1.png';
import './App.css';

import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = "Jens van der Sloot"
  }, []);

  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });

  const isTabletTitle = useMediaQuery({ query: '(max-width: 1400px)' });
  

  useEffect(() => {
    if (isTabletTitle) {
      import('./AppTablet.css');
    }
  }, [isTabletTitle]);

  useEffect(() => {
    if (isMobile) {
      import('./Appmobile.css');
    }
  }, [isMobile]);


  // format: out-top, in-top, out-bottom, in-bottom, bg color
  let colorthemes = [
    ["#FC8E00", "#798A9A", "#E6BD69", "#254562", "#F60000"],
    ["#D9B800", "#ADB9C1", "#D6CC98", "#00709E", "#D90000"],
    ["#267AD9", "#86786B", "#335497", "#C5A993", "#26D9D9"],
    ["#FFD19C", "#C9DDEF", "#FFD681", "#BCE1FF", "#FFC9C9"],
    ["#9D9D9D", "#868686", "#C1C1C1", "#3C3C3C", "#4C4C4C"]
  ];

  let currentThemeCounter = 0;

  async function updateBackground() {
    if (currentThemeCounter === 5) {
      currentThemeCounter = 0;
    }

    let currentTheme = colorthemes[currentThemeCounter];

    $(".out-top").css("fill", `${currentTheme[0]}`);
    $(".in-top").css("fill", `${currentTheme[1]}`);
    $(".out-bottom").css("fill", `${currentTheme[2]}`);
    $(".in-bottom").css("fill", `${currentTheme[3]}`);
    $(".background, body").css("background-color", `${currentTheme[4]}`);

    currentThemeCounter = currentThemeCounter + 1;
  }

  setInterval(updateBackground, 15000);

  // load in website :: preloader

  function enterBackground() {

    setTimeout(() => {

      $(".svgTop, .svgBottom").css({
        left: 0,
        top: 0
      });

      setTimeout(() => {
        $(".starthere").css("opacity", "1");

      }, 5000);

      $("#tape-container").css("animation", "dropIn 1.5s forwards ease 1s");

      setTimeout(() => {
        $(".item-text, .item-dot").css("filter", "blur(0px)");
      }, 2000);

      currentThemeCounter = Math.floor(Math.random() * 4);
      updateBackground();
      setTimeout(() => {
        $(".out-top, .in-top, .out-bottom, .in-bottom").css(
          "transition",
          "fill 15s cubic-bezier(.83,-0.01,.36,1.02)"
        );
        $(".background, body").css(
          "transition",
          "background-color 15s cubic-bezier(.83,-0.01,.36,1.02), transform 1s cubic-bezier(0.16, 0.69, 0.26, 0.88), opacity 1s ease-in-out .25s"
        );
      }, 2000);

    }, 250);

  }

  $.fn.isOnScreen = function(){

    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};

  // onload
  $(() => {
    enterBackground();
    $(".background-button").addClass("background-button-active");

    $(".background-button").on("click", () => {
      if ($(".background-button-play").hasClass("background-button-active")) {
        $(".background-button-active").removeClass("background-button-active");
        $(".background").css("opacity", "0");
        setTimeout(() => {
          $(".background-button-pause").addClass("background-button-active");
          $(".background").css("display", "none");
        }, 1000);
      } else {
        $(".background-button-active").removeClass("background-button-active");
        $(".background").css("display", "block");
        setTimeout(() => {
          $(".background-button-play").addClass("background-button-active");
          $(".background").css("opacity", "1");
        }, 1000);
  

      }
   })

    //cursor

    $(".cursor").css("opacity", "1");
    
    const $bigBall = document.querySelector('.cursor__ball--big');
    const $smallBall = document.querySelector('.cursor__ball--small');
    const $hoverables = document.querySelectorAll('.hoverable');

    document.body.addEventListener('mousemove', onMouseMove);

    for (let i = 0; i < $hoverables.length; i++) {
      $hoverables[i].addEventListener('mouseenter', onMouseHover);
      $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);

    }

    var xMousePos = 0;
    var yMousePos = 0;
    var lastScrolledLeft = 0;
    var lastScrolledTop = 0;

    $(document).on("mousemove", (e) => {
        captureMousePosition(e);
    })  

    $(window).on("scroll", (e) => {
            if(lastScrolledLeft !== $(document).scrollLeft()){
                xMousePos -= lastScrolledLeft;
                lastScrolledLeft = $(document).scrollLeft();
                xMousePos += lastScrolledLeft;
            }
            if(lastScrolledTop !== $(document).scrollTop()){
                yMousePos -= lastScrolledTop;
                lastScrolledTop = $(document).scrollTop();
                yMousePos += lastScrolledTop;
            }

            TweenMax.to($bigBall, .7, {
              x: xMousePos - 15,
              y: yMousePos - 15
            });
            TweenMax.to($smallBall, .2, {
              x: xMousePos - 5,
              y: yMousePos - 7
            });
      });


    function captureMousePosition(e){
        xMousePos = e.pageX;
        yMousePos = e.pageY;
      }

    function onMouseMove(e) {
      TweenMax.to($bigBall, .7, {
        x: e.pageX - 15,
        y: e.pageY - 15
      });
      TweenMax.to($smallBall, .2, {
        x: e.pageX - 5,
        y: e.pageY - 7
      });
    }


    function onMouseHover() {
      $(".bigCircle circle").css("opacity", "0.4");
      $(".bigCircle").css({
        "transform": "scale(3)",
        "border": "2px solid rgb(31 149 248 / 0%)"
      });

    }
    function onMouseHoverOut() {
      $(".bigCircle circle").css("opacity", "1");
      $(".bigCircle").css({
        "transform": "scale(1)",
        "border": "2px solid #1F95F8"
      });
    
    }

    //cursor end

    setTimeout(() => {

      // temp disabled since don't know how to do this in github production
      // newer pathnames are commented and denoted under pushState
      /*
      if (window.location.pathname.toLowerCase() === "/skills") {
        $(".navbar-item").eq(0).trigger("click");
      } else if (window.location.pathname.toLowerCase().includes("/projects")) {
        $(".navbar-item").eq(1).trigger("click");
      } else if (window.location.pathname.toLowerCase() === "/aboutme") {
        $(".navbar-item").eq(2).trigger("click");
      }*/

    }, 800);

    // following code makes it such that the color square can be changed using the color bar
    if (localStorage.getItem("colorSpot")) {
      $(".tape-colorspot").css("background-color", `${localStorage.getItem("colorSpot")}`);
    } else {
      var colorSpotTemp = "#E38157";
    }

    $(".colorwheel-segment").on("mouseenter", (e) => {
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

    // following lines changes orientation of background and tape on mouse position change

    let constrain = 50;
    let mouseOverContainer = document.querySelector(".background");
    let ex1Layer = document.getElementById("tape-movement");
    let ex2Layer = document.querySelector(".background");
    let ex3Phone1 = document.querySelector(".phone-1");
    let ex3Phone2 = document.querySelector(".phone-2");
    let ex3Phone3 = document.querySelector(".phone-3");


    let isEnabled = true;

    function transforms(x, y, el) {
      let box = el.getBoundingClientRect();
      let calcX = -(y - box.y - box.height / 2) / constrain;
      let calcY = (x - box.x - box.width / 2) / constrain;
      return `rotateX(${calcX}deg) rotateY(${calcY}deg)`;
    }

    function transforms2(x, y, el) {
      let box = el.getBoundingClientRect();
      let calcX = -(y - box.y - box.height / 2) / -constrain;
      let calcY = (x - box.x - box.width / 2) / constrain;
      return `rotateX(${calcX}deg) rotateY(${calcY}deg)`;
    }


    function transformElement(el, xyEl) {
      el.style.transform = transforms.apply(null, xyEl);
    }

    function transformElement2(el, xyEl) {
      el.style.transform = transforms2.apply(null, xyEl);
    }

    mouseOverContainer.onmousemove = function (e) {
      if (isEnabled) {
        let xy = [e.clientX, e.clientY];
        let position = xy.concat([ex1Layer]);

        window.requestAnimationFrame(function () {
          transformElement(ex1Layer, position);
          transformElement(ex2Layer, position);
        });
      }
    };
    
    $(".sec2").on("mousemove", (e) => {
        let xy = [e.clientX, e.clientY];
        let position = xy.concat([ex1Layer]);

        window.requestAnimationFrame(function () {
          transformElement2(ex3Phone1, position);
          transformElement2(ex3Phone2, position);
          transformElement2(ex3Phone3, position);
        });
    });

    $("#tape-movement").on("mouseenter", () => {
      $("#tape-movement").css(
        "transition",
        " transform 5s cubic-bezier(0.16, 0.69, 0.26, 0.88)"
      );
      $(".background, body").css(
        "transition",
        "background-color 15s cubic-bezier(.83,-0.01,.36,1.02), transform 3s cubic-bezier(0.16, 0.69, 0.26, 0.88), opacity 1s ease-in-out .25s"
      );
      $("#tape-movement, .background").css("transform", "rotate(0deg)");
    });

    $("#tape-movement").on("mouseleave", () => {
      $("#tape-movement").css(
        "transition",
        " transform 3s cubic-bezier(0.16, 0.69, 0.26, 0.88)"
      );
      $(".background, body").css(
        "transition",
        "background-color 15s cubic-bezier(.83,-0.01,.36,1.02), transform 1s cubic-bezier(0.16, 0.69, 0.26, 0.88), opacity 1s ease-in-out .25s"
      );
    });

    function removeProject() {
      $(".expanded-project").removeClass("expanded-project");
      if (currentProjectTag !== "") {
        $(`.project-${currentProjectTag}`).css({
          "right": "-95vw",
          "opacity": "0"
        })
      }
    }

    $(".back-to-home").on("click", () => {

      $(".background").css("display", "block");

      removeProject();

      if ($(".project-Portfolio-fadeIn").hasClass("project-Portfolio-fadeIn-active")) {
        $(".project-Portfolio-fadeIn").removeClass("project-Portfolio-fadeIn-active");
      };

      window.history.pushState('', 'Home!', '/');

      document.title = "Jens van der Sloot";

      if ($(".sec2-item:eq(1)").hasClass("project-active")) {

        if (!isTabletTitle) {
          $(".project-item").css("display", "block");
        } else {
          $(".project-item").css("display", "block");
          $(".empty-project-item").css("display", "none");
        }
        $(".sec2-item:eq(1)").removeClass("project-active");
        document.querySelector(".transition-circle").style.transform = "scale(0, 0)";
        $(".back").css("opacity", "0")
        setTimeout(() => {
          $(".back").css("display", "none")
        }, 1000);
        setTimeout(() => {
          $(".transition-circle").remove();
        }, 2000);
        setTimeout(() => {

          window.scrollTo(0, 0)

          setTimeout(() => {
            $(".back-to-home").css("opacity", "0");
            $("#skillsWheel, #wheelPointer").css("opacity", "0")
            $(".sec2").css("background-color", "#00000000");
            $("#sec2-skills-title, #sec2-skills-description").css("opacity", "0");
            $("#sec2-skills-title, #sec2-skills-description").css("transform", "translate(0,40px)");
          }, 680)

          for (let k = 0; k < 3; k++) {
            setTimeout(() => {
              $(".b1-active").eq(k).css("top", "0vw");
            }, k * 150)
          }
          setTimeout(() => {

            for (let k = 0; k < 3; k++) {
              setTimeout(() => {
                $(".bars-b1").eq(k).css("top", "100vw");
              }, k * 150)
            }

            setTimeout(() => {
              $(".sec2-identifier").css("display", "none");
            }, 100)

            setTimeout(() => {
              $("#tape-movement").css("display", "block");
              $(".navbar").css("display", "block");

              isEnabled = true;
              $("#tape-movement, .background").css("transform", "rotate(0deg)");
              $(".sec2, .back-to-home").css("display", "none");
              setTimeout(() => {
                $(".bars-b1").removeClass("b1-active");
                $(".bars-b1").css("top", "0");
                $(".navbar").css("opacity", "1");
                $(".starthere").css("opacity", "0");
                $("body").css("height", "100vh");
                $("body").css("positon", "unset");
                $("body").css("overflow", "hidden");

              }, 200);
            }, 450);
          }, 800);
        }, 1200);

      } else {

        window.scrollTo(0, 0)

        setTimeout(() => {
          $(".back-to-home").css("opacity", "0");
          $("#skillsWheel, #wheelPointer").css("opacity", "0")
          $(".sec2").css("background-color", "#00000000");
          $("#sec2-skills-title, #sec2-skills-description").css("opacity", "0");
          $("#sec2-skills-title, #sec2-skills-description").css("transform", "translate(0,40px)");
        }, 680)

        for (let k = 0; k < 3; k++) {
          setTimeout(() => {
            $(".b1-active").eq(k).css("top", "0vw");
          }, k * 150)
        }

        setTimeout(() => {

          for (let k = 0; k < 3; k++) {
            setTimeout(() => {
              $(".bars-b1").eq(k).css("top", "100vw");
            }, k * 150)
          }

          setTimeout(() => {
            $(".sec2-identifier").css("display", "none");
          }, 100)

          setTimeout(() => {
            $("#tape-movement").css("display", "block");
            $(".navbar").css("display", "block");

            isEnabled = true;
            $("#tape-movement, .background").css("transform", "rotate(0deg)");
            $(".sec2, .back-to-home").css("display", "none");
            setTimeout(() => {
              $(".bars-b1").removeClass("b1-active");
              $(".bars-b1").css("top", "0");
              $(".navbar").css("opacity", "1");
              $(".starthere").css("opacity", "0");
              $("body").css("height", "100vh");
              $("body").css("overflow", "hidden");

            }, 200);
          }, 450);
        }, 800);
      }
    });

    // skill section

    const skillsTitles = ["Welcome!", "Front-end Design", "Back-end Development", "React", "Other Skills", "Git and Scrum", "Other languages", "Resume"];
    const skillsDescriptions = ["Hello there! I’m excited to welcome you to my website! My name is Jens and I’m thrilled to share with you who I am, what I specialize in, and what I’ve worked on in the past.<br></br>As a computer scientist and designer, I’m passionate about creating innovative solutions that are both functional and beautiful. You’ll find that my work is inspired by my love of technology and design.<br></br>Before you start scrolling (P.S. use arrow keys for a smoother experience!) I'd like to note that there is a lot of text here on this site. Why? Because I didn't want you to just get to know my work, I also wanted you to get to know me. So, without further ado, let’s embark on a new journey together!&nbsp;&nbsp;🚀", "Front-end design is the process of designing and building the user interface for a website or application. It involves creating HTML, CSS, and presentational JavaScript code that make up a user interface. It also requires for coordination with user experience (UX) and graphic design efforts, ensuring the interface matches the target demographic and the product. Front-end design is a collaborative and human-centered practice that collects user feedback in each phase.<br/><br/>As a developer with a strong skill set in front-end design, I focus on creativity and originality to make my work stand out. My creativity is not limited to just design, but extends to my ability to solve problems and find innovative solutions. <br/><br/>Overall, my skill in front-end design is a testament to my passion for creativity, originality, and ability to think outside the box. My designs are visually stunning and functional, and I am always looking for new ways to push the boundaries of what is possible. 😎", "Back-end development refers to the development of server-side logic that powers websites and apps from behind the scenes. It includes all the code needed to build out the database, server, and application.<br/><br/>My experience in back-end development lies in that I’ve worked with databases using Node.js and SQL to communicate and securely hash and store account-related data. I understand the importance of security when it comes to user data, which is why I take great care in ensuring that all data is properly encrypted and stored. I also understand the importance of scalability and strive to create back-end systems that can handle large amounts of traffic without slowing down.<br/> <br/> Altogether, while I may not have mastered back-end development yet, I’m excited about the possibilities it offers and am always looking for new ways to improve my skills. 😊", "With multiple years of experience in the field, I have developed a strong skillset in using React. React is a JavaScript library for building user interfaces, developed and maintained by Facebook. It is widely used in the industry and is known for its efficiency and flexibility.<br/><br/>React allows me to build reusable user interface (UI) components and manage the state of their applications in a declarative way. This means that I can focus on describing what the UI should look like at any given moment, and React takes care of updating the UI when the underlying data changes. One of the key features of React is its virtual DOM (Document Object Model), which allows it to efficiently update the UI by only changing the parts that need to be updated. This results in fast and smooth updates, even for complex applications. <br/><br/> My experience with React has allowed me to develop a deep understanding of its inner workings and best practices, from which I strive to create high-quality, efficient, and user-friendly solutions.", "In addition to my technical expertise, I have a strong foundation in mathematics which allows me to approach complex problems with a logical and analytical mindset.<br/><br/> Language wise my proficiency in English is at a C1 level, meaning I am able to effectively communicate and collaborate with colleagues and clients from all over the world. And as a native Dutch speaker, I am also able to bring my language skills to the table when working with Dutch-speaking clients or team members.<br/><br/> In addition to my existing skills and experiences, I am also committed to continuous learning and development. At the moment I am pursuing a degree in Computer Science at the University of Leiden.<br/><br/> These additional skills and experiences have helped me to become a well-rounded and versatile developer, capable of tackling a wide range of challenges and delivering high-quality results.", " These two tools have been the foundation of all my recent projects and have played a crucial role in their success. Git is a powerful version control system that allows me to keep track of changes to my code and collaborate with other developers. Scrum, on the other hand, is an agile framework that helps me manage and organize my work in an efficient and effective manner.<br/><br/>One of the reasons why Scrum is so important is because it allows for constant feedback and improvement. By breaking down work into small, manageable chunks called sprints, I am able to regularly review my progress and make any necessary adjustments. This helps me stay on track and ensures that I am always working towards the best possible end result.<br/><br/>Another key benefit of Scrum is its emphasis on collaboration and communication. By working closely with a team and regularly checking in with stakeholders, I am able to ensure that everyone is on the same page and that we are all working towards a common goal. This helps to prevent misunderstandings and ensures that everyone is fully invested in the success of the project.<br/><br/>To conclude, my experience with Git and Scrum has been incredibly valuable. These tools have helped me to work more efficiently, collaborate more effectively, and ultimately deliver better results. I believe that any project can benefit from the use of these tools, and I would highly recommend them to anyone looking to improve their workflow and achieve better outcomes.", " While my primary focus for the past couple years has been on web/app development, I also have some experience with other languages. For example, I have experimented with VBA and C++ in class and have even created tiny games in Java and Python. In the upcoming year I'll also be working a lot more with C++ because classes in my University require so.<br/><br/> Although I don’t have much experience with Python ( in the sense of data-science), I am confident that I will be able to pick it up easily when required. This is because Python is known for its simplicity and ease of use, and its base components are similar to other programming languages that I am already familiar with. On top, I'll be improving in all of these languages ( and more!) in the upcoming years during my University studies.<br/><br/>In short, my diverse skill set and willingness to learn new languages make me a versatile and valuable asset to any team. Whether it’s building complex web applications or experimenting with new technologies, I am always eager to expand my knowledge and take on new challenges.", "Presenting my resume for your review! (Click the title to open it). At the bottom of my resume you'll also be able to find my contact information.<br/><br/> As you explore the contents, you'll notice a strong emphasis on formal education. However, the real excitement of this website lies in the next chapter, I invite you to turn the page and venture into the enthralling realm of my projects, where I've meticulously documentend a rich tapestry of accomplishments and undertakings. This section serves as a testament to my unyielding passion for creativity, innovation and problem solving."];
    let currentIndex = 0;
    let previousIndex = 0;
    let previousScroll;



    function updateItems() {
      if (isTabletTitle) {
        $("#sec2-skills-description").css("max-width", "80vw");
        $(".empty-project-item").css("display", "none");
      } else {
        $("#sec2-skills-description").css("max-width", "105vh");
        $(".empty-project-item").css("display", "block");
      }
      if ($(window).scrollTop() >= (2.2 * window.innerHeight)) {
        $(".sec2-identifier").removeClass("visible");
        $(".sec2-identifier").eq(2).addClass("visible");

        $("#skillsWheel, #wheelPointer, #sec2-skills-title, #sec2-skills-description").css("opacity", "0")
        $("#sec2-skills-title, #sec2-skills-description").css("transform", "translate(0,40px)");

        $(".project-item").removeClass("item-visible");


      } else if ($(window).scrollTop() > (2 * window.innerHeight)) {
        $(".sec2-identifier").removeClass("visible");
        $(".sec2-identifier").eq(1).addClass("visible");

        $(".aboutme-section").css("opacity", "0")
        $(".abt1").css({
          opacity: "0",
          top: "100vh"
        })

        $("#skillsWheel, #wheelPointer, #sec2-skills-title, #sec2-skills-description").css("opacity", "0");
        $("#sec2-skills-title, #sec2-skills-description").css("transform", "translate(0,40px)");

        $("#sec2-skills-title, #sec2-skills-description").css("opacity", "0");
        $("#sec2-skills-title, #sec2-skills-description").css("transform", "translate(0, 40px)");

        setTimeout(() => {
          if ($(window).scrollTop() > (2 * window.innerHeight) && $(window).scrollTop() < (2.2 * window.innerHeight)) {
            $(".project-item").addClass("item-visible");
          } else {
            $(".project-item").removeClass("item-visible");

          }
        }, 800);
      } else if ($(window).scrollTop() < 5) {

        $(".sec2-identifier").removeClass("visible");
        $(".sec2-identifier").eq(0).addClass("visible");
        $("#skillsWheel, #wheelPointer, .aboutme-section").css("opacity", "0")

        $(".project-item").removeClass("item-visible");

      } else {

        $(".project-item").removeClass("item-visible");

        $(".aboutme-section").css("opacity", "0")
        $(".abt1").css({
          opacity: "0",
          top: "100vh"
        })

        if (previousScroll >= (2 * window.innerHeight)) {
          $("#sec2-skills-title, #sec2-skills-description").css("transition", "opacity .43s ease-in-out .6s, transform .85s ease-in-out .6s");
          $("#wheelPointer, #skillsWheel").css("transition", "transform .69s cubic-bezier(0.33, 0.65, 0.39, 0.94) .6s, opacity 1.5s ease-in-out .6s");
          setTimeout(() => {
            $("#sec2-skills-title, #sec2-skills-description").css("transition", "opacity .43s ease-in-out, transform .85s ease-in-out");
            $("#wheelPointer, #skillsWheel").css("transition", "transform .69s cubic-bezier(0.33, 0.65, 0.39, 0.94) 0s, opacity 1.5s cubic-bezier(0.33, 0.65, 0.39, 0.94) 0s");
          }, 1000);
        }

        $(".sec2-identifier").removeClass("visible");
        $(".sec2-identifier").eq(0).addClass("visible");
        $("#skillsWheel, #wheelPointer").css("opacity", "1");

        if (isTabletTitle) {
          $("#skillsWheel").css("opacity", ".2");
          $("#wheelPointer").css("opacity", "0");
        } else {
          $("#skillsWheel, #wheelPointer").css("opacity", "1");
        }
        if ($(window).scrollTop() > (1.95 * window.innerHeight) && $(window).scrollTop() < (2 * window.innerHeight)) {
          $("#sec2-skills-title, #sec2-skills-description").css({
            "opacity": "1",
            "transform": "translate(0,0px)"
          });
        }

        for (let k = 0; k < 8; k++) {
          if ((($(window).scrollTop() / (0.25 * window.innerHeight)) - k) >= 0) {
            currentIndex = k;
          }
        }


        if (currentIndex !== previousIndex) {
          $("#sec2-skills-title, #sec2-skills-description").css("opacity", "0")
          setTimeout(() => {

              if (skillsTitles[currentIndex].length >= 20) {
                if (isTabletTitle) {
                  $("#sec2-skills-title").css({
                    "font-size": "5vh",
                    "top": "14vh"
                  });
                } else {
                  $("#sec2-skills-title").css({
                    "font-size": "9vh",
                    "top": "15vh"
                  });
                }

              } else if (skillsTitles[currentIndex].length > 8) {
                if (isTabletTitle) {
                  $("#sec2-skills-title").css({
                    "font-size": "7vh",
                    "top": "14vh"
                  });
                } else {
                  $("#sec2-skills-title").css({
                    "font-size": "12.3vh",
                    "top": "12vh"
                  });
                }
              } else {
                if (isTabletTitle) {
                  $("#sec2-skills-title").css({
                    "font-size": "10vh",
                    "top": "14vh"
                  });
                } else {
                  $("#sec2-skills-title").css("font-size", "21.3vh");
                  if (skillsDescriptions[currentIndex].length > 700) {
                    $("#sec2-skills-title").css("top", "4vh");
                  } else if (skillsDescriptions[currentIndex].length > 700) {
                    $("#sec2-skills-title").css("top", "4vh");
                  } else {
                    $("#sec2-skills-title").css("top", "13vh");
                  }
                }
              }

              if (skillsDescriptions[currentIndex].length > 700) {
                if (skillsDescriptions[currentIndex].length > 1400) {
                  if (skillsTitles[currentIndex].length > 18) {
                    if (isTabletTitle) {
                      $("#sec2-skills-description").css({
                        "font-size": "1.7vh",
                        "line-height": "3.4vh",
                        "top": "25vh",
                      });
                    } else {
                      $("#sec2-skills-description").css({
                        "font-size": "1.8vh",
                        "line-height": "3.5vh",
                        "top": "28vh",
                      });
                    }
                  } else {
                    if (isTabletTitle) {
                      $("#sec2-skills-description").css({
                        "font-size": "1.5vh",
                        "line-height": "3vh",
                        "top": "25vh",
                      })
                    } else {
                      $("#sec2-skills-description").css({
                        "font-size": "1.8vh",
                        "line-height": "3.5vh",
                        "top": "30vh",
                      })
                    }          
                  }

                } else {
                  if (skillsTitles[currentIndex].length > 18) {
                    if (isTabletTitle) {
                      $("#sec2-skills-description").css({
                        "font-size": "2vh",
                        "line-height": "3.4vh",
                        "top": "25vh",
                      })
                    } else {
                      $("#sec2-skills-description").css({
                        "font-size": "2vh",
                        "line-height": "4vh",
                        "top": "30vh",
                      })
                    }
                  } else {
                    if (isTabletTitle) {
                      $("#sec2-skills-description").css({
                        "font-size": "1.7vh",
                        "line-height": "3.4vh",
                        "top": "27vh",
                      })
                    } else {
                      $("#sec2-skills-description").css({
                        "font-size": "2vh",
                        "line-height": "4vh",
                        "top": "32vh",
                      })
                    }
                  }
                }
              } else {
                if (isTabletTitle) {
                  $("#sec2-skills-description").css({
                    "font-size": "2vh",
                    "line-height": "3.4vh",
                    "top": "27vh",
                  })
                } else {
                  $("#sec2-skills-description").css({
                    "font-size": "2vh",
                    "line-height": "4vh",
                    "top": "42.5vh",
                  })
                }
            }
              $("#sec2-skills-title").html(`${skillsTitles[currentIndex]}`);
              $("#sec2-skills-description").html(`${skillsDescriptions[currentIndex]}`);
              if ($(window).scrollTop() < (2 * window.innerHeight)) {

                if (isMobile) {
                  if (skillsTitles[currentIndex].length > 13) {
                    $("#sec2-skills-title").css({
                      "font-size": "5.6vh",
                      "top": "9.5vh"
                    });
                  } else if (skillsTitles[currentIndex].length > 9) {
                    $("#sec2-skills-title").css({
                      "font-size": "5.5vh",
                      "top": "15vh"
                    });
                  }   else if (skillsTitles[currentIndex].length > 4) {
                    $("#sec2-skills-title").css({
                      "font-size": "7.6vh",
                      "top": "13vh"
                    });
                  }
                  console.log(skillsDescriptions[currentIndex].length);
                  if (skillsDescriptions[currentIndex].length > 1500) {
                    $("#sec2-skills-description").css({
                      "font-size": "1.6vh",
                      "line-height": "1.8vh",
                      "top": "25vh",
                    })
                  } else {
                    $("#sec2-skills-description").css({
                      "font-size": "1.8vh",
                      "line-height": "2.2vh",
                      "top": "25vh",
                    })
                  }
                }
                

                $("#sec2-skills-title, #sec2-skills-description").css({
                  "opacity": "1",
                  "transform": "translate(0,0px)"
                })

              } else {
                $("#sec2-skills-title, #sec2-skills-description").css({
                  "opacity": "0",
                  "transform": "translate(0,40px)"
                })
            }
          }, 650);
        }

        previousIndex = currentIndex;

        if ($(window).scrollTop() === 5) {
          $("#skillsWheel, #wheelPointer").css("opacity", "0")
        }
      }
    }

    let previousScrollTop = 0;
    let currentItemIndex = 0;
    let isRunning = false;
    let isAnimating = false;

    function aboutMeScroller() {
      if (isRunning || isAnimating) return;

      isRunning = true;

      let currentScrollTop = $(window).scrollTop();

        if (currentScrollTop > previousScrollTop +2 && currentItemIndex < 5) {
          currentItemIndex += 1;
        } else if (currentScrollTop < previousScrollTop -2 && currentItemIndex > 0) {
          currentItemIndex -= 1;
        }

      isAnimating = true;
      $('html, body').animate({
        scrollTop: ((window.innerHeight) * (2.25 + 0.15 * currentItemIndex))
      }, 100, function() {
        isAnimating = false;
      });

      setTimeout(() => {
        changeSlide();
        isRunning = false;
      }, 100);

      previousScrollTop = (window.innerHeight) * (2.25 + 0.15 * currentItemIndex);
    }

    function changeSlide() {
      
      $(".aboutme-section-title").css("opacity", "0");
      if (isTabletTitle) {
        $(".aboutme-section-description").css({
          opacity: "0",
          top: "13vh"
        });
      } else {
        $(".aboutme-section-description").css({
          opacity: "0",
          top: "22vh"
        });
      }

      // animations for images, e.g. when they enter on viewport run x

      let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            $(entry.target).addClass("enterphoto");
          } else {
            $(entry.target).removeClass("enterphoto");
          }
        })
      })

      $(".aboutme-photo").each(function() {
        observer.observe(this);
      });
      
      $(".aboutme-section-photo-description").each(function() {
        observer.observe(this);
      });

      // switch between slides
      if (($(window).scrollTop() / $(window).innerHeight()) >= 2.85) {
        $(".abt5").css({
          opacity: "1",
          top: "8.4vh"
        })
        $(".abt4, .abt3, .abt2, .abt1").css({
          opacity: "0",
          top: "-100vh"
        })

        $(".aboutme-section-title").eq(4).css("opacity", "0.5");
        $(".aboutme-section-description:eq(4)").css({
          opacity: "1",
          top: "25vh"
        });


      } else if (($(window).scrollTop() / $(window).innerHeight()) >= 2.70) {
        $(".abt3, .abt2, .abt1").css({
          opacity: "0",
          top: "-100vh"
        })
        $(".abt4").css({
          opacity: "1",
          top: "8.4vh"
        })
        $(".abt5").css({
          opacity: "0",
          top: "100vh"
        })

        $(".aboutme-section-title").eq(3).css("opacity", "0.5");
        if (isTabletTitle) {
          $(".aboutme-section-description:eq(3)").css({
            opacity: "1",
            top: "16vh"
          });
        } else {
          $(".aboutme-section-description:eq(3)").css({
            opacity: "1",
            top: "25vh"
          });
        }
        

      } else if (($(window).scrollTop() / $(window).innerHeight()) >= 2.55) {
        $(".abt2, .abt1").css({
          opacity: "0",
          top: "-100vh"
        })
        $(".abt3").css({
          opacity: "1",
          top: "8.4vh"
        })
        $(".abt4, .abt5").css({
          opacity: "0",
          top: "100vh"
        })

        $(".aboutme-section-title").eq(2).css("opacity", "0.5");
        if (isTabletTitle) {
          $(".aboutme-section-description:eq(2)").css({
            opacity: "1",
            top: "16vh"
          });
        } else {
          $(".aboutme-section-description:eq(2)").css({
            opacity: "1",
            top: "23.5vh"
          });
        }
      } else if (($(window).scrollTop() / $(window).innerHeight()) >= 2.40) {
        $(".abt1").css({
          opacity: "0",
          top: "-100vh"
        })
        $(".abt2").css({
          opacity: "1",
          top: "8.4vh"
        })
        $(".abt3, .abt4, .abt5").css({
          opacity: "0",
          top: "100vh"
        })

        $(".aboutme-section-title").eq(1).css("opacity", "0.5");
        if (isTabletTitle) {
          $(".aboutme-section-description:eq(1)").css({
            opacity: "1",
            top: "16vh"
          });
        } else {
          $(".aboutme-section-description:eq(1)").css({
            opacity: "1",
            top: "25vh"
          });
        }
      } else if (($(window).scrollTop() / $(window).innerHeight()) >= 2.20) {
        $(".abt1").css({
          opacity: "1",
          top: "8.4vh"
        })
        $(".abt2, .abt3, .abt4, .abt5").css({
          opacity: "0",
          top: "100vh"
        })

        $(".aboutme-section-title").eq(0).css("opacity", "0.5");
        if (isTabletTitle) {
          $(".aboutme-section-description:eq(0)").css({
            opacity: "1",
            top: "16vh"
          });
        } else {
          $(".aboutme-section-description:eq(0)").css({
            opacity: "1",
            top: "25vh"
          });
        }
      } 

    }

    function handleScroll() {
      $(".fade-transform").each(function() {
        if ($(this).offset().top < $(window).scrollTop() + $(window).height() * .9) {
          $(this).addClass("fade-transform-true");
        } else {
          $(this).removeClass("fade-transform-true");
        }
      });
    }

    let debounceTimer;
    let debounceTimerAboutMeScroller;
    let isWaveInitialized = false;
    let waveTimeouts = [];

    function clearWaveTimeouts() {
      waveTimeouts.forEach((timeout) => clearTimeout(timeout));
      waveTimeouts = [];
    }

    function initialiazeWaves() {
      clearWaveTimeouts();

      if (isWaveInitialized !== true) {
        // background wave-container ( project various)
      $(() => {
        const waveContainer = $(".wave-container");
        const wave = $(".wave");
        const numberOfWaves = 60;

        wave.css("left", "0");
      
        function createWave(top, left) {
          const newWave = wave.clone().css({ top: `calc(${top}px + 20vh)`, left: `${left}px` });
          return newWave;
        }

      
        function animateWave(waveElement) {
          let currentCounter = 0;
          var positions = ["800px", "300px", "0px", "500px"];

          $(waveElement).css("opacity", "1");
          $(waveElement).css("left", "500px");
        
          setInterval(() => {
            $(waveElement).css("left", positions[currentCounter]);
            currentCounter = (currentCounter + 1) % positions.length;
          }, 10000);
          
          
      }
      
        setTimeout(() => animateWave(wave), 0 * 20);
      
        for (let r = 0; r < numberOfWaves; r++) {
          const newWave = createWave(r * 10, r * 8);
          waveContainer.append(newWave);
          setTimeout(() => animateWave(newWave), r * 210);
        }
        isWaveInitialized = true;
      })
    }

  }
    // general scroller

    $(window).on("scroll", (e) => {

      $("#skillsWheel").css("transform", `rotate(${90 + ($(window).scrollTop() / (2 * window.innerHeight)) * 360}deg)`);

      
      if ($(".project-Numero").hasClass("expanded-project")) {
        handleScroll();
      }

      if ($(".back").css("display") !== "block") {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          updateItems();
          if ($(window).scrollTop() > (2.21 * window.innerHeight)) {
            window.history.pushState('', 'About Me!', '/AboutMe');
            document.title = "About Me";
            if (!isAnimating && !isRunning) {
              clearTimeout(debounceTimerAboutMeScroller);
              debounceTimerAboutMeScroller = setTimeout(() => {
                aboutMeScroller();
              }, 100);
            }
          } else if ($(window).scrollTop() > (2 * window.innerHeight)) {
            window.history.pushState('', 'Projects!', '/Projects');
            document.title = "My Projects";
            currentItemIndex = 0;
          } else if ($(window).scrollTop() > 5) {
            window.history.pushState('', 'Skills!', '/Skills');
            document.title = "My Skills";
            currentItemIndex = 0;
          } 
          previousScroll = $(window).scrollTop();

        }, 15);
        // added debouncer to check performance regarding updateItems() after figuring I saw some performance issues on slower machines. It ended up beeing a GPU-related problem with a filter CSS property on the animated background. Thus the debouncer is set to 15ms
      }

      if ($(`.project-${currentProjectTag}`).hasClass("expanded-project")) {
        var parScroll = (($(document).scrollTop()) / (3 * window.innerHeight)); 

        if (currentProjectTag === "Numero") {
          updateNumeroItems(parScroll);
        } else if (currentProjectTag === "Various") {
          updateVariousItems(parScroll);
        }
      }
    });

    function updateNumeroItems(parScroll) {

      $(".project-Numero-par3").css("top", `calc(-${parScroll * 112}vh + 150vh)`);
      $(".project-Numero-par4, .project-Numero-par5").css("top", `calc(-${parScroll * 110}vh + 150vh)`);

      $(".project-Numero-timeline").css("top", `calc(-${parScroll * 112}vh + 150vh)`);
        $(".project-Numero-par2").css("top", `calc(-${parScroll * 88}vh + 40vh)`);
        $(".project-Numero-par1").css("top", `calc(-${parScroll * 73}vh + 15vh)`);
        $(".hor-line-1").css("top", `calc(-${parScroll * 98}vh + 95vh)`);
        $(".hor-line-2").css("top", `calc(-${parScroll * 98}vh + 135vh)`);
        $(".project-Numero-line").css("top", `calc(-${parScroll * 98}vh + 135vh)`);
        $(".project-Numero-banner").css("top", `calc(-${parScroll * 98}vh + (95vh + 2px))`);
        $(".project-Numero-phone").css("top", `calc(-${parScroll * 45}vh + 0vh)`);
        $(".project-Numero-navbar").css("top", `calc(-${parScroll * 100}vh + 135vh)`);

        if (parScroll < 0.15) {
          $(".project-Numero").css("background-color", "#2ce5a3");
          $(".project-Numero-paragraph").css("color", "white");
        } else {
          $(".project-Numero").css("background-color", "white");
          $(".project-Numero-paragraph").css("color", "black");

        }
    }

    function updateVariousItems(parScroll) {
      if (parScroll > 0.05) { 
        $(".project-Various-arrow").css("opacity", "0");
        $(".project-Various-arrow-description").css("opacity", "0");
      } else {
        $(".project-Various-arrow").css("opacity", "1");
        $(".project-Various-arrow-description").css("opacity", "1");
      }

      $(".project-Various-seperator").css("top",`calc(-${parScroll * 60}vh + 64.5vh)`);
      $(".project-Various-seperator").css("opacity",`calc(.5 - 2 * ${parScroll})`);

      $(".project-Various-description").css("top",`calc(-${parScroll * 60}vh + 63vh)`);
      $(".project-Various-description").css("opacity",`calc(1 - 2 * ${parScroll})`);

      $(".project-Various-title-letters p").each(function(index) {
        const parScrollMultiplier = [115, 95, 75][index];
        const topValue = `calc(-${parScrollMultiplier * parScroll}vh + 23vh)`;
        $(this).css("top", topValue);

        if (parScroll === 0) {
          $(".project-Various-title-letters p").css("transition", "top cubic-bezier(0.16, 0.69, 0.26, 0.88) .78s .1s");
          $(".project-Various-seperator").css("transition", "top cubic-bezier(0.16, 0.69, 0.26, 0.88) .78s");
          $(".project-Various-description").css("transition", "top cubic-bezier(0.16, 0.69, 0.26, 0.88) .78s");
          $(this).css("top",`calc(-${parScrollMultiplier * parScroll}vh + 28vh)`);
          $(".project-Various-seperator").css("top",`calc(-${parScroll * 60}vh + 64.5vh + 5vh)`);
          $(".project-Various-description").css("top",`calc(-${parScroll * 60}vh + 63vh + 5vh)`);
          setTimeout(() => {
            $(this).css("top",`calc(-${parScrollMultiplier * parScroll}vh + 23vh)`);
            $(".project-Various-seperator").css("top",`calc(-${parScroll * 60}vh + 64.5vh)`);
            $(".project-Various-description").css("top",`calc(-${parScroll * 60}vh + 63vh)`);

            setTimeout(() => {
              $(".project-Various-title-letters p").css("transition", "unset")
              $(".project-Various-seperator, .project-Various-description").css("transition", "unset");
            }, 580);
          }, 200);
        }
      });

      $(".project-Various-title-letters p").css("opacity",`calc(1 - 2 * ${parScroll})`);

      $(".project-Various-pentagon-container").css("top", `calc(-${parScroll * 100}vh + 80vh)`);
      
      $(".project-Various-pentagon").css("top",`calc(-${parScroll * 100}vh + 80vh)`);
      $(".project-Various-pentagon-border").css("top",`calc(-${parScroll * 100}vh + 80vh)`);
      
      $(".project-Various-pentagon2").css("top",`calc(-${parScroll * 100}vh + 80vh)`);
      
      $(".project-Various-pentagon3").css("top",`calc(-${parScroll * 100}vh + 124vh)`);
      
      $(".project-Various-pentagon4").css("top",`calc(-${parScroll * 100}vh + 124vh)`);
      
      $(".project-Various-pentagon5").css("top",`calc(-${parScroll * 100}vh + 115vh)`);
      $(".project-Various-pentagon6").css("top",`calc(-${parScroll * 100}vh + 146vh)`);

      $(".project-Various-more").css("top",`calc(-${parScroll * 100}vh + 150vh)`);

      if (parScroll > 0.85) {
        $(".project-Various-more").css("opacity", "1");
      } else {
        $(".project-Various-more").css("opacity", "0");
      }

      if (parScroll > 0.45) {
        $(".project-Various-pentagon-container").css("width", "73.5vw");
      } else {
        $(".project-Various-pentagon-container").css("width", "0vw");
      }
    
    }

    function updateNavContainer(e) {
      $(".Numero-navbar-item-active").removeClass("Numero-navbar-item-active"); 
      $(e.target).addClass("Numero-navbar-item-active"); 

      console.log($(e.target).text());
      if ($(e.target).text() === "TIMELINE") {
        // disable general
          $(".project-Numero-par3").removeClass("fade-transform fade-transform-true");
          $(".project-Numero-par4").removeClass("fade-transform fade-transform-true");
          $(".project-Numero-par5").removeClass("fade-transform fade-transform-true");
          $(".project-Numero-timeline").addClass("fade-transform fade-transform-true");
      } else if ($(e.target).text() === "GENERAL") {
        // disable general

          $(".project-Numero-timeline").removeClass("fade-transform fade-transform-true");
          $(".project-Numero-par3").addClass("fade-transform fade-transform-true");
          $(".project-Numero-par4").removeClass("fade-transform fade-transform-true");
          $(".project-Numero-par5").removeClass("fade-transform fade-transform-true");
      } else if ($(e.target).text() === "METHODOLOGY") {
        // disable general
        $(".project-Numero-timeline").removeClass("fade-transform fade-transform-true");
        $(".project-Numero-par3").removeClass("fade-transform fade-transform-true");
        $(".project-Numero-par4").addClass("fade-transform fade-transform-true");
        $(".project-Numero-par5").removeClass("fade-transform fade-transform-true");
      } else {
        // disable general
        $(".project-Numero-timeline").removeClass("fade-transform fade-transform-true");
        $(".project-Numero-par3").removeClass("fade-transform fade-transform-true");
        $(".project-Numero-par4").removeClass("fade-transform fade-transform-true");
        $(".project-Numero-par5").addClass("fade-transform fade-transform-true");
      }

    }

    $(".Numero-navbar-item-txt").on("click", (e) => {
      updateNavContainer(e);
    }) 

    $(".navbar-item").on("click", (e) => {

      // show bars
      $(".bars-b1").addClass("b1-active");
      setTimeout(() => {
        $("#tape-movement").css("display", "none");
        $(".navbar").css("opacity", "0");
        setTimeout(() => {
          $(".navbar").css("display", "none");
        }, 550)
        isEnabled = false;
        $("#tape-movement, .background").css("transform", "rotate(0deg)");
        $(".sec2, .back-to-home, .sec2-identifier").css("display", "block");
      }, 800)
      // exit bars
      setTimeout(() => {
        for (let k = 0; k < 3; k++) {
          setTimeout(() => {
            $(".b1-active").eq(k).css("top", "-100vh");
          }, k * 150)
        }
      }, 1250)

      // code after exit bars
      setTimeout(() => {

        $("body").css("height", "400vh");
        $("body").css("position", "unset");
        $("body").css("overflow", "unset");
        $("body").css("overflow-x", "hidden");
        $(".sec2").css("background-color", "#000000bf");
        $(".sec2-identifier").removeClass("visible");
        $(".sec2-identifier").eq(0).addClass("visible");
        $("#sec2-skills-title, #sec2-skills-description").css("opacity", "1");
        $("#sec2-skills-title, #sec2-skills-description").css("transform", "translate(0,0px)");

        $(".back-to-home").css("opacity", "1")

        if ($(e.target).attr("tag") === "skills") {
          window.history.pushState('', 'Skills!', '/Skills');
          document.title = "My Skills"
          $('html, body').animate({
            scrollTop: 5
          }, 0);

        } else if ($(e.target).attr("tag") === "projects") {
          $('html, body').animate({
            scrollTop: 5
          }, 0);
          setTimeout(() => {
            $('html, body').animate({
              scrollTop: (2.05 * (window.innerHeight))
            }, 650);
          }, 1000);

        } else if ($(e.target).attr("tag") === "aboutMe") {
          $('html, body').animate({
            scrollTop: 5
          }, 0);
          setTimeout(() => {
            $('html, body').animate({
              scrollTop: (2.25 * (window.innerHeight))
            }, 650);
          }, 1000);
        }
      }, 1450)
    })

    for (let k = 1; k < 4; k++) {
      var textWrapper = document.querySelector(`.project-item-title-${k} .letters`);
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, `<span class='letter${k}'>$&</span>`)
    }


    anime.timeline({ loop: true })
      .add({
        targets: '.project-item-title-1 .letter1',
        rotateY: [-90, 0],
        duration: 1300,
        delay: (el, i) => 45 * i
      }).add({
        targets: '.project-item-title-1',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });

    anime.timeline({ loop: true })
      .add({
        targets: ".project-item-title-2 .letter2",
        translateY: ["1.1em", 0],
        translateX: ["0.55em", 0],
        translateZ: 0,
        rotateZ: [180, 0],
        duration: 750,
        easing: "easeOutExpo",
        delay: (el, i) => 50 * i,
      }).add({
        targets: ".project-item-title-2",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });

    anime.timeline({ loop: true })
      .add({
        targets: ".project-item-title-3 .letter3",
        translateY: ["1.1em", 0],
        translateX: ["0.55em", 0],
        translateZ: 0,
        rotateZ: [180, 0],
        duration: 750,
        easing: "easeOutExpo",
        delay: (el, i) => 50 * i,
      }).add({
        targets: ".project-item-title-3",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });

      var textWrapperTypewriter = $('.project-item-title-4 .letters');
      // eslint-disable-next-line
      textWrapperTypewriter.html(textWrapperTypewriter.text().replace(/([^\u0000-\u0080]|\w)/g, "<span class='letter4'>$&</span>"));

      anime.timeline({ loop: true })
        .add({
          targets: '.project-item-title-4 .project-line',
          scaleY: [0, 1],
          opacity: [0.5, 1],
          easing: "easeOutExpo",
          duration: 1000
        })
        .add({
          targets: '.project-item-title-4 .project-line',
          translateX: [0, 690],
          easing: "easeOutExpo",
          duration: 2000,
          delay: 0
        })
        .add({
          targets: '.project-item-title-4 .letter4',
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 2000,
          delay: (el, i) => 75 * i
        }, 1250)
        .add({
          targets: '.project-item-title-4',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 0
        });
    
    function newCircle(x, y, queryOfLocation) {
      if (document.querySelector('transition-circle') === null) {
        $(`${queryOfLocation}`).prepend(`<div class="transition-circle" style="top: ${y}px; left: ${x}px"></div>`);
        setTimeout(() => {
          $(".transition-circle:eq(0)").css("transform", "scale(250, 250)");
        }, 200);
      }
    }

    var currentProjectTag = "";

    $(".project-item").on("click", (e) => {
      var projectTag = $(e.target).attr("tag");
      currentProjectTag = projectTag;

      $("body").css({
        "height": "400vh",
        "overflow": "unset",
        "overflow-x": "hidden"
      });
      
      if (projectTag !== "ToBeDecided") {
        
        window.history.pushState('', 'Projects!', `/Projects/${projectTag}`);

        $('html, body').animate({
          scrollTop: 5
        }, 800);

        if (projectTag === "Numero") {
          updateNumeroItems(0);
          $(".fade-transform-true").removeClass("fade-transform-true");
          setTimeout(() => {
            handleScroll();
            //updateNavContainer($(".project-Numero-par3"));
          }, 2300);
        }

        if (projectTag === "Various") {
          updateVariousItems(0);
          initialiazeWaves();
        }

        if (projectTag === "Portfolio") {
          $("body").css({
            "height": "100vh",
            "overflow": "hidden"
          });

          $(".project-Portfolio-fadeIn").addClass("project-Portfolio-fadeIn-active");
        }

        newCircle(e.clientX, e.clientY, ".sec2-item:eq(1)");
        $(".back").css("display", "block");
        $(".sec2-item:eq(1)").addClass("project-active");

        setTimeout(() => {
          $(".back").css("opacity", "1");

          $(`.project-${projectTag}`).addClass("expanded-project");
          if (isTabletTitle) {
            $(`.project-${projectTag}`).css({
              "right": "-3.3vw",
              "opacity": "1"
            })
          } else {
            $(`.project-${projectTag}`).css({
              "right": "0",
              "opacity": "1"
            })
          } 
        }, 1500);

        setTimeout(() => {
          $(".project-item").css("display", "none");
          $(".background").css("display", "none");
        }, 2000);
      }

    });

    $(".back").on("click", () => {
      window.history.pushState('', 'Projects!', `/Projects`);

      $(".background").css("display", "block");

      $("body").css({
        "height": "400vh",
        "overflow": "unset",
        "overflow-x": "hidden"
      });

      if ($(".project-Portfolio-fadeIn").hasClass("project-Portfolio-fadeIn-active")) {
        $(".project-Portfolio-fadeIn").removeClass("project-Portfolio-fadeIn-active");
      }

      removeProject();

      $('html, body').animate({
        scrollTop: (2.05 * (window.innerHeight))
      }, 0);

      if (!isTabletTitle) {
        $(".project-item").css("display", "block");
      }  else {
        $(".project-item").css("display", "block");
        $(".empty-project-item").css("display", "none");
      }
      document.querySelector(".transition-circle").style.transform = "scale(0, 0)";
      $(".sec2-item:eq(1)").removeClass("project-active");

      $(".back").css("opacity", "0");

      setTimeout(() => {
        $(".back").css("display", "none");
      }, 1000);

      setTimeout(() => {
        $(".transition-circle").remove();
      }, 2000);
    });

    $(document).on("visibilitychange", () => {
      if (document.hidden) {
          window.history.pushState('', 'Left already?', '/');
      } else {
          window.history.pushState('', 'Home!', '/');
      }
    });

    $(".open-linkedin").on("click", () => {
      window.open("https://www.linkedin.com/in/jensvandersloot");
    });
    $(".call-number").on("click", () => {
      window.location.href = `tel:+31628968296`;
    });
    $(".send-email").on("click", () => {
      window.location.href = `mailto:jensvandersloot@gmail.com`;
    });
    $(".open-webpage").on("click", () => {
      window.location.reload();
    });

    $(".project-Various-more-codepen").on("click", function() {
      window.location.href = "https://codepen.io/mproses";
    });

    $(".project-Various-more-github").on("click", function() {
        window.location.href = "https://github.com/MPRoses";
    });


  });

  return (

    <div className="App">
      <div>
      <div className="background-button">
        <img src="https://i.ibb.co/X4f7qpJ/pause.png" className="background-button-img background-button-pause" alt="pause" />
        <img src="https://i.ibb.co/v4hBCwz/play.png" className="background-button-img background-button-play background-button-active" alt="play" />
      </div>

      </div>
      <div className="background">
        <svg className="svgTop" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 100">
          <path fill="#FC8E00" className="out-top" d="M37-5C25.1-14.7,5.7-19.1-9.2-10-28.5,1.8-32.7,31.1-19.8,49c15.5,21.5,52.6,22,67.2,2.3C59.4,35,53.7,8.5,37-5Z" />
          <path fill="#798A9A" className="in-top" d="M20.6,4.1C11.6,1.5-1.9,2.5-8,11.2-16.3,23.1-8.2,45.6,7.4,50S42.1,38.9,41,24.5C40.2,14.1,29.4,6.6,20.6,4.1Z" />
        </svg>
        <svg className="svgBottom" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 100">
          <path fill="#E6BD69" className="out-bottom" d="M105.9,48.6c-12.4-8.2-29.3-4.8-39.4.8-23.4,12.8-37.7,51.9-19.1,74.1s63.9,15.3,76-5.6c7.6-13.3,1.8-31.1-2.3-43.8C117.6,63.3,114.7,54.3,105.9,48.6Z" />
          <path fill="#254562" className="in-bottom" d="M102,67.1c-9.6-6.1-22-3.1-29.5,2-15.4,10.7-19.6,37.5-7.6,47.8s35.9,3.9,44.5-12.5C115.5,92.6,113.9,74.6,102,67.1Z" />
        </svg>
      </div>
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
      <div className="navbar">
        <p className="starthere">start here<br></br>→</p>
        <div className="navbar-item clickable2 hoverable" tag="skills">
          <img src="https://mproses.github.io/hosted-assets/Ellipse%201.png" className="item-dot" alt="dot" />
          <p className="item-text">SKILLS</p>
        </div>
        <div className="navbar-item item-projects clickable2 hoverable" tag="projects">
          <img src="https://mproses.github.io/hosted-assets/Ellipse%201.png" className="item-dot dot-projects" alt="dot" />
          <p className="item-text text-projects">PROJECTS</p>
        </div>
        <div className="navbar-item item-aboutme clickable2 hoverable" tag="aboutMe">
          <img src="https://mproses.github.io/hosted-assets/Ellipse%201.png" className="item-dot dot-aboutme" alt="dot" />
          <p className="item-text text-aboutme">ABOUT&nbsp;ME</p>
        </div>

      </div>


      <div className="black-bars">
        <div className="bars-b1"></div>
        <div className="bars-b1 b1-left"></div>
        <div className="bars-b1"></div>
      </div>


      <div className="sec2">
        <p className="sec2-identifier">TAPE 1:<br></br>"SKILLS"</p>
        <p className="sec2-identifier">TAPE 2:<br></br>"PROJECTS"</p>
        <p className="sec2-identifier">TAPE 3:<br></br>"ABOUTME"</p>
        <div className="sec2-item" id="skills">
          <img src={skillsWheel} alt="skillsWheel" id="skillsWheel" />
          <img src={wheelPointer} alt="wheelPointer" id="wheelPointer" />
          <p id="sec2-skills-title">Welcome!</p>
          <p id="sec2-skills-description">Hello there! I’m excited to welcome you to my website! My name is Jens and I’m thrilled to share with you who I am, what I specialize in, and what I’ve worked on in the past.<br></br><br></br>As a computer scientist and designer, I’m passionate about creating innovative solutions that are both functional and beautiful. You’ll find that my work is inspired by my love of technology and design.<br></br><br></br>Before you start scrolling (P.S. use arrow keys for a smoother experience!) I'd like to note that there is a lot of text here on this site. Why? Because I didn't want you to just get to know my work, I also wanted you to get to know me. So, without further ado, let’s embark on a new journey together!&nbsp;&nbsp;🚀</p>
        </div>
        <div className="sec2-item" id="projects">
          <button className="back back-one hoverable">
            <span className="top-left"></span>
            <span className="top-right"></span>
            <span className="bottom-left"></span>
            <span className="bottom-right"></span>
            <span className="stalk"></span>
            <span className="text">BACK</span>
          </button>
          <div id="project-items-container">
            <div className="project-item hoverable" tag="Portfolio">
              <img src={proj1} alt="showcase" className="project-item-img project-item-img1" />
              <div className="project-item-title-container" >
                <h1 className="project-item-title-1">
                  <span className="text-wrapper"  >
                    <span className="letters" >PORTFOLIO</span>
                  </span>
                </h1>
              </div>
            </div>

            <div className="project-item hoverable project-item-bottom" tag="Numero">
              <div alt="showcase" className="project-item-img project-item-img-bottom numero-bg" ></div>
              <div className="project-item-title-container" >
                <h1 className="project-item-title-2">
                  <span className="text-wrapper" >
                    <span className="letters" >Numero</span>
                  </span>
                </h1>
              </div>
            </div>
            <div className="project-item hoverable project-item-3" tag="Various">
            <img src={proj3} alt="showcase" className="project-item-img3" />
              <div className="project-item-title-container">
                <h1 className="project-item-title-4">
                  <span className="text-wrapper">
                    <span className="letters">VARIOUS</span>
                  </span>
                  <span className="project-line project-line1"></span>
                </h1>
              </div>
            </div>

            <div className="project-item project-item-bottom" tag="ToBeDecided"></div>
            <div className="project-item empty-project-item" tag="ToBeDecided" ></div>
            <div className="project-item project-item-bottom empty-project-item" tag="ToBeDecided" ></div>
          </div>
          <div className="project-Numero">
            <p className="project-Numero-paragraph project-Numero-par1 fade-transform">
              Discover <span style={{"fontFamily": "Kalam, sans-serif"}}>Numero</span>, your personal academic assistant.
            </p>
            <p className="project-Numero-paragraph project-Numero-par2 fade-transform">
              Effortlessly enter your grades, understand your current standing, and determine what’s needed to progress to the next academic year. Let <span style={{"fontFamily": "Kalam, sans-serif"}}>Numero</span> be your guide to success.
            </p>
            <div className="project-Numero-line fade-transform"></div>
            <div className="project-Numero-line-hor hor-line-1 fade-transform"></div>
            <div className="project-Numero-banner fade-transform">
            <div className="project-item-title-container item-tag-project-Numero-banner" >
                <h1 className="project-item-title-3" id="project-Numero-title2">
                  <span className="text-wrapper" >
                    <span className="letters" >Numero</span>
                  </span>
                </h1>
              </div>
            </div>
            <div className="project-Numero-line-hor hor-line-2 fade-transform"></div>
            <div className="fade-transform">
              <img src={phoneNumero} alt="login screen Numero" className="project-Numero-phone phone-1" />
              <img src={phoneNumero1} alt="login screen Numero2" className="project-Numero-phone phone-2" />
              <img src={phoneNumero3} alt="login screen Numero3" className="project-Numero-phone phone-3" />
            </div>
            <p className="project-Numero-paragraph project-Numero-par3 fade-transform">
              <span style={{"fontFamily": "Kalam, sans-serif"}}>Numero</span> was born out of a collaboration between a classmate and myself for our final project in the Computer Science class at Fioretti College Lisse. We developed this innovative tool for a teacher at DaVinci College Leiden, aiming to revolutionize the way his students navigate their academic journey.
              <br></br><br></br>The end goal for <span style={{"fontFamily": "Kalam, sans-serif"}}>Numero</span> was set out to be an up and running web based application with scalability as its central point.
            </p>

            <p className="project-Numero-paragraph project-Numero-par4">
              As the frontend developer for this project, I started with initial designs, then built the start, login, and register features, and designed the home/settings pages. <br></br><br></br> My partner, the backend developer, set up the backend, ensured user data could be saved, and made the Cijferlijst backend operational.
              We worked out the formulas required for each year and Vakkenpakket. I then designed and built the Cijferlijst.<br></br><br></br>
              Throughout this process, we held regular Scrum meetings with the project requestor for reviews, ensuring we were on track. This Scrum approach led to the successful delivery of the project.
            </p>
            <p className="project-Numero-paragraph project-Numero-par5">
              Looking forward, the scalability inherent in <span style={{"fontFamily": "Kalam, sans-serif"}}>Numero</span> paves the way for future enhancements by other teams. We’ve ensured it can adapt to evolving school policies and accommodate diverse academic paths. We’re proud to have laid a robust foundation for <span style={{"fontFamily": "Kalam, sans-serif"}}>Numero</span>, and are excited to see how it will continue to transform students’ academic experiences.
            </p>

      
            <img src={timeline} className="project-Numero-timeline" alt="Numero timeline" />
            <div className="project-Numero-navbar ">
              <div className="project-Numero-navbar-item project-Numero-navbar-item1 fade-transform">
                <p className="Numero-navbar-item1-txt Numero-navbar-item-txt hoverable">
                  TIMELINE
                </p>
              </div>
              <div className="project-Numero-navbar-item project-Numero-navbar-item2 fade-transform">
                <p className="Numero-navbar-item2-txt Numero-navbar-item-txt hoverable">
                  METHODOLOGY
                </p>   
              </div>
              <div className="project-Numero-navbar-item project-Numero-navbar-item3 fade-transform">
                <p className="Numero-navbar-item3-txt Numero-navbar-item-txt Numero-navbar-item-active hoverable">
                  GENERAL
                </p>   
              </div>
              <div className="project-Numero-navbar-item project-Numero-navbar-item4 fade-transform">
                <p className="Numero-navbar-item4-txt Numero-navbar-item-txt hoverable">
                  LOOKING&nbsp;&nbsp;&nbsp;&nbsp;
                  <br></br><br></br>
                  &nbsp;&nbsp;&nbsp;&nbsp;FORWARD
                </p>   
              </div>
            </div>
          </div>
          <div className="project-Various">
            <div className="wave-container">
              <img alt="singular-wave" src="https://i.ibb.co/QCZv8JZ/Group-14.png" className="wave"/> 
            </div>
            <div className="project-Various-title-letters">
              <p>
                EMBARKED
              </p>
              <p>
                <br></br>FROM THE
              </p>
              <p>
              <br></br><br></br>NULL
              </p>
            </div>
            <div className="project-Various-seperator"></div>
            <div className="project-Various-description">HERE’S WHAT I’VE BUILD</div>
            <svg className="project-Various-arrow" xmlns="http://www.w3.org/2000/svg" width="4" height="8" viewBox="0 0 4 8" fill="none">
              <path d="M1.82322 7.17678C1.92085 7.27441 2.07915 7.27441 2.17678 7.17678L3.76777 5.58579C3.8654 5.48816 3.8654 5.32986 3.76777 5.23223C3.67014 5.1346 3.51184 5.1346 3.41421 5.23223L2 6.64645L0.585786 5.23223C0.488155 5.1346 0.329864 5.1346 0.232233 5.23223C0.134602 5.32986 0.134602 5.48816 0.232233 5.58579L1.82322 7.17678ZM1.75 0L1.75 7H2.25L2.25 0L1.75 0Z" fill="white"/>
            </svg>
            <div className="project-Various-arrow-description">SCROLL AND EXPLORE</div>
            <div className="project-Various-pentagon-container">
              <div className="project-Various-pentagon-border"></div>
              <img className="project-Various-pentagon" src={pentagon} alt=""/> 
              <img className="project-Various-pentagon2" src={pentagon2} alt=""/> 
              <img className="project-Various-pentagon3" src={pentagon3} alt=""/> 
              <img className="project-Various-pentagon4" src={pentagon4} alt=""/> 
              <img className="project-Various-pentagon5" src={pentagon5} alt=""/> 
              <img className="project-Various-pentagon6" src={pentagon6} alt=""/> 
            </div>
            <div className="project-Various-more">
              <p>AND A BUNCH MORE</p>
              <div></div>
              <img className="project-Various-more-codepen hoverable" src={codepen} alt=""/>
              <img className="project-Various-more-github hoverable" src={github} alt=""/>
            </div>
          </div>
          <div className="project-Portfolio">
            <div className="project-Portfolio-img">
              <img src={projectban1} alt=""/>
            </div>
            <p className="project-Portfolio-title Portfolio-title-1 project-Portfolio-fadeIn">
              GENERAL
            </p>
            <p className="Portfolio-description-1 project-Portfolio-fadeIn">
              I started this project with a mere want for a personal site to serve as an introduction. Over time, it grew and grew, and here we are now!<br></br><br></br>Unlike with any of my other projects, with this project I was rather flexible, instead of designing the entire site in one go, I designed sections and let my creativity flow when coding.<br></br><br></br>I wanted to make sure of that when someone would enter this site they would immediately know who they are working with, a creative individual with a love for designing and coding. All in all I think I did a pretty good job with that :)
            </p>
            <p className="project-Portfolio-title Portfolio-title-2 project-Portfolio-fadeIn">
              METHODOLOGY
            </p>
            <p className="Portfolio-description-2 project-Portfolio-fadeIn">
              All elements on this site were designed in Figma, written in the framework React and packaged and published utilizing react-gh-pages.
            </p>
            <p className="project-Portfolio-title Portfolio-title-3 project-Portfolio-fadeIn">
              LOOKING FORWARD
            </p>
            <p className="Portfolio-description-3 project-Portfolio-fadeIn">
              Just like this site, born out of a spark of creativity and a dash of code, keeping it fresh is an adventure in itself! It’s not about a one-time design, but a continuous journey of updates. With every new project, the site evolves, mirroring my growth as a designer and coder. React, my trusty sidekick, makes this process a breeze.<br></br><br></br>But it’s not just about me, it’s about you, the visitor. Your interactions, your feedback, they shape the site. It’s a dance, really. A dance of design, code, and user experience, keeping the site alive and kicking!
            </p>
          </div>
        </div>
      <div className="sec2-item" id="aboutme">
          <div className="aboutme-section abt1">
            <p className="aboutme-section-title">NOT JUST A PROGRAMMER</p>
            <p className="aboutme-section-description">You probably know my name by now, but if you don’t, you should pay more attention… It’s Jens!<br/><br/>
I love programming and designing, but I also have a lot of other interests. I love to learn and explore new things, but there are a few things that really define who I am. <br/><br/>So, start scrolling to see a pretty cool animation scheme covering these things, if I do say so myself.</p>
            <img src={aboutMe1} alt="portrait" className="aboutme-photo aboutme-section-aboutme1"/>
            <p className="aboutme-section-photo-description aboutme-section-photo-description-aboutme1">Me in Venice, Italy.</p>
          </div>
          <div className="aboutme-section abt2">
            <p className="aboutme-section-title">SPORTS</p>
            <p className="aboutme-section-description">
            Working out and playing sports is a central part of who I am. I regularly go to the gym and I love playing tennis. On top I love to go for hikes, explore and push myself to the next level.
            <br/><br/>In addition to physical sports, I also enjoy playing chess  and have achieved an online rapid rating of 2600. I am determined to continue improving my skills and hope to even achieve a title in the near future. 
            <br/><br/>To achieve such, I take great care in opening repertoire and training.
            </p>
            <img src={aboutMe2} alt="portrait" className="aboutme-photo aboutme-section-aboutme2"/>
            <p className="aboutme-section-photo-description aboutme-section-photo-description-aboutme2">At a tournament.</p>
            <img src={aboutMe3} alt="portrait" className="aboutme-photo aboutme-section-aboutme3"/>
            <p className="aboutme-section-photo-description aboutme-section-photo-description-aboutme3">Hiking on holiday.</p>
            <img src={aboutMe4} alt="portrait" className="aboutme-photo aboutme-section-aboutme4"/>
            <p className="aboutme-section-photo-description aboutme-section-photo-description-aboutme4">Home club.</p>
          </div>
          <div className="aboutme-section abt3">
            <p className="aboutme-section-title">MUSIC</p>
            <p className="aboutme-section-description smaller-description">
            I honestly don’t even know where to start. Music is an integral part of who I am. As my brother once said: “It’s not a question of whether you are listening to music, but rather, which genre you’ve chosen for the day.”
            <br/><br/>From wanting to become a DJ at 10 to learning how to produce music to learning how to play the piano and sing. One could say I’ve done quite a bit of exploring.
            <br/><br/>At the moment I still produce from time to time, as I find it a relaxing activity. And when I do so I usually stick to lo-fi as I love creating complex melodies and new eargasmic sounds.
            <br/><br/>Next to that you’ll find me listening and singing along to everything from U2 to James Bay, and maybe you’ll even find me “hakken” to hardcore, or listening to rap, techno, house, classical, indie/alt-rock, raggae, even mariachi!
            </p>
            <img src={aboutMe5} alt="portrait" className="aboutme-photo aboutme-section-aboutme5"/>
            <p className="aboutme-section-photo-description aboutme-section-photo-description-aboutme5">Me performing back in 2015.</p>
          </div>
          <div className="aboutme-section abt4">
          <p className="aboutme-section-title">COOKING</p>
            <p className="aboutme-section-description">
            One thing is for sure, I LIKE food.
            <br/><br/>I started to get into cooking because I was merely hungry, however that simple hunger evolved into helping in a kitchen over the past summer ( after having to wash the dishes for way too long ) and a passion for putting a good plate of food on the table.
            <br/><br/>I’m far from an expert, however my eagerness to learn ( and maybe my hunger as well) makes me return on and on.
            <br/><br/>Despite my love for food, I am not planning on pursuing any sort of career in this industry, I perceive it as a hobby.
            </p>
            <img src={aboutMe6} alt="portrait" className="aboutme-photo aboutme-section-aboutme6"/>
            <p className="aboutme-section-photo-description aboutme-section-photo-description-aboutme6">Tulum in Noordwijk.</p>
          </div>
          <div className="aboutme-section abt5">
            <p className="aboutme-section-title2 aboutme-photo">It's about time<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we get in touch.</p>
            <div className="aboutme-section-circle circle-1 aboutme-photo"></div>
            <div className="aboutme-section-circle circle-2 aboutme-photo"></div>
            <div className="aboutme-section-circle circle-3 aboutme-photo"></div>
            <div className="aboutme-section-line-1 aboutme-photo"></div>
            <img src={contactBackground} alt="squares" className="aboutme-section-contactbackground aboutme-photo"/>
            <p className="aboutme-section-abt5-or aboutme-photo">OR</p>
            <div className="aboutme-section-line-2 aboutme-photo"></div>
            <div className="aboutme-section-abt5-container abt5-container-one aboutme-photo-description send-email">
              <img className="abt5-container-one-email" src={email} alt="email-icon" />
            </div>
            <div className="aboutme-section-abt5-container abt5-container-two aboutme-photo call-number" href="tel:+310628968296">
              <img className="abt5-container-two-calling" src={calling} alt="calling-icon" />
            </div>
            <div className="aboutme-section-abt5-container abt5-container-three hoverable clickable open-linkedin aboutme-photo">
              <img className="abt5-container-three-linkedin" src={Linkedin} alt="linkedin-icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="back-to-home hoverable">
        <p id="back-to-home-txt">HOME</p>
      </div>

      <div className="cursor">
      <div className="cursor__ball cursor__ball--big ">
        <svg height="30" width="30" className="bigCircle">
          <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
        </svg>
      </div>
      
      <div className="cursor__ball cursor__ball--small">
        <svg height="10" width="10" className="smallCircle">
          <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
        </svg>
      </div>
    </div>
    </div>


  );
}

export default App;