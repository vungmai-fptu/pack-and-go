import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function MainTemplate(props) {
  const routeMatch = useRouteMatch("/sign");
  return (
    <>
      {!routeMatch && <Header />}
      <main>{props.children}</main>
      {!routeMatch && <Footer />}
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

