import React, { useEffect } from "react";
import axios from "axios";
import { useIsLogin } from "../../../../hooks/useIsLogin";
import { useState } from "react";
import styles from "../settingProfile.module.css";
import { NotificationContainer } from "react-notifications";
import AccountInfo from "./AccountInfo";
function MyAccount() {
  const { user } = useIsLogin();
  const [userSetting, setUserSetting] = useState(null);
  useEffect(() => {
    const getAccountInfo = async () => {
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/api/user/account`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      }).then((res) => {
        setUserSetting(res.data);
      });
    };
    getAccountInfo();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.accountPageContent}>
      <div className={styles.titleHeader}>
        <h1> My Account</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.inputs}>
          <div className={styles.row}>
            {userSetting === null ? (
              <p>loading...</p>
            ) : (
              <AccountInfo userSettings={userSetting} />
            )}
          </div>
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
}
export default MyAccount;
