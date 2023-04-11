import About from "../../components/about/About";
import Contacts from "../../components/contact/Contacts";
import CopyRight from "../../components/copyright/CopyRight";
import Events from "../../components/events/Events";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Headers";
import Team from "../../components/team/team";
import Sponsors from "../../components/sponsors/sponsors";
import "./Home.css";
import React from "react";
const Home = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    const spiralAnimationScript = document.createElement("script");
    spiralAnimationScript.src = "/static/js/spiral.js";
    document.body.appendChild(spiralAnimationScript);

    document.querySelectorAll('.effect-letter').forEach(button => {

      let div = document.createElement('div'),
        letters = button.textContent.trim().split('');

      function elements(letter, index, array) {

        let element = document.createElement('span'),
          part = (index >= array.length / 2) ? -1 : 1,
          position = (index >= array.length / 2) ? array.length / 2 - index + (array.length / 2 - 1) : index,
          move = position / (array.length / 2),
          rotate = 1 - move;

        element.innerHTML = !letter.trim() ? '&nbsp;' : letter;
        element.style.setProperty('--move', move);
        element.style.setProperty('--rotate', rotate);
        element.style.setProperty('--part', part);

        div.appendChild(element);

      }

      letters.forEach(elements);

      button.innerHTML = div.outerHTML;

      button.addEventListener('mouseenter', e => {
        if (!button.classList.contains('out')) {
          button.classList.add('in');
        }
      });

      button.addEventListener('mouseleave', e => {
        if (button.classList.contains('in')) {
          button.classList.add('out');
          setTimeout(() => button.classList.remove('in', 'out'), 950);
        }
      });

    });
    return () => {
      document.body.removeChild(script);
      // document.body.removeChild(spiralAnimationScript);
    };
  }, []);
  return (
    <div className="body-wrapper">

      <Navbar />
      <Header />
      <div className="spiral-container">
        <div className="styles-test">
          <section className="" id="">
            <canvas id="canvas"></canvas>
            <div className="dust-animation">
              <div className="bg-animation">
                <div id='stars2' className="dust"></div>
                <div id='stars3' className="dust"></div>
              </div>
            </div>
          </section>
        </div>
        <div className="spiral-innercontainer">
        <About />
        <Events />
        <Team />
        <Sponsors />
        <Contacts />
        <CopyRight />
        </div>
      </div>
    </div>
  );
};
export default Home;
