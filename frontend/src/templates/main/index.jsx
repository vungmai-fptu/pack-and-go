import React from "react";
import { Redirect, Route } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useIsLogin } from "../../hooks/useIsLogin";

function MainTemplate(props) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
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
        true ? (
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
