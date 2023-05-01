import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import "./ErrorPage.scss";
import Kitty from "./../static/404_kitty.svg";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="error-page-container">
      <div className="img-container">
        <img src={Kitty} />
      </div>
      <div className="error-container">
        <span>Error 404: that page wasn't found.</span>
        <span className="subtext">
          {isRouteErrorResponse(error) ? error.error?.message : null}
        </span>
        <a href="/">Take me back home!</a>
      </div>
    </div>
  );
};

export default ErrorPage;
