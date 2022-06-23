import React, { Component } from "react";
import PropTypes from "prop-types";
import Tab from "./tab";
import styles from "./Tabs.module.css";
import { FcLikePlaceholder, FcComments, FcShare } from "react-icons/fc";
import Comment from "../Comment";
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
      <div className="w_CS" style={{ minWidth: "fit-content" }}>
        <div style={{ background: "#071125" }} className={styles.tabs}>
          {children.map((child) => {
            const { label, Icon } = child.props;
            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
                Icon={Icon}
              />
            );
          })}
        </div>
        <div style={{ flex: "1 1", display: "flex", flexDirection: "column" }}>
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
          <div style={{ borderTop: "1px solid #d0d8e6" }}>
            <div style={{ display: "flex" }}>
              <div className={styles.interactive} style={{ display: "flex" }}>
                <button>
                  <div>
                    <FcLikePlaceholder />
                  </div>
                  <span>00</span>
                </button>
                <button>
                  <div>
                    <FcComments />
                  </div>
                  <span>00</span>
                </button>
                <button>
                  <div>
                    <FcShare />
                  </div>
                </button>
              </div>
            </div>
            <Comment />
          </div>
        </div>
      </div>
    );
  }
}

export default Tabs;
