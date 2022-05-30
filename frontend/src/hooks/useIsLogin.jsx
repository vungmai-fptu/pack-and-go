import { useSelector } from "react-redux";

export function useIsLogin() {
  const { user } = useSelector((state) => state.user);
  return {
    isLogin: user.token && user,
    user,
  };
}
