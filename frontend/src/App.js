import { BrowserRouter, Switch } from "react-router-dom";
import { mainRouter } from "./configs/router";
import RouterMainTemplate from "./templates/main";

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
