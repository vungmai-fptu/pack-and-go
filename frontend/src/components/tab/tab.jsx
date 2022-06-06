import React, { Component } from "react";
import PropTypes from "prop-types";

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

    let className = "tab-list-item";

    if (activeTab === label) {
      className += " tab-list-active";
    }

    return (
      <button className={className} onClick={onClick}>
        <span>
          <img
            src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#suit-case-fullci-usage"
            alt="common/suit-case-full"
            className="w_fu w_fy w_fM"
          />
        </span>
        {label}
      </button>
    );
  }
}

export default Tab;
