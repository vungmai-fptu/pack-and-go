import React from "react";
import styles from "../Dashboard/dashboard.module.css";
function UserManagement() {
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Types</th>
            <th>Last updated at</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Developer Zahid</td>
            <td>
              <span className={styles.status_indicatorActive} />
              Active
            </td>
            <td>Attendee, F1</td>
            <td>Jul 10, 2023, 01:10 PM</td>
            <td>Việt Nam</td>
          </tr>
          <tr>
            <td>Developer Zahid</td>
            <td>
              <span className={styles.status_indicator} />
              Active
            </td>
            <td>Attendee, F1</td>
            <td>Jul 10, 2023, 01:10 PM</td>
            <td>Việt Nam</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserManagement;
