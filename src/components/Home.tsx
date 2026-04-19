import React from "react";
import ProfileGraphic from "./../static/profile-graphic.png";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

const Home = () => (
  <div className="flex flex-wrap justify-around items-center m-8 md:m-20">
    <div className="flex-1 text-4xl md:text-5xl lg:text-6xl font-bold mb-10 md:mb-0">
      Hello, I am <span className="text-accent">Siddhant Bansal</span>.
      <div className="mt-6 text-xl md:text-2xl text-gray-300 font-normal">
        I am a full-stack engineer based in Toronto, Canada. I love exploring
        new technologies, but the majority of my work is in React with C# .NET.
      </div>
      <div className="flex items-center mt-8 text-4xl gap-4">
        <a
          href="https://github.com/zalarox"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubLogo weight="fill" className="cursor-pointer hover:text-accent transition-colors" />
        </a>
        <a
          href="https://www.linkedin.com/in/siddhantbansal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinLogo weight="fill" className="cursor-pointer hover:text-accent transition-colors" />
        </a>
      </div>
    </div>
    <div className="text-center w-full md:w-auto flex justify-center mt-8 md:mt-0">
      <img className="max-w-[80%] md:max-w-full h-auto" src={ProfileGraphic} alt="Profile graphic" />
    </div>
  </div>
);

export default Home;
