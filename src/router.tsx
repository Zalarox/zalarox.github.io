import { createBrowserRouter } from "react-router-dom";
import Education from "./components/Education";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/education",
        element: <Education />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);

export default router;
