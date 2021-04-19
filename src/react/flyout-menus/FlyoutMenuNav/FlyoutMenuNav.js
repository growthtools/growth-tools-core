import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.scss";

import ToolsFlyout from "../ToolsFlyout/ToolsFlyout";
import ResourcesFlyout from "../ResourcesFlyout/ResourcesFlyout";

import { GOOGLE_STORAGE_DOMAIN } from "../../../js/constants";

const FLYOUT_ANCHOR = `${GOOGLE_STORAGE_DOMAIN}/icons/flyout-anchor.svg`;
const FLYOUT_ANCHOR_BLUE = `${GOOGLE_STORAGE_DOMAIN}/icons/flyout-anchor-blue.svg`;

/**
 * Flyout menu navigation for public page headers.
 */
class FlyoutMenuNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      previousActiveMenuItem: "",
      activeMenuItem: "",
    };

    // Event Handlers
    this.handleNavigationMenuMouseLeave = this.handleNavigationMenuMouseLeave.bind(
      this
    );
    this.handleMenuItemMouseEnter = this.handleMenuItemMouseEnter.bind(this);
    this.handleMenuItemMouseLeave = this.handleMenuItemMouseLeave.bind(this);
  }

  /**
   * Handler for mouseenter event on menu items.
   * These include the "Tools" and "Resources" menu items.
   *
   * Updates the flyout menu anchor's position.
   *
   * @param {string} menuItemName: The name of the hovered menu item
   */
  handleMenuItemMouseEnter(menuItemName) {
    this.setState({
      previousActiveMenuItem: this.state.activeMenuItem,
      activeMenuItem: menuItemName,
    });
  }

  /**
   * Updates state to reflect the fact the user has completely
   * left menu navigation.
   */
  handleNavigationMenuMouseLeave() {
    this.setState({
      previousActiveMenuItem: "",
      activeMenuItem: "",
    });
  }

  /**
   * Handler for mouseleave event on menu items. Updates the state to reflect
   * the fact user has left a menu item.
   */
  handleMenuItemMouseLeave() {
    const { activeMenuItem } = this.state;

    this.setState({
      previousActiveMenuItem: activeMenuItem,
      activeMenuItem: "",
    });
  }

  /**
   * @returns {string} A CSS class for the Tools menu item. This class controls
   * whether the menu flyout will appear, and *how* it animates if so.
   */
  cssClassForToolsMenu() {
    return `
      ${styles["flyout-menu"]}
      ${styles["flyout-menu--tools"]}`;
  }

  /**
   * @returns {string} A CSS class for the Resources menu item. This class controls
   * whether the menu flyout will appear, and *how* it animates if so.
   */
  cssClassForResourcesMenu() {
    const { activeMenuItem, previousActiveMenuItem } = this.state;
    let cssClass = `${styles["flyout-menu"]} ${styles["flyout-menu--resources"]}`;
    if (activeMenuItem !== "Resources") {
      return cssClass;
    }

    const userNavigatingRight = previousActiveMenuItem === "Tools";

    return (
      cssClass + (userNavigatingRight ? ` ${styles["a-slide-right"]}` : "")
    );
  }

  render() {
    const bgColorCSSClass = this.props.displayForLightBg
      ? styles["bg--light"]
      : styles["bg--dark"];

    const flyoutMenuAnchorBoxClassName = styles["flyout-menu-anchor-box"];

    // Flyout menu class names
    const toolsMenuCSSClass = this.cssClassForToolsMenu();
    const resourcesMenuCSSClass = this.cssClassForResourcesMenu();

    return (
      <div id={styles["flyout-menu-container"]} className={bgColorCSSClass}>
        <nav>
          <ul
            className={styles["menu-item-list"]}
            onMouseLeave={() => this.handleNavigationMenuMouseLeave()}
          >
            <li
              className={`${styles["menu-item"]} ${styles["menu-item--training"]} ${styles["no-flyout"]}`}
            >
              <label>
                <a
                  href="https://growthtools.com/vip-training?utm_source=last-weeks-wins"
                  target="_blank"
                >
                  TRAINING
                </a>
              </label>
            </li>
            {/* Tools */}
            <li
              className={`${styles["menu-item"]} ${styles["menu-item--tools"]}`}
              onMouseLeave={() => this.handleMenuItemMouseLeave("Tools")}
              onMouseEnter={() => this.handleMenuItemMouseEnter("Tools")}
            >
              <label>TOOLS</label>
              <div className={toolsMenuCSSClass}>
                <ToolsFlyout />
              </div>
            </li>

            {/* Resources */}
            <li
              className={`${styles["menu-item"]} ${styles["menu-item--resources"]}`}
              onMouseLeave={() => this.handleMenuItemMouseLeave("Resources")}
              onMouseEnter={() => this.handleMenuItemMouseEnter("Resources")}
            >
              <label>RESOURCES</label>
              <div className={resourcesMenuCSSClass}>
                <ResourcesFlyout />
              </div>
            </li>

            {/* The flyout menu anchor */}
            <li className={flyoutMenuAnchorBoxClassName}>
              <img
                src={FLYOUT_ANCHOR}
                alt="flyout anchor"
                className={styles["flyout-menu-anchor"]}
              />
              <img
                src={FLYOUT_ANCHOR_BLUE}
                alt="flyout anchor"
                className={[
                  styles["flyout-menu-anchor"],
                  styles["flyout-menu-anchor--blue"],
                ].join(" ")}
              />
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

FlyoutMenuNav.defaultProps = {
  displayForLightBg: true,
};

FlyoutMenuNav.propTypes = {
  // affects the text colors of the menu
  displayForLightBg: PropTypes.bool,
};

export default FlyoutMenuNav;
