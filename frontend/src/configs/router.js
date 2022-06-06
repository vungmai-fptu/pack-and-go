import LandingPage from "../pages/landing";
import Err from "../pages/main/err";
import Feed from "../pages/main/feed";
import ForgotPassword from "../pages/main/forgotPassword";
import Home from "../pages/main/home";
import Login from "../pages/main/login";
import NewTrip from "../pages/main/newTrip";
import Profile from "../pages/main/profile";
import Register from "../pages/main/register";
import SearchPage from "../pages/main/search";
import SettingProfile from "../pages/main/settingProfile";
import changePassword from "../pages/main/changePassword";


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
    path: "/search",
    exact: false,
    Component: SearchPage,
  },
  {
    path: "/setting",
    exact: false,
    Component: SettingProfile,
  },
  {
    path: "/newTrip",
    exact: false,
    Component: NewTrip,
  },
  {
    path: "/pastTrip",
    exact: false,
    Component: NewTrip,
  },
  {
    path: "/changePassword",
    exact: false,
    Component: changePassword,
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
