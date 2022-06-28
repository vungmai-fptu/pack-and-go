import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getListUser } from "../../../store/actions/user.action";
import styles from "../Dashboard/dashboard.module.css";
function UserManagement() {
  const dispatch = useDispatch();
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(
    () => {
      dispatch(
        getListUser(page, userList, setUserList, setTotalPages, setLoading)
      );
    },
    // eslint-disable-next-line
    [page]
  );

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Total Trips</th>
            <th>Country</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((listUser, index) => {
            return (
              <tr key={index}>
                <td>
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                    alt="profile"
                    src={
                      listUser.profileImageUrl === ""
                        ? "https://wrld-se-prod.b-cdn.net/images/user-empty.svg?width=640&height=640"
                        : listUser.profileImageUrl
                    }
                  />
                  <div>
                    <div> {listUser.username}</div>
                    <div> {listUser.username}</div>
                  </div>
                </td>
                <td>
                  <span className={styles.status_indicatorActive} />
                  Active
                </td>
                <td>10</td>
                <td>
                  {listUser.country !== null && listUser.country !== ""
                    ? listUser.country
                    : "Việt Nam"}
                </td>
                <td>
                  <div className={styles.save_button}>
                    <button>Update</button>
                  </div>
                  <div className={styles.close_button}>
                    <button>Delete</button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserManagement;
