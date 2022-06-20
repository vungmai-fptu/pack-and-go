import React from "react";
import { Redirect, Route, useRouteMatch } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useIsLogin } from "../../hooks/useIsLogin";

function MainTemplate(props) {
  const useRouteNewTrip = useRouteMatch("/save-trip");
  const useRoutePastTrip = useRouteMatch("/trip");
  return (
    <>
      {!useRouteNewTrip && !useRoutePastTrip && <Header />}
      <main>{props.children}</main>
      {!useRouteNewTrip && !useRoutePastTrip && <Footer />}
    </>
  );
}

const RouterMainTemplate = ({ path, exact, Component }) => {
  const { isLogin } = useIsLogin();
  const mathUser = useRouteMatch("/user");
  const matchTrip = useRouteMatch("/trip");
  return (
    <Route
      path={path}
      exact={exact}
      render={() =>
        isLogin || matchTrip || mathUser ? (
          <MainTemplate>
            <Component />
          </MainTemplate>
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )
      }
    />
  );
};

export default RouterMainTemplate;
