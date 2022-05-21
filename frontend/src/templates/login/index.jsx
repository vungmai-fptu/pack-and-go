import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useIsLogin } from "./../../hooks/useIsLogin";
function LoginTemplate(props) {
  return <main>{props.children}</main>;
}

const RouterLoginTemplate = ({ path, exact, Component }) => {
  const { isLogin } = useIsLogin();
  return (
    <Route
      path={path}
      exact={exact}
      render={() =>
        !isLogin ? (
          <LoginTemplate>
            <Component />
          </LoginTemplate>
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

export default RouterLoginTemplate;
