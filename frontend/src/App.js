import { BrowserRouter, Switch } from "react-router-dom";
import { mainRouter, signRouter } from "./configs/router";
import RouterMainTemplate from "./templates/main";
import RouterSignTemplate from "./templates/login";

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
  const renderSignRouter = () => {
    return signRouter.map(({ path, exact, Component }) => {
      return (
        <RouterSignTemplate
          path={path}
          exact={exact}
          Component={Component}
        ></RouterSignTemplate>
      );
    });
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {renderSignRouter()}
          {renderMainRouter()}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
// import React, { Component } from "react";
// class App extends Component {
//   state = {
//     lat: "",
//     long: "",
//   };

//   componentDidMount() {
//     navigator.geolocation.getCurrentPosition((position) => {
//       return this.setState({
//         lat: position.coords.latitude,
//         long: position.coords.longitude,
//       });
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Your Location</h1>
//         <h2> Your Latitude is {this.state.lat}</h2>
//         <h2> Your Longitude is {this.state.long}</h2>
//       </div>
//     );
//   }
// }

// export default App;
