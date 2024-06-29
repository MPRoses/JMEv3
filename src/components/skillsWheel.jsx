import './skillswheel.css';
import { useEffect} from 'react';
import $ from 'jquery';
import { useMediaQuery } from 'react-responsive';


function SkillsWheel() {

  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });

  const isTabletTitle = useMediaQuery({ query: '(max-width: 1400px)' });

  useEffect(() => {
    const skillsTitles = ["Welcome!", "Front-end Design", "Back-end Development", "React", "Other Skills", "Git and Scrum", "Other languages", "Resume"];
    const skillsDescriptions = ["Hello there! I’m excited to welcome you to my website! My name is Jens and I’m thrilled to share with you who I am, what I specialize in, and what I’ve worked on in the past.<br></br>As a computer scientist and designer, I’m passionate about creating innovative solutions that are both functional and beautiful. You’ll find that my work is inspired by my love of technology and design.<br></br>Before you start scrolling I'd like to note that there is a lot of text here on this site. Why? Because I didn't want you to just get to know my work, I also wanted you to get to know me. So, without further ado, let’s embark on a new journey together!&nbsp;&nbsp;🚀", "Front-end design is the process of designing and building the user interface for a website or application. It involves creating HTML, CSS, and presentational JavaScript code that make up a user interface. It also requires for coordination with user experience (UX) and graphic design efforts, ensuring the interface matches the target demographic and the product. Front-end design is a collaborative and human-centered practice that collects user feedback in each phase.<br/><br/>As a developer with a strong skill set in front-end design, I focus on creativity and originality to make my work stand out. My creativity is not limited to just design, but extends to my ability to solve problems and find innovative solutions. <br/><br/>Overall, my skill in front-end design is a testament to my passion for creativity, originality, and ability to think outside the box. My designs are visually stunning and functional, and I am always looking for new ways to push the boundaries of what is possible. 😎", "Back-end development refers to the development of server-side logic that powers websites and apps from behind the scenes. It includes all the code needed to build out the database, server, and application.<br/><br/>My experience in back-end development lies in that I’ve worked with databases using Node.js and SQL to communicate and securely hash and store account-related data. I understand the importance of security when it comes to user data, which is why I take great care in ensuring that all data is properly encrypted and stored. I also understand the importance of scalability and strive to create back-end systems that can handle large amounts of traffic without slowing down.<br/> <br/> Altogether, while I may not have mastered back-end development yet, I’m excited about the possibilities it offers and am always looking for new ways to improve my skills. 😊", "With multiple years of experience in the field, I have developed a strong skillset in using React. React is a JavaScript library for building user interfaces, developed and maintained by Facebook. It is widely used in the industry and is known for its efficiency and flexibility.<br/><br/>React allows me to build reusable user interface (UI) components and manage the state of their applications in a declarative way. This means that I can focus on describing what the UI should look like at any given moment, and React takes care of updating the UI when the underlying data changes. One of the key features of React is its virtual DOM (Document Object Model), which allows it to efficiently update the UI by only changing the parts that need to be updated. This results in fast and smooth updates, even for complex applications. <br/><br/> My experience with React has allowed me to develop a deep understanding of its inner workings and best practices, from which I strive to create high-quality, efficient, and user-friendly solutions.", "In addition to my technical expertise, I have a strong foundation in mathematics which allows me to approach complex problems with a logical and analytical mindset.<br/><br/> Language wise my proficiency in English is at a C1 level, meaning I am able to effectively communicate and collaborate with colleagues and clients from all over the world. And as a native Dutch speaker, I am also able to bring my language skills to the table when working with Dutch-speaking clients or team members.<br/><br/> In addition to my existing skills and experiences, I am also committed to continuous learning and development. At the moment I am pursuing a degree in Computer Science at the University of Leiden.<br/><br/> These additional skills and experiences have helped me to become a well-rounded and versatile developer, capable of tackling a wide range of challenges and delivering high-quality results.", " These two tools have been the foundation of all my recent projects and have played a crucial role in their success. Git is a powerful version control system that allows me to keep track of changes to my code and collaborate with other developers. Scrum, on the other hand, is an agile framework that helps me manage and organize my work in an efficient and effective manner.<br/><br/>One of the reasons why Scrum is so important is because it allows for constant feedback and improvement. By breaking down work into small, manageable chunks called sprints, I am able to regularly review my progress and make any necessary adjustments. This helps me stay on track and ensures that I am always working towards the best possible end result.<br/><br/>Another key benefit of Scrum is its emphasis on collaboration and communication. By working closely with a team and regularly checking in with stakeholders, I am able to ensure that everyone is on the same page and that we are all working towards a common goal. This helps to prevent misunderstandings and ensures that everyone is fully invested in the success of the project.<br/><br/>To conclude, my experience with Git and Scrum has been incredibly valuable. These tools have helped me to work more efficiently, collaborate more effectively, and ultimately deliver better results. I believe that any project can benefit from the use of these tools, and I would highly recommend them to anyone looking to improve their workflow and achieve better outcomes.", " While my primary focus for the past couple years has been on web/app development, I also have some experience with other languages. For example, I have experimented with VBA and C++ in class, I have created tiny games in Java and also I have experimented with data analysis in Python. In the upcoming year I'll be working a lot more with these technologies because classes in my University require so.<br/><br/> Although I don’t have much experience with languages like Rust or PHP, I am confident that I will be able to pick it up easily when required. This is because their base components are similar to other programming languages that I am already familiar with. On top, I'll be improving in all of these languages ( and more!) in the upcoming years during my University studies.<br/><br/>In short, my diverse skill set and willingness to learn new languages make me a versatile and valuable asset to any team. Whether it’s building complex web applications or experimenting with new technologies, I am always eager to expand my knowledge and take on new challenges.", "If you'd like to review my resume, please head over to my linkedin: linkedin.com/in/jensvandersloot/, where you'll be able to find it or check the last slide in the about me section for other ways to reach out to me.<br></br>As you explore my portfolio, you'll notice a focus on formal education. But the true adventure awaits in the next chapter: my Projects section. Dive into a meticulously documented tapestry of accomplishments and undertakings, reflecting my passion for creativity, innovation, and problem-solving."];
    const skillsSizingTitles = [0, 3, 4.5, 2, 1, 2.5, 3.5, 0];
    const skillsSizingDescriptions = [0, 0, 3, 0, 0, -3, 0, 1];

    let previousScroll = 0;
    let sectionStart = (1.2 * (window.innerHeight));
    let currentItem = 0;
    let previousItem = -1;
    var running = 0;

    function fadeText(reversed) {
      var amount = 40;
      if (reversed) {
        amount = amount*-1;
      }

      // set opacity to 0
      $("#sec2-skills-title, #sec2-skills-description").css("opacity", "0");
      $("#sec2-skills-title, #sec2-skills-description").css("transform", `translateY(${amount}px)`);

      setTimeout(() => {
        $("#sec2-skills-title, #sec2-skills-description").css("transition", "opacity 0s ease-in-out, transform 0s ease-in-out");
        setTimeout(() => {
          $("#sec2-skills-title, #sec2-skills-description").css("transform", `translateY(${-amount}px)`);
          setTimeout(() => {
            $("#sec2-skills-title, #sec2-skills-description").css("transition", "opacity .43s ease-in-out, transform .43s ease-in-out");
            setTimeout(() => {
              $("#sec2-skills-title, #sec2-skills-description").css("transform", `translateY(0)`);
              $("#sec2-skills-title, #sec2-skills-description").css("opacity", "1");
            }, 10);
          }, 10);
        }, 10);
      }, 430);
    }

    function updateItems() {
      if (currentItem + previousItem === 0) {
        $("#sec2-skills-title, #sec2-skills-description").css("opacity", "0");
      }
      //console.log("currentite " + currentItem + " previ " + previousItem);


      var rotation = 90 + 43 * (($(window).scrollTop() - parseInt($(".project-container").css("height")) - sectionStart) / 300)
      $("#skillsWheel").css("transform", `rotate(${rotation}deg)`);

      if (running) {
        return 1;
      }

      currentItem = Math.floor(($(window).scrollTop() - parseInt($(".project-container").css("height")) - sectionStart) / 300);

      if (currentItem < -1 || currentItem > 7) {
        return 0;
      }

    


      if (currentItem !== previousItem) {
        
      setTimeout(() => {
        // adjust size
        $("#sec2-skills-title").css("font-size", `calc(21.3vh - ${skillsSizingTitles[currentItem] * 2.5}vh)`);
        $("#sec2-skills-description").css("top", `calc(32vh + 6.25vh - ${skillsSizingTitles[currentItem] * 2.5}vh)`);
        $("#sec2-skills-description").css("font-size", `calc(2vh + ${skillsSizingDescriptions[currentItem] * .11}vh)`);
        $("#sec2-skills-description").css("line-height", `calc(4vh + ${skillsSizingDescriptions[currentItem] * .175}vh)`);
        // change text
        $("#sec2-skills-title").html(`${skillsTitles[currentItem]}`);
        $("#sec2-skills-description").html(`${skillsDescriptions[currentItem]}`);
      }, 450);
          // scrolling down
      if (previousScroll < $(window).scrollTop()) {
            // animate
            fadeText(0);
          } // scrolling up
          else if (previousScroll > $(window).scrollTop()) { 
            // animate
            fadeText(1);
          }

        }
        running = 1;
        setTimeout(() => {
          running = 0;
        }, 5);

        previousItem = currentItem;

      return 1;
    }

    


    //console.log(parseInt($(".project-container").css("height")));
    $(window).on("scroll", () => {
      $(".title-container2").css("top", `calc(117.5vh + ${$(".project-container").css("height")})`);
      if ((($(window).scrollTop() - parseInt($(".project-container").css("height"))) / window.innerHeight) > 1.2) {
        if ($(".navbar div").css("background-color") === "rgb(0, 0, 0)") {
        }
        if (!running) {
          if (!updateItems()) {
            if ($(".sec2-item").css("opacity") === "1") {
              $(".sec2-item").css("opacity", "0");
              $(".sec2-item").css("pointer-events: none");
            }
          } else {
            if ($(".sec2-item").css("opacity") === "0") {
              $(".sec2-item").css("opacity", "1");
              $(".sec2-item").css("pointer-events: all");
            }
          }
        }
      } else {
        if (currentItem + previousItem === 0) {
          previousItem = -1;
          currentItem = 0;
        }
        if ($(".sec2-item").css("opacity") === "1") {
          $(".sec2-item").css("opacity", "0");
          $(".sec2-item").css("pointer-events: none");
        }
        if ($(".navbar div").css("background-color") === "rgb(255, 255, 255)") {
        }
      }

      previousScroll = $(window).scrollTop();
    })

  }, []);

  return (
    <div className="sec2-item" id="skills">
        <img src="https://i.ibb.co/RCv4SqS/Shape.png" alt="skillsWheel" id="skillsWheel" />
        <img src="https://i.ibb.co/kH5YzJV/Arrow.png" alt="wheelPointer" id="wheelPointer" />
        <p id="sec2-skills-title">Welcome!</p>
        <p id="sec2-skills-description">Hello there! I’m excited to welcome you to my website! My name is Jens and I’m thrilled to share with you who I am, what I specialize in, and what I’ve worked on in the past.<br></br><br></br>As a computer scientist and designer, I’m passionate about creating innovative solutions that are both functional and beautiful. You’ll find that my work is inspired by my love of technology and design.<br></br><br></br>Before you start scrolling I'd like to note that there is a lot of text here on this site. Why? Because I didn't want you to just get to know my work, I also wanted you to get to know me. So, without further ado, let’s embark on a new journey together!&nbsp;&nbsp;🚀</p>
    </div>
  );
}

export default SkillsWheel;