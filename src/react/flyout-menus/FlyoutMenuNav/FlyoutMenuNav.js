import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

import ToolsFlyout from "../ToolsFlyout/ToolsFlyout";
import ClassesFlyout from "../ClassesFlyout/ClassesFlyout";
import ResourcesFlyout from "../ResourcesFlyout/ResourcesFlyout";

import {GOOGLE_STORAGE_DOMAIN} from "../../../js/constants";

const FLYOUT_ANCHOR = `${GOOGLE_STORAGE_DOMAIN}/icons/flyout-anchor.svg`;
const FLYOUT_ANCHOR_BLUE = `${GOOGLE_STORAGE_DOMAIN}/icons/flyout-anchor-blue.svg`;

const FLYOUT_MENU_ANCHOR_WIDTH = 24 /*px*/;

/**
 * Flyout menu navigation for public page headers.
 */
class FlyoutMenuNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      previousActiveMenuItem: "",
      activeMenuItem: ""
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
   * These include the "Tools", "Classes", and "Resources" menu items.
   *
   * Updates the flyout menu anchor's position.
   *
   * @param {string} menuItemName: The name of the hovered menu item
   */
  handleMenuItemMouseEnter(menuItemName) {
    this.setState({
      previousActiveMenuItem: this.state.activeMenuItem,
      activeMenuItem: menuItemName
    });
  }

  /**
   * Updates state to reflect the fact the user has completely
   * left menu navigation.
   */
  handleNavigationMenuMouseLeave(e) {
    this.setState({
      previousActiveMenuItem: "",
      activeMenuItem: ""
    });
  }

  /**
   * Handler for mouseleave event on menu items. Updates the state to reflect
   * the fact user has left a menu item.
   */
  handleMenuItemMouseLeave(menuItemName) {
    const { activeMenuItem, previousActiveMenuItem } = this.state;

    this.setState({
      previousActiveMenuItem: activeMenuItem,
      activeMenuItem: ""
    });
  }

  /**
   * @returns {string} A CSS class for the Tools menu item. This class controls
   * whether the menu flyout will appear, and *how* it animates if so.
   */
  cssClassForToolsMenu() {
    const { activeMenuItem, previousActiveMenuItem } = this.state;
    const userNavigatingLeft =
      activeMenuItem === "Tools" &&
      previousActiveMenuItem.match(/Classes|Resources/);

    return (
      "flyout-menu flyout-menu--tools" +
      (userNavigatingLeft ? " a-slide-left" : "")
    );
  }

  /**
   * @returns {string} A CSS class for the Classes menu item. This class controls
   * whether the menu flyout will appear, and *how* it animates if so.
   */
  cssClassForClassesMenu() {
    const { activeMenuItem, previousActiveMenuItem } = this.state;

    let cssClass = "flyout-menu flyout-menu--classes";
    if (activeMenuItem !== "Classes") {
      return cssClass;
    }

    const userNavigatingRight = previousActiveMenuItem.match(/Tools|Resources/);

    return cssClass + (userNavigatingRight ? " a-slide-right" : "");
  }

  /**
   * @returns {string} A CSS class for the Resources menu item. This class controls
   * whether the menu flyout will appear, and *how* it animates if so.
   */
  cssClassForResourcesMenu() {
    const { activeMenuItem, previousActiveMenuItem } = this.state;
    let cssClass = "flyout-menu flyout-menu--resources";
    if (activeMenuItem !== "Resources") {
      return cssClass;
    }

    const userNavigatingLeft = previousActiveMenuItem === "Classes";
    const userNavigatingRight = previousActiveMenuItem === "Tools";

    return (
      cssClass +
      (userNavigatingLeft ? " a-slide-left" : "") +
      (userNavigatingRight ? " a-slide-right" : "")
    );
  }

  render() {
    const {
      activeMenuItem,
      previousActiveMenuItem,
      flyoutMenuAnchorPositionLeft
    } = this.state;

    const bgColorCSSClass = this.props.displayForLightBg
      ? "bg--light"
      : "bg--dark";

    const flyoutMenuAnchorBoxClassName =
      "flyout-menu-anchor-box" + (activeMenuItem === "Classes" ? " blue" : "");

    // Flyout menu class names
    const toolsMenuCSSClass = this.cssClassForToolsMenu();
    const classesMenuCSSClass = this.cssClassForClassesMenu();
    const resourcesMenuCSSClass = this.cssClassForResourcesMenu();

    const { currentAccelerator } = this.props;

    return (
      <div id="flyout-menu-container" className={bgColorCSSClass}>

        <nav>
          <ul
            className="menu-item-list"
            onMouseLeave={e => this.handleNavigationMenuMouseLeave()}
          >

            {/* Tools */}
            <li
              className="menu-item menu-item--tools"
              onMouseLeave={e => this.handleMenuItemMouseLeave("Tools")}
              onMouseEnter={e => this.handleMenuItemMouseEnter("Tools")}
            >
              <label>TOOLS</label>
              <div className={toolsMenuCSSClass}>
                <ToolsFlyout />
              </div>
            </li>

            {/* Resources */}
            <li
              className="menu-item menu-item--resources"
              onMouseLeave={e => this.handleMenuItemMouseLeave("Resources")}
              onMouseEnter={e => this.handleMenuItemMouseEnter("Resources")}
            >
              <label> RESOURCES </label>
              <div className={resourcesMenuCSSClass}>
                <ResourcesFlyout />
              </div>
            </li>

            {/* Classes */}
            <li
              className="menu-item menu-item--classes"
              onMouseLeave={e => this.handleMenuItemMouseLeave("Classes")}
              onMouseEnter={e => this.handleMenuItemMouseEnter("Classes")}
            >
              <label> CLASSES </label>
              <div className={classesMenuCSSClass}>
                <ClassesFlyout currentAccelerator={currentAccelerator} />
              </div>
            </li>

            {/* The flyout menu anchor */}
            <li className={flyoutMenuAnchorBoxClassName}>
              <img
                src={FLYOUT_ANCHOR}
                alt="flyout anchor"
                className="flyout-menu-anchor"
              />
              <img
                src={FLYOUT_ANCHOR_BLUE}
                alt="flyout anchor"
                className="flyout-menu-anchor flyout-menu-anchor--blue"
              />
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

FlyoutMenuNav.defaultProps = {
  displayForLightBg: true
};

FlyoutMenuNav.propTypes = {
  // affects the text colors of the menu
  displayForLightBg: PropTypes.bool,
  currentAccelerator: PropTypes.shape({
    accelerator_type: PropTypes.string.isRequired,
    goal: PropTypes.string.isRequired,
    num_seats_remaining: PropTypes.number.isRequired,
    sales_page_url: PropTypes.string.isRequired,
    enrollment_is_open: PropTypes.bool.isRequired
  }).isRequired
};

export default FlyoutMenuNav;
