import LandingPage from "../pages/landing";
import Err from "../pages/main/err";
import Feed from "../pages/main/feed";
import ForgotPassword from "../pages/main/forgotPassword";
import Login from "../pages/main/login";
import Trip from "../pages/main/Trip";
import Profile from "../pages/main/profile";
import Register from "../pages/main/register";
import ResetPassword from "../pages/main/resetPassword";
import SearchPage from "../pages/main/search";
import SettingProfile from "../pages/main/settingProfile";
import changePassword from "../pages/main/changePassword";
import TripPage from "../pages/main/trippage";
import AllTrips from "../pages/main/alltrips";
import AllTravelers from "../pages/main/alltravelers";

export const mainRouter = [
  {
    path: "/",
    exact: true,
    Component: Feed,
  },
  {
    path: "/profile/:username",
    exact: false,
    Component: Profile,
  },
  {
    path: "/search",
    exact: false,
    Component: SearchPage,
  },
  {
    path: "/alltrips",
    exact: false,
    Component: AllTrips,
  },
  {
    path: "/alltravelers",
    exact: false,
    Component: AllTravelers,
  },
  {
    path: "/trip-page",
    exact: false,
    Component: TripPage,
  },
  {
    path: "/setting",
    exact: false,
    Component: SettingProfile,
  },
  {
    path: "/trip/:id?",
    exact: false,
    Component: Trip,
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
    path: `/user/:slug`,
    exact: false,
    Component: ResetPassword,
  },
  {
    path: "/landing",
    exact: false,
    Component: LandingPage,
  },
];
