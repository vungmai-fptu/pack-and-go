import React, { Component } from "react";
import PropTypes from "prop-types";
import { IconName } from "react-icons/fa";
import styles from "./tab.module.css";
class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label },
    } = this;

    let className = styles["tab-list-item"];

    if (activeTab === label) {
      className += ` ${styles["tab-list-active"]}`;
    }

    return (
      <button className={className} onClick={onClick}>
        <span>
          {/* <img
            src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#suit-case-fullci-usage"
            alt="common/suit-case-full"
            className="w_fu w_fy w_fM"
          /> */}
        </span>
        <span className="w_O8">{label}</span>
      </button>
    );
  }
}

export default Tab;
