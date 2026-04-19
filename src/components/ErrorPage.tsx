import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router";
import Kitty from "./../static/404_kitty.svg";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="font-sans text-2xl md:text-3xl lg:text-4xl flex flex-wrap justify-center items-center h-[100dvh] p-4 text-white bg-dark-bg">
      <div className="flex-1 flex min-w-[50%] justify-center p-8">
        <img src={Kitty} className="w-full max-w-lg" alt="404 Error Kitty Illustration" />
      </div>
      <div className="flex-1 flex flex-col min-w-[50%] p-8">
        <span className="font-bold">Error 404: that page wasn't found.</span>
        <span className="text-gray-400 mt-2 text-xl md:text-2xl">
          {isRouteErrorResponse(error) ? error.statusText : null}
        </span>
        <a href="/" className="mt-8 text-accent underline underline-offset-[0.5rem] hover:text-white transition-colors">
          Take me back home!
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
