import { Route } from "react-router-dom";
import { BrowserRouter, Switch } from "react-router-dom";
import { mainRouter } from "./configs/router";
import LandingPage from "./pages/landing";
import RouterMainTemplate from "./templates/main";

const loggedIn = false;

function App() {

  const renderMainRouter = () => {
    return mainRouter.map(({ path, exact, Component }) => {
      return (
        <RouterMainTemplate
          path={path}
          exact={exact}
          Component={Component}
        ></RouterMainTemplate>
      );
    });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>{renderMainRouter()}</Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
