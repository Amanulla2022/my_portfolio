import React from "react";
import "./experience.css";
import sapientLogo from "../../assets/sapientLogo.png";

const Experience = () => {
  return (
    <section className="expSection">
      <div className="expContainer">
        <h1>
          EXPERIENCE IN{" "}
          <img src={sapientLogo} alt="Publicis-Sapient" id="sapientImg"></img>
        </h1>

        <div className="individualContainer">
          <h3>
            Developer Mobile Solution L1{" "}
            <span className="spanExp"> Sep-2022 to Dec-2022</span>
          </h3>
          <ul>
            <li>I got trained on Android Development with Kotlin(Basic)</li>
            <li>Done a simple App called MEMES App</li>
            <li>
              Used MVVM Pattern, Dragger-Hilt where I used @Inject and to
              @Provide
            </li>
            <li>
              Used Glide to get the image, database called SQLite Database
            </li>
            <li>Used coroutines, Flows, RecyclerView and View Pager etc..</li>
          </ul>
        </div>
        <div className="individualContainer">
          <h3>
            Junior Associate Technology
            <span className="spanExp"> Feb-2022 to Sep-2022</span>
          </h3>
          <ul>
            <li>
              I got trained on Web Technologies like HTML5 CSS3 javaScript with
              ES6 features
            </li>
            <li>
              Done a Website called as e-Commerce, user freindly,
              responsive(mobile first <br />
              approach) and I am the Scrum Master of My Team
            </li>
            <li>
              It mainly contains pages like Home, Product List , Login, Sign-up
              and Mini-cart
            </li>
            <li>
              Particularly I have done the cart part,collebrating with team
              member, learn <br /> the git commands
            </li>
            <li>
              Integrated all individual parts into main, JSON to fetch the data,
              here i have <br />
              implemented HTML,SASS,Advance javaScript
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
