import React, { useEffect } from 'react';
import './Connectr.css';
import anime from 'animejs';
import $ from 'jquery';
const ProjectPage = () => {
    useEffect(() => {
        // Apply hover animation to each letter
        document.querySelectorAll('.letter').forEach((letter) => {
            letter.addEventListener('mouseenter', (e) => {
                const letters = document.querySelectorAll('.letter');

                letters.forEach(letter => {
                    anime({
                        targets: letter,
                        opacity: [1, 0.85],
                        translateX: anime.random(-5, 5),  // Random movement on the X-axis
                        translateY: anime.random(-5, 5),  // Random movement on the Y-axis
                        scale: 0.67,  // Enlarge the letter on hover
                        rotate: anime.random(-15, 15),  // Slight rotation
                        easing: 'spring(1, 80, 10, 0)',
                        duration: 800,
                    });
                });
                anime({
                    targets: e.target,
                    opacity: 1,
                    translateX: anime.random(-30, 30),  // Random movement on the X-axis
                    translateY: anime.random(-30, 30),  // Random movement on the Y-axis
                    scale: 1.5,  // Enlarge the letter on hover
                    rotate: anime.random(-15, 15),  // Slight rotation
                    easing: 'spring(1, 80, 10, 0)',
                    duration: 800,
                });
            });

            letter.addEventListener('mouseleave', () => {
                anime({
                    targets: '.letter',
                    opacity: 1,
                    translateX: 0,
                    translateY: 0,
                    scale: 1,  // Return to normal size
                    rotate: 0,  // Return to original position
                    easing: 'spring(1, 80, 10, 0)',
                    duration: 1000,
                });
            });
            $(".title").css("letter-spacing", "0");
        });

        let isScaledUp = false;

        $(".exit").on("mouseenter", (e) => {
            if ($(".circle").length > 0) return;
            const target = e.target;
            const rect = target.getBoundingClientRect();
            const circle = $(`<div class="circle" style="left: ${e.clientX - rect.left}px; top: ${e.clientY - rect.top}px"></div>`);
            circle.appendTo('.exit');

            setTimeout(() => {
                circle.css("transform", "scale(100)");
                isScaledUp = true;
            }, 50);

            $(".exit div:nth-child(1), .exit div:nth-child(2)").css({
                "background-color": "black",
                "transform": "scale(1.5) rotate(15deg)"
            });

            $(".bigCircle circle").css("opacity", "0.4");
            $(".bigCircle").css({
                "transform": "scale(3)",
                "border": "2px solid rgb(31 149 248 / 0%)"
            });
        }).on("mouseleave", (e) => {
            if (!isScaledUp) return; // Wait until the circle has scaled up

            const parentRect = $(e.target).closest('.exit')[0].getBoundingClientRect();
            const exitX = e.clientX - parentRect.left;
            const exitY = e.clientY - parentRect.top;

            $(".circle").css({
                "left": `${exitX}px`,
                "top": `${exitY}px`,
                "transform": "scale(0)"
            });

            $(".exit div:nth-child(1), .exit div:nth-child(2)").css({
                "background-color": "#fbf8f3",
                "transform": "scale(1) rotate(0deg)"
            });

            setTimeout(() => {
                $(".circle").remove();
                isScaledUp = false; // Reset the flag
            }, 750); // Adjust this timeout to match the transition duration

            $(".bigCircle circle").css("opacity", "1");
            $(".bigCircle").css({
                "transform": "scale(1)",
                "border": "2px solid #1F95F8"
            });
        });



    }, []);

    // Function to split the word into spans
    const splitText = (text) => {
        return text.split('').map((letter, index) => (
            <span key={index} className="letter">{letter}</span>
        ));
    };

    return (
        <div className="project-page">
            <div className="title">
                {splitText("portfolio")}
            </div>
            <div className="separator"></div>
            <div className="lines">
                {Array.from({ length: 25}).map((_) => (
                    <div></div>
                ))}
            </div>

            <div className="exit">
                <div></div>
                <div></div>
                <div></div>
            </div>

        </div>
    );
};

export default ProjectPage;