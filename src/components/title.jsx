import $ from 'jquery';
import gsap from 'gsap';
import './title.css';

function Title() {
    $(() => {

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

        $(window).on("scroll", function() {
            gsap.to([tlMain, tlTop, tlBottom], { timeScale: 3, duration: 0.15 });
            setTimeout(function() {
                gsap.to([tlMain, tlTop, tlBottom], { timeScale: 1, duration: 0.15 });
            }, 300);

            if (($(window).scrollTop() / window.innerHeight) > 0.1) {
                $(".title-container").css("opacity", "1");
            } else {
                $(".title-container").css("opacity", "0");
            }
        });
    })

    return(
        <div className="title-container">
            <div></div>
            <div></div>
            <p className="title-main">PROJECTS ○ PROJECTS ○ PROJECTS ○ PROJECTS ○ PROJECTS ○ PROJECTS ○|</p>
            <p className="title-topfade">PROJECTS ○ PROJECTS ○ PROJECTS ○ PROJECTS ○ PROJECTS ○ PROJECTS ○</p>
            <p className="title-bottomfade">PROJECTS ○ PROJECTS ○ PROJECTS ○ PROJECTS ○ PROJECTS ○ PROJECTS ○</p>
        </div>
    );
}

export default Title;