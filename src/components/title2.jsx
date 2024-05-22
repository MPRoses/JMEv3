import $ from 'jquery';
import gsap from 'gsap';
import './title.css';
import { useEffect} from 'react';

function Title2() {

    useEffect(() => {

        const normalSpeed = 120;
        let tlMain = gsap.timeline({
        repeat: -1, 
        defaults: {
            duration: 30, 
            ease: "none"
        }
        });

        let tlTop = gsap.timeline({
        repeat: -1,
        defaults: {
            duration: normalSpeed, 
            ease: "none" 
        }
        });

        let tlBottom = gsap.timeline({
        repeat: -1, 
        defaults: {
            duration: normalSpeed, 
            ease: "none"
        }
        });

        tlMain.fromTo(".title-main", 
        { x: "-2690px" },
        { x: "0", 
            onStart: function() {
            gsap.set(".title-main", { x: "-2690px" });
            }
        }
        );

        tlTop.fromTo(".title-topfade", 
        { x: "0" },
        { x: "-2690px",
            onStart: function() {
            gsap.set(".title-topfade", { x: "0" });
            }
        }
        );

        tlBottom.fromTo(".title-bottomfade", 
        { x: "-2690px" }, 
        { x: "0", 
            onStart: function() {
            gsap.set(".title-bottomfade", { x: "-2690px" });
            }
        }
        );
    

        $(window).off("scroll");

        $(window).on("scroll", () => {
            gsap.to([tlMain, tlTop, tlBottom], { timeScale: 3, duration: 0.15 });
            setTimeout(function() {
                gsap.to([tlMain, tlTop, tlBottom], { timeScale: 1, duration: 0.15 });
            }, 300);

            if (($(window).scrollTop() / window.innerHeight) > 0.1) {
                $(".title-container").css("opacity", "1");
            } else {
                $(".title-container").css("opacity", "0");
            }

            if (($(window).scrollTop() / window.innerHeight) <= 0.4) {
                $(".project-row").css("opacity", "0");
            } else if (($(window).scrollTop() / window.innerHeight) <= 0.7) {
                $(".project-row").eq(0).css("opacity", "1");
                $(".project-row").eq(1).css("opacity", "0");
                $(".project-row").eq(2).css("opacity", "0");
                $(".project-row").eq(3).css("opacity", "0");
            } else if (($(window).scrollTop() / window.innerHeight) <= 1.4) {
                $(".project-row").eq(0).css("opacity", "1");
                $(".project-row").eq(1).css("opacity", "1");
                $(".project-row").eq(2).css("opacity", "1");
                $(".project-row").eq(3).css("opacity", "0");
            }  else if (($(window).scrollTop() / window.innerHeight) <= 1.4) {
                $(".project-row").eq(0).css("opacity", "1");
                $(".project-row").eq(1).css("opacity", "1");
                $(".project-row").eq(2).css("opacity", "1");
                $(".project-row").eq(3).css("opacity", "0");
            }  else if (($(window).scrollTop() / window.innerHeight) <= 2) {
                $(".project-row").eq(0).css("opacity", "1");
                $(".project-row").eq(1).css("opacity", "1");
                $(".project-row").eq(2).css("opacity", "1");
                $(".project-row").eq(3).css("opacity", "1");
                $(".title-container2").attr("style", "opacity: 0 !important");
            }  else if (($(window).scrollTop() / window.innerHeight) <= 2.5) {
                $(".title-container2").attr("style", "opacity: 1 !important");
                $(".project-row").eq(0).css("opacity", "1");
                $(".project-row").eq(1).css("opacity", "1");
                $(".project-row").eq(2).css("opacity", "1");
                $(".project-row").eq(3).css("opacity", "1");
            } else {
                $(".title-container2").attr("style", "opacity: 1 !important");
                $(".project-row").eq(0).css("opacity", "1");
                $(".project-row").eq(1).css("opacity", "1");
                $(".project-row").eq(2).css("opacity", "1");
                $(".project-row").eq(3).css("opacity", "1");
            }
        });
    }, []);

    return(
        <div className="title-container title-container2">
            <div></div>
            <div></div>
            <p className="title-main">SKILLS ○ SKILLS ○ SKILLS ○ SKILLS ○ SKILLS ○ SKILLS ○ SKILLS ○</p>
            <p className="title-topfade">SKILLS ○ SKILLS ○ SKILLS ○ SKILLS ○ SKILLS ○ SKILLS ○</p>
            <p className="title-bottomfade">SKILLS ○ SKILLS ○ SKILLS ○ SKILLS ○ SKILLS ○ SKILLS ○</p>
            <p className="title-reenter" style={{ opacity: sessionStorage.getItem("skillsVisited") === "1" ? 0.3 : 0 }}>click title to re-enter</p>
        </div>
    );
}

export default Title2;