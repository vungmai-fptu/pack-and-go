import React from "react";
import {
  FaPlane,
  FaMotorcycle,
  FaBicycle,
  FaBusAlt,
  FaTrain,
  FaWalking,
  FaShippingFast,
} from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";
import styles from "./overview.module.css";
class Transport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "plane",
    };
  }
  handleClickActiveTab(e) {
    this.setState({
      activeTab: e,
    });
  }
  render() {
    const activeClass = `${styles.isActive}`;
    return (
      <>
        <label className="w_rI w_rS w_UW">Transportation</label>
        <div>
          <div
            style={{
              background: "hsla(0, 0%, 4%, .15)",
              margin: "0px auto",
              borderRadius: "10px",
              display: "flex",
              width: "fit-content",
            }}
          >
            <div
              className={`${styles.item} ${
                this.state.activeTab === "plane" ? activeClass : ""
              }`}
              onClick={this.handleClickActiveTab.bind(this, "plane")}
            >
              <FaPlane />
            </div>
            <div
              className={`${styles.item} ${
                this.state.activeTab === "car" ? activeClass : ""
              }`}
              onClick={this.handleClickActiveTab.bind(this, "car")}
            >
              <IoCarSport />
            </div>
            <div
              className={`${styles.item} ${
                this.state.activeTab === "bus" ? activeClass : ""
              }`}
              onClick={this.handleClickActiveTab.bind(this, "bus")}
            >
              <FaBusAlt />
            </div>
            <div
              className={`${styles.item} ${
                this.state.activeTab === "train" ? activeClass : ""
              }`}
              onClick={this.handleClickActiveTab.bind(this, "train")}
            >
              <FaTrain />
            </div>
            <div
              className={`${styles.item} ${
                this.state.activeTab === "ship" ? activeClass : ""
              }`}
              onClick={this.handleClickActiveTab.bind(this, "ship")}
            >
              <FaShippingFast />
            </div>
            <div
              className={`${styles.item} ${
                this.state.activeTab === "moto" ? activeClass : ""
              }`}
              onClick={this.handleClickActiveTab.bind(this, "moto")}
            >
              <FaMotorcycle />
            </div>
            <div
              className={`${styles.item} ${
                this.state.activeTab === "bike" ? activeClass : ""
              }`}
              onClick={this.handleClickActiveTab.bind(this, "bike")}
            >
              <FaBicycle />
            </div>
            <div
              className={`${styles.item} ${
                this.state.activeTab === "walk" ? activeClass : ""
              }`}
              onClick={this.handleClickActiveTab.bind(this, "walk")}
            >
              <FaWalking />
            </div>
          </div>
        </div>
        <div />
      </>
    );
  }
}

export default Transport;
