import React from "react";
import { FaUserCog, FaPlane } from "react-icons/fa";
import TripManagement from "../tripManagement";
import UserManagement from "../userManagement";
import HeaderAdmin from "./header";
import Tabs from "./tab/tabs";

function Dashboard() {
  return (
    <div>
      <HeaderAdmin />
      <div>
        <Tabs>
          <div label="User Management" Icon={FaUserCog}>
            <UserManagement />
          </div>
          <div label="Trip Management" Icon={FaPlane}>
            <TripManagement />
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default Dashboard;
