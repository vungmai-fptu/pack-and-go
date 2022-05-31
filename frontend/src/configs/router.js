import LandingPage from "../pages/landing";
import Err from "../pages/main/err";
import Feed from "../pages/main/feed";
import ForgotPassword from "../pages/main/forgotPassword";
import Home from "../pages/main/home";
import Login from "../pages/main/login";
import Profile from "../pages/main/profile";
import Register from "../pages/main/register";
import SettingProfile from "../pages/main/settingProfile";

export const mainRouter = [
  {
    path: "/",
    exact: true,
    Component: Feed,
  },
  {
    path: "/profile",
    exact: false,
    Component: Profile,
  },
  {
    path: "/setting",
    exact: false,
    Component: SettingProfile,
  },
  {
    Component: Err,
  },
];

export const signRouter = [
  {
    path: "/login",
    exact: false,
    Component: Login,
  },
  {
    path: "/sign/up",
    exact: false,
    Component: Register,
  },
  {
    path: "/sign/forgotten-password",
    exact: false,
    Component: ForgotPassword,
  },
  {
    path: "/landing",
    exact: false,
    Component: LandingPage,
  },
];
