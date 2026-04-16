import React from "react";
import "./home.css";
import Picture from "../../assets/pic.png";
function Home() {
  return (
    <div className="home">
      <div className="home-left">
        <div className="small">
          <div className="span"></div>
          <div className="text">
            <p>Available for freelance work</p>
          </div>
        </div>
        <div className="text-section">
          <h4 className="main-text">
            Philip Emdokolo is an experienced full-stack developer and <span>web
            designer who creates high perfoming and beautiful websites.</span>
          </h4>
          <p>
            I build fast, responsive, and user-friendly websites that help
            businesses and individuals stand out online. Let’s work together to
            bring your ideas to life.
          </p>
        </div>
        <button>Download Cv</button>
      </div>
      <div className="home-right">
        <img src={Picture} alt="my pic" />
      </div>
    </div>
  );
}

export default Home;
