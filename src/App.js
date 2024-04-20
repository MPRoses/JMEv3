import $ from 'jquery';
import './App.css';
import { useEffect } from 'react';

import Tape from './components/tape.jsx';
import Bg from './components/bg.jsx';
import Cursor from './components/cursor.jsx';
import Menu from './components/menu.jsx';
import Title from './components/title.jsx';
import Projects from './components/projects.jsx';

function App() {
  useEffect(() => {
    document.title = "Jens van der Sloot"
  }, []);

  // onload
  $(() => {
    $(window).scrollTop(0);
    // moving of Tape and Bg/*
    let constrain = 50;
    let ex1Layer = document.getElementById("tape-movement");
    let ex2Layer = document.querySelector(".background");
    let isEnabled = true;
    var lastKnownPos = [0,0];

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
        let position = xy.concat([ex1Layer]);
        window.requestAnimationFrame(function () {
          transformElement(ex1Layer, position);
          transformElement(ex2Layer, position);
        });
      }
    }

    $(".background").on("mousemove", function(e) {
      lastKnownPos = [e.clientX, e.clientY];
      transformMain(lastKnownPos);
    })
    $(document).on("scroll", function() {
      transformMain(lastKnownPos);
    })

  });

  return (
    <div className="App" id="App">
      <Bg />
      <div id="scroll-container">

      <Tape />

      <div className="black-bars">
        <div className="bars-b1"></div>
        <div className="bars-b1 b1-left"></div>
        <div className="bars-b1"></div>
      </div>

      <Cursor />
      <Title />
      <Projects />



      <Menu />
      </div>
    </div>
  );
}

export default App;