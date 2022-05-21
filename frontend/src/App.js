import { BrowserRouter, Switch } from "react-router-dom";
import { mainRouter } from "./configs/router";
import LandingPage from "./pages/landing";
import RouterMainTemplate from "./templates/main";

function App() {

  const loggedIn = false;

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
        {
          loggedIn ?
            <Switch>{renderMainRouter()}</Switch> :
            <LandingPage />
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
