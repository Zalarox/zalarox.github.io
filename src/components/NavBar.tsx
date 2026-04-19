import { NavLink } from "react-router";

export const NavBar = () => {
  const baseClass = "text-inherit no-underline hover:text-accent transition-colors font-semibold";
  const activeClass = "text-accent underline underline-offset-[0.5rem]";

  const getClass = (isActive: boolean) =>
    `${baseClass} ${isActive ? activeClass : ""}`;

  return (
    <nav className="flex flex-wrap justify-center items-center py-6 px-4 mb-4 gap-4 md:gap-8 text-lg font-sans">
      <NavLink className={({ isActive }) => getClass(isActive)} to="/">
        Home
      </NavLink>
      <NavLink className={({ isActive }) => getClass(isActive)} to="/education">
        Education
      </NavLink>
      <NavLink
        className={({ isActive }) => getClass(isActive)}
        to="/experience"
      >
        Experience
      </NavLink>
      <NavLink className={({ isActive }) => getClass(isActive)} to="/projects">
        Projects
      </NavLink>
    </nav>
  );
};
