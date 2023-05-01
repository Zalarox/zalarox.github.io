import React from "react";
import ProfileGraphic from "./../static/profile-graphic.png";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

import "./Home.scss";

const Home = () => (
  <div className="main">
    <div className="intro">
      Hello, I am <span className="accent">Siddhant Bansal</span>.
      <div className="subtext">
        I am a full-stack engineer based in Toronto, Canada. I love exploring
        new technologies, but the majority of my work is in React with C# .NET.
      </div>
      <div className="contact">
        <GithubLogo weight="fill" className="connection-icon" />
        <LinkedinLogo weight="fill" className="connection-icon" />
      </div>
    </div>
    <div className="profile">
      <img className="pfp" src={ProfileGraphic} />
    </div>
  </div>
);

export default Home;
