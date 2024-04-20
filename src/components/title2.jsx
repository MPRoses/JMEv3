import $ from 'jquery';
import gsap from 'gsap';
import './title.css';

function Title2() {
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

        $(window).off("scroll");

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

            if (($(window).scrollTop() / window.innerHeight) > 0.6) {
                setTimeout(() => {
                    $(".project-row").eq(0).css("opacity", "1");
                    setTimeout(() => {
                        $(".project-row").eq(1).css("opacity", "1");
                        setTimeout(() => {
                            $(".project-row").eq(2).css("opacity", "1");
                            setTimeout(() => {
                                $(".project-row").eq(3).css("opacity", "1");
                            }, 150);
                        }, 150);
                    }, 150);
                }, 150);
            } else {
                $(".project-row").css("opacity", "0");
            }
        });
    })

    return(
        <div className="title-container title-container2">
            <div></div>
            <div></div>
            <p className="title-main">SKILLS ○ SKILLS ○ SKILLS ○ SKILLS ○ SKILLS ○ SKILLS ○ SKILLS ○</p>
            <p className="title-topfade">SKILLS ○ SKILLS ○ SKILLS ○ SKILLS ○ SKILLS ○ SKILLS ○</p>
            <p className="title-bottomfade">SKILLS ○ SKILLS ○ SKILLS ○ SKILLS ○ SKILLS ○ SKILLS ○</p>
        </div>
    );
}

export default Title2;