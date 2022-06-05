import React from "react";
import { Redirect, Route, useRouteMatch } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useIsLogin } from "../../hooks/useIsLogin";

function MainTemplate(props) {
  const useRouteNewTriple = useRouteMatch("/newTrip");
  return (
    <>
      {!useRouteNewTriple && <Header />}
      <main>{props.children}</main>
      {!useRouteNewTriple && <Footer />}
    </>
  );
}

const RouterMainTemplate = ({ path, exact, Component }) => {
  const { isLogin } = useIsLogin();
  return (
    <Route
      path={path}
      exact={exact}
      render={() =>
        isLogin ? (
          <MainTemplate>
            <Component />
          </MainTemplate>
        ) : (
          <Redirect
            to={{
              pathname: "/landing",
            }}
          />
        )
      }
    />
  );
};

export default RouterMainTemplate;
