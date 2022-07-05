import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FcSearch, FcHighPriority, FcOk } from "react-icons/fc";
import { getListUser, getUser } from "../../../store/actions/user.action";
import avatar from "../assets/image/21-avatar-flat (1).gif";
import location from "../assets/image/18-location-pin-flat.gif";
import globe from "../assets/image/27-globe-flat.gif";
import photo from "../assets/image/54-photo-picturelandscape-gallery-flat.gif";
import styles from "../Dashboard/dashboard.module.css";
import Chart from "./../Dashboard/chart/index";
import ProfileUser from "./profileUser";
import Load from "../../../components/Load";
import Pagination from "./pagination";
function UserManagement() {
  const dispatch = useDispatch();
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [userList, setUserList] = useState([]);
  const [loadingInfo, setLoadingInfo] = useState(false);

  const [username, setUsername] = useState(null);
  const [errUser, setErrUser] = useState(null);
  const { users } = useSelector((state) => state.user);
  const { loading } = useSelector((state) => state.common);
  useEffect(
    () => {
      dispatch(
        getListUser(
          page,
          userList,
          setUserList,
          setTotalPages,
          setLoadingInfo,
          10
        )
      );
    },
    // eslint-disable-next-line
    [page]
  );
  useEffect(
    () => {
      dispatch(getUser(username, setErrUser));
    },
    // eslint-disable-next-line
    [username]
  );
  const chartData = {
    labels: ["E-3-40/45", "E-3", "B-52", "B-1", "E-6", "KC-135"],
    datasets: [
      {
        label: "number of aircraft",
        data: [617594, 181045, 153060, 106519, 105162, 95072], //fake data
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 99, 132, 0.6)",
        ],
      },
    ],
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);
  function pagiNate(number) {
    setCurrentPage(number);
    console.log("long" + number);
  }

  return (
    <div className={styles.container}>
      <div className={styles.col_dash}>
        <div className={styles.quick}>
          <div className={styles.single_quick}>
            <div className={styles.icon}>
              <img src={avatar} alt="img" />
            </div>
            <div className={styles.count_content}>
              <h3>
                <span>100</span>
              </h3>
              <p>Users</p>
            </div>
          </div>
          <div className={styles.single_quick}>
            <div className={styles.icon}>
              <img src={globe} alt="img" />
            </div>
            <div className={styles.count_content}>
              <h3>
                <span>100</span>
              </h3>
              <p>Trips</p>
            </div>
          </div>
          <div className={styles.single_quick}>
            <div className={styles.icon}>
              <img src={location} alt="img" />
            </div>
            <div className={styles.count_content}>
              <h3>
                <span>100</span>
              </h3>
              <p>VisitPlaces</p>
            </div>
          </div>
          <div className={styles.single_quick}>
            <div className={styles.icon}>
              <img src={photo} alt="img" />
            </div>
            <div className={styles.count_content}>
              <h3>
                <span>100</span>
              </h3>
              <p>Photos</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.col_7}>
        <div className={styles.white_box}>
          <div className={styles.list_header}>
            <div className={styles.main_title}>
              <h3>User Management</h3>
            </div>
            <div className={styles.search_field}>
              <form>
                <div>
                  <input type="text" placeholder="Search here..." />
                </div>
                <button>
                  <FcSearch />
                </button>
              </form>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th style={{ borderRadius: "30px 0 0 30px" }}>User Name</th>
                <th style={{ width: 120 }}>Country</th>
                <th style={{ width: 120 }}>Country</th>
                <th style={{ width: 120, borderRadius: "0px 30px 30px 0px" }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {userList.map((listUser, index) => {
                return (
                  <tr key={index}>
                    <th onClick={() => setUsername(listUser.username)}>
                      <div className={styles.align_items_center}>
                        <div style={{ marginRight: "20px" }}>
                          <img
                            src={
                              listUser.profileImageUrl === ""
                                ? "https://wrld-se-prod.b-cdn.net/images/user-empty.svg?width=640&height=640"
                                : listUser.profileImageUrl
                            }
                            alt="img"
                          />
                        </div>
                        <p>{listUser.username}</p>
                      </div>
                    </th>
                    <td>
                      {listUser.country !== null && listUser.country !== ""
                        ? listUser.country
                        : "Việt Nam"}
                    </td>
                    <td>Việt Nam</td>
                    <td>
                      <FcHighPriority />
                      <FcOk />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Pagination
            pagiNate={(number) => pagiNate(number)}
            postPerPage={postPerPage}
            totalPosts={totalPages}
          />
        </div>
      </div>
      <div className={styles.col_5}>
        {users == null ? (
          <></>
        ) : loading ? (
          <div className={styles.white_box_5}>
            <Load />
          </div>
        ) : (
          <div className={styles.white_box_5}>
            <ProfileUser users={users} />
          </div>
        )}
        <div className={styles.white_box_5}>
          <Chart chartData={chartData} legendPosition="right" />
        </div>
      </div>
    </div>
  );
}

export default UserManagement;
