import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Login from "../../pages/main/login";

function MainTemplate(props) {
  const routeMatchAuth = useRouteMatch("/sign");
  const routeMatchLanding = useRouteMatch("/landing");

  return (
    <>
      {!routeMatchAuth && !routeMatchLanding && <Header />}
      <main>{props.children}</main>
      {!routeMatchAuth && <Footer />}
    </>
  );
}

const RouterMainTemplate = ({ path, exact, Component }) => {
  return (
    <Route path={path} exact={exact}>
      <MainTemplate>
        <Component />
      </MainTemplate>
    </Route>
  );
};



export default RouterMainTemplate;

