import './cursor.css';
import TweenMax from 'gsap';
import $ from 'jquery';
import { useEffect, React} from 'react';

function Cursor() {
  useEffect(() => {
    $(() => {
      $(".cursor").css("opacity", "1");
      const $bigBall = $('.cursor__ball--big');
      const $smallBall = $('.cursor__ball--small');
      const $hoverables = $('.hoverable');
  
      TweenMax.killTweensOf($bigBall);
      TweenMax.killTweensOf($smallBall);
  
      $(document).on('mousemove', onMouseMove);
  
      $hoverables.each(function() {
        $(this).off();
        $(this).on('mouseenter', onMouseHover);
        $(this).on('mouseleave', onMouseHoverOut);
      });
  
      var xMousePos = 0;
      var yMousePos = 0;
      var lastScrolledLeft = 0;
      var lastScrolledTop = 0;
  
      $(document).on("mousemove", (e) => {
        captureMousePosition(e);
      })  

      // Add the scroll event listener inside useEffect
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
  
      return () => {
        $(document).off('mousemove', onMouseMove);
        $hoverables.off('mouseenter', onMouseHover);
        $hoverables.off('mouseleave', onMouseHoverOut);
        $(window).off('scroll'); // Remove the scroll event listener when the component unmounts
      };
    })
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
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
  );
}

export default Cursor;