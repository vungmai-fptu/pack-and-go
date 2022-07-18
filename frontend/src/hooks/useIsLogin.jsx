import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export function useIsLogin() {
  const { user } = useSelector((state) => state.user);
  const { loading } = useSelector((state) => state.common);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const getAccountAdmin = async () => {
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/api/users/${user.username}/trips`,
      })
        .then((res) => {
          console.log(
            "🚀 ~ file:admin",
            res.data.roles.map((role) => role)
          );
          const [setRoles] = res.data.roles.map((role) => role.name);
          setAdmin(setRoles);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    user && getAccountAdmin();
    // eslint-disable-next-line
  }, []);
  return {
    isLogin: user,
    isLoginToAdmin: admin,
    user,
    loading,
  };
}
