import ProfileGraphic from "./../static/profile-graphic.png";
import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

export const Home = () => (
  <div className="flex flex-col md:flex-row justify-center md:justify-around items-center px-8 md:px-20 h-[calc(100vh-120px)] overflow-hidden">
    <div className="flex-1 text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-0">
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
          <GithubLogoIcon weight="fill" className="cursor-pointer hover:text-accent transition-colors" />
        </a>
        <a
          href="https://www.linkedin.com/in/siddhantbansal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinLogoIcon weight="fill" className="cursor-pointer hover:text-accent transition-colors" />
        </a>
      </div>
    </div>
    <div className="text-center w-full md:w-auto flex justify-center mt-4 md:mt-0">
      <img className="max-w-[60%] md:max-w-full max-h-[35vh] md:max-h-[60vh] object-contain" src={ProfileGraphic} alt="Profile graphic" />
    </div>
  </div>
);
