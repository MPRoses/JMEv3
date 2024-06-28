import './abtme.css';
import $ from 'jquery';
import { useEffect, React} from 'react';

import aboutMe1 from './../img/aboutMe1.png';
import aboutMe2 from './../img/aboutMe2.png';
import aboutMe3 from './../img/aboutMe3.png';
import aboutMe4 from './../img/aboutMe4.png';
import aboutMe5 from './../img/aboutMe5.png';
import aboutMe6 from './../img/aboutMe6.png';
import Linkedin from './../img/Linkedin.png';
import email from './../img/email.gif';
import calling from './../img/calling.gif';
import contactBackground from './../img/contactBackground.png';

function Abtme() {

    useEffect(() => {
        let previousScrollTop = 0;
        let abtPositions = [];
        
        $(window).on("load", () => {
            // Calculate the scroll position of each .abt div after the page has loaded
            for (let i = 1; i <= 5; i++) {
                abtPositions[i] = $(".abt" + i).offset().top;
            }
        });
        

        var isAnimationActive = 0;
        // Calculate the interval at which each .abt div should appear
        const interval = (.9 - 0.55) / 5;

        $(window).on("scroll", () => {
            
            if (isAnimationActive === 1) {
                return;
            }

            const scrollTop = $(window).scrollTop();
            const windowHeight = $(window).innerHeight();
            const totalHeight = $(document).height();
            const scrollRatio = scrollTop / totalHeight;
        
            // Determine scroll direction
            let scrollDirection;
            console.log("SCROLLTOP " + scrollTop);
            console.log("PREVIOUSSCROLLTOP " + previousScrollTop);
            if (scrollTop > previousScrollTop) {
                console.log("Scrolling down");
                scrollDirection = "down";
            } else {
                console.log("Scrolling up");
                scrollDirection = "up";
            }
        
            console.log(scrollRatio);

            if (scrollRatio > 0.55) {

                // disable scrolling:
                //$('body, #root, html').addClass("stopScrolling");

                isAnimationActive = 1;
                setTimeout(() => {
                    isAnimationActive = 0;
                    $('body, #root, html').removeClass("stopScrolling");
                }, 1000);
                
                $("#aboutme").css({ 
                    "opacity": "1",
                    "pointer-events": "all"
                });            

                const interval = (1 - 0.55) / 5;
                var current = 1;

                for (let i = 1; i <= 5; i++) {
                    if (scrollRatio > 0.55 + interval * (i - 1) && scrollRatio < 0.55 + interval * i) {
                        // only true for 1 i
                        $(".abt" + i).css({
                            "opacity": "1",
                            "transform": "translateY(0)"
                        });
                        current = i;
                    } else if (scrollRatio < 0.55 + interval * (i - 1)) {
                        $(".abt" + i).css({
                            "opacity": "0",
                            "transform": "translateY(1000px)"
                        });
                    } else {
                        $(".abt" + i).css({
                            "opacity": "0",
                            "transform": "translateY(-1000px)"
                        });
                    }
                } 


                console.log("current" + current);
                if (scrollDirection === "down") {
                    $(window).scrollTop((0.55 + interval * (current + 1)) * totalHeight);
                } else {
                    if (current !== 1) {
                        $(window).scrollTop((0.55 + interval * (current - 1)) * totalHeight);
                    } else {
                        $(window).scrollTop(.55 * totalHeight);
                    }

                }

            } else {
                $("#aboutme").css({
                    "opacity": "0",
                    "pointer-events": "none"
                });
        
                // Reset the opacity and position of each .abt div
                for (let i = 1; i <= 5; i++) {
                    $(".abt" + i).css({
                        "opacity": "0",
                        "transform": "translateY(100px)"
                    });
                }
            }
        
            /*if (scrollRatio > 0.55) {

                //$('body, #root, html').addClass("stopScrolling");

                // disallow scrolling in case of off
                isAnimationActive = 1;
                setTimeout(() => {
                    isAnimationActive = 0;
                    //$('body, #root, html').removeClass("stopScrolling");
                }, 1000);

                console.log("reached");
                $("#aboutme").css({ 
                    "opacity": "1",
                    "pointer-events": "all"
                });
                
                var current = 1;
        
                for (let i = 1; i <= 5; i++) {
                    if (scrollRatio > 0.55 + interval * (i - 1) && scrollRatio < 0.55 + interval * i) {
                        $(".abt" + i).css({
                            "opacity": "1",
                            "transform": "translateY(0)"
                        });

                        console.log("reached")

                        // Log the next .abt div based on the scroll direction
                        if (scrollDirection === "down" && i <= 5) {
                            console.log("Next is .abt" + (i + 1));
                            current = (i+1)
                        } else if (scrollDirection === "up" && i > 1) {
                            console.log("Next is .abt" + (i - 1)); 
                            current = (i-1);
                        }



                    } else {
                        $(".abt" + i).css({
                            "opacity": "0",
                            "transform": "translateY(-1000px)"
                        });
                    }
                }

                console.log("current " + current);
                //$(window).scrollTop((0.55 + interval * current) * totalHeight);
            } else {
                $("#aboutme").css({
                    "opacity": "0",
                    "pointer-events": "none"
                });
        
                // Reset the opacity and position of each .abt div
                for (let i = 1; i <= 5; i++) {
                    $(".abt" + i).css({
                        "opacity": "0",
                        "transform": "translateY(100px)"
                    });
                }
            }
            setTimeout(() => {
                //previousScrollTop = scrollTop;
            }, 3000);
            previousScrollTop = scrollTop;

            */
            previousScrollTop = scrollTop;
        });
        
        

        

        
        
        
        
        
        


    }, []);


    return (
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
    );
}

export default Abtme;