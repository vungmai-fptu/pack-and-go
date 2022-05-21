import LandingPage from "../pages/landing";
import Err from "../pages/main/err";
import Home from "../pages/main/home";
import Login from "../pages/main/login";
import Register from "../pages/main/register";

export const mainRouter = [
  {
    path: "/",
    exact: true,
    Component: Home,
  },
  {
    Component: Err,
  },
];

export const signRouter = [
  {
    path: "/sign/in",
    exact: false,
    Component: Login,
  },
  {
    path: "/sign/up",
    exact: false,
    Component: Register,
  },
  {
    path: "/landing",
    exact: false,
    Component: LandingPage,
  },
];
