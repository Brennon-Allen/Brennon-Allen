import "./css/App.css";
import Picture from "./components/Picture";
import Link from "./components/Link";
import Content from "./components/Content";
import Heading from "./components/Heading";
import Subheading from "./components/Subheading";
import Resume from "./assets/Tech Resume-Brennon Allen.pdf";
import { useState, useEffect } from "react";
import resumeImage from "./assets/resume-image.png";

function App() {
  const [hobbiesClicked, setHobbiesClicked] = useState(false);
  const [resumeViewActive, setResumeView] = useState(false);

  function changeHobbies() {
    setHobbiesClicked((prevState) => !prevState);
  }

  function changeResumeView() {
    setResumeView((prevState) => !prevState);
  }

  return (
    <div className="flex-center-column">
      <Picture />
      <Heading text="Brennon T. Allen" />
      <Subheading text="brennon.t.allen@gmail.com" />
      <Subheading text="+1 (726) 400-3411" />
      <div className="small-margin">
        <Heading text="Resume" />
        <div className="flex-center-column">
          {resumeViewActive ? (
            <div className="flex-center-column">
              <Link text="Hide" action={changeResumeView} />
              <img src={resumeImage} className="resume-image" />
            </div>
          ) : (
            <Link text="View" action={changeResumeView} />
          )}

          <Link
            text="Download"
            link={Resume}
            file={"Brennon Allen's Tech Resume"}
          />
        </div>
        <Heading text="About Me" />
        <div className="flex-center-column">
          {hobbiesClicked ? (
            <div className="flex-center-column">
              <Link text="Hide" action={changeHobbies} />
              <p className="about-text">
                <span className="bold">Hobbies:</span> Coding, Skateboarding,
                Boxing, Video Games, Recreational Sports
              </p>
            </div>
          ) : (
            <Link text="Read" action={changeHobbies} />
          )}
        </div>
        <Heading text="Portfolio" />
        <div className="flex-center-column">
          <Link text="Browse" link={"https://www.code-tailors.com"} />
        </div>

        <Heading text="Links" />
        <div className="flex-center-column">
          <Link text="GitHub" link={"https://github.com/Brennon-Allen"} />
          <Link
            text="LinkedIn"
            link={"https://www.linkedin.com/in/brennon-allen/"}
          />
          <Link
            text="UpWork"
            link={"https://www.upwork.com/freelancers/~01dc0e627900ce593c"}
          />
          <Link text="Business" link={"https://www.code-tailors.com"} />
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default App;
