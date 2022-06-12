import React, { Component } from "react";
import PropTypes from "prop-types";
import Tab from "./tab";

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this;

    return (
      <div className="w_CS">
        <div className="w_O2 TRIP_TABS">
          {children.map((child) => {
            const { label } = child.props;
            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
          <div className="w_O3" />
          <div className="w_O4">
            <button disabled className="w_O6">
              <span>
                <img
                  src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#info_emptyan-usage"
                  alt="common/info_empty"
                  className="w_fu w_fy w_fO"
                />
              </span>
              <span className="w_O8">Destination Info</span>
            </button>
            <button className="w_O6">
              <span>
                <img
                  src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#bulb_emptyd-usage"
                  alt="common/bulb_empty"
                  className="w_fu w_fy w_fO"
                />
              </span>
              <span className="w_O8">Get inspired</span>
            </button>
          </div>
          <div className="w_O5">
            <button className="w_O6">
              <span>
                <img
                  src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#rescuebx-usage"
                  alt="common/rescue"
                  className="w_fu w_fy w_fO"
                />
              </span>
              <span className="w_O8">Help</span>
            </button>
          </div>
        </div>

        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    );
  }
}

export default Tabs;
