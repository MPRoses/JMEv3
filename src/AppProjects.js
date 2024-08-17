import $ from 'jquery';
import './App.css';
import './AppProjects.css';
import {
    useEffect,
    React
} from 'react';
import animejs from 'animejs';
import Tape from './components/tape.jsx';
import Bg from './components/bg.jsx';
import Cursor from './components/cursor.jsx';
import Menu from './components/menu.jsx';
import ProjectPage from './components/Connectr.jsx';

function App() {

  $(() => {
    $(".black-bars").css("transition", "height 0s");
    $(".black-bars").css("height", "600vh");

    setTimeout(() => {
      $(".black-bars").css("transition", "height 1.78s ease-in-out");
      $(".black-bars").css("height", "0");
    }, 300);

  })

  return (
    <div className="App" id="App">

      <div className="projects-container">


      </div>

    <Cursor />
    <ProjectPage />
      <div id="scroll-container">
        <div className="black-bars">
          <div className="bars-b1"></div>
          <div className="bars-b1 b1-left"></div>
          <div className="bars-b1"></div>
        </div>

      </div>
      </div>
  );

}

export default App;