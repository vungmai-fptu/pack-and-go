import React, { Component } from "react";
import PropTypes from "prop-types";
import Tab from "./tab";
import styles from "./Tabs.module.css";
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
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
        <p
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            background: "red",
          }}
        >
          ALOOO
        </p>
      </div>
    );
  }
}

export default Tabs;
