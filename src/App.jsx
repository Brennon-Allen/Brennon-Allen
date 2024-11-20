import "./css/App.css";
import Picture from "./components/Picture";
import Link from "./components/Link";
import Content from "./components/Content";
import Heading from "./components/Heading";
import Subheading from "./components/Subheading";
import Resume from "./assets/Tech Resume-Brennon Allen.pdf";

function App() {
  return (
    <div className="flex-center-column">
      <Picture />
      <Heading text="Brennon T. Allen"/>
      <Subheading text="CONTACT ME" />
      <Subheading text="brennon.t.allen@gmail.com" />
      <Subheading text="brennon.allen@code-tailors.com" />
      <Subheading text="+1 (726) 400-3411" />
      <div className="small-margin">
      <Heading text="Resume" />
        <div className="flex-center-column">
          {/* <Link text="Cover Letter" /> */}
          <Link text="Download" link={Resume} file={"Brennon Allen's Tech Resume"}/>
        </div>
        <Heading text="Portfolio" />
        <div className="flex-center-column">
          <Link text="Browse" link={"https://www.code-tailors.com"}/>
        </div>
        
        <Heading text="Links" />
        <div className="flex-center-column">
          <Link text="GitHub" link={"https://github.com/Brennon-Allen"} />
          <Link text="LinkedIn" link={"https://www.linkedin.com/in/brennon-allen/"} />
          <Link text="UpWork" link={"https://www.upwork.com/freelancers/~01dc0e627900ce593c"}/>
          <Link text="Business" link={"https://www.code-tailors.com"}/>
        </div>
      </div>

      <div>
      </div>
    </div>
  );
}

export default App;
