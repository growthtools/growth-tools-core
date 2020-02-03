import React from "react";
import PropTypes from "prop-types";
import {GOOGLE_STORAGE_DOMAIN} from "../../js/constants";
import "./styles.scss";

import ToolsFlyout from "../flyout-menus/ToolsFlyout/ToolsFlyout";
import ResourcesFlyout from "../flyout-menus/ResourcesFlyout/ResourcesFlyout";
import ClassesFlyout from "../flyout-menus/ClassesFlyout/ClassesFlyout";

const CLOSE_ICON = `${GOOGLE_STORAGE_DOMAIN}/icons/close.svg`;
const MENU_ICON_DARK = `${GOOGLE_STORAGE_DOMAIN}/icons/hamburger-menu.svg`;
const MENU_ICON_LIGHT = `${GOOGLE_STORAGE_DOMAIN}/icons/hamburger-menu-white.svg`;

const GROWTH_TOOLS_LOGO_DARK = `${GOOGLE_STORAGE_DOMAIN}/logo/green-bars.svg`;
const GROWTH_TOOLS_LOGO_LIGHT = `${GOOGLE_STORAGE_DOMAIN}/logo/blue-bars.svg`;

const MENU_ITEM = {
  Tools: "Tools",
  Resources: "Resources",
  Classes: "Classes"
};

/**
 * A full-screen menu for mobile-width viewports and the hamburger menu button
 * that displays it.
 */
class MobileMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // controls the visibility of the entire menu
      menuIsVisible: false,
      // controls the visibility of the flyout sub-menus
      activeMenuItem: null
    };

    this.displayMenu = this.displayMenu.bind(this);
    this.dismissMenu = this.dismissMenu.bind(this);
    this.getMenuItems = this.getMenuItems.bind(this);
    this.handleMenuItemBtnClick = this.handleMenuItemBtnClick.bind(this);

    this.menuBodyRef = React.createRef();
  }

  componentDidMount() {
    this.logErrorIfCurrentAcceleratorDoesNotExist();
  }

  /**
   * MobileMenu expects that window.currentAccelerator is initialized.
   * This method prints an error if it's not.
   *
   * Primarily useful during development.
   */
  logErrorIfCurrentAcceleratorDoesNotExist() {
    if (!window.currentAccelerator) {
      console.error("currentAccelerator is not initialized!");
    }
  }

  displayMenu() {
    this.setState({ menuIsVisible: true });
  }

  dismissMenu() {
    this.setState({ menuIsVisible: false });
  }

  handleMenuItemBtnClick(menuItem) {
    this.scrollMenuToTop();
    this.setActiveMenuItem(menuItem);
  }

  /**
   * Scrolls menu to the top. This scroll is performed just before
   * a flyout menu is animated into view, which helps keep user from
   * losing orientation.
   */
  scrollMenuToTop() {
    const {current} = this.menuBodyRef;
    if (current) {
      current.scrollTo(0,0);
    }
  }

  /**
   * Sets the active menu item, causing that item's flyout menu
   * to animate into view. If the menu item is *already* active, then
   * it is unset.
   *
   * @param {string} - The menu item to activate or deactivate.
   */
  setActiveMenuItem(menuItem) {
    const {activeMenuItem} = this.state;
    if (menuItem === activeMenuItem) {
      this.setState({ activeMenuItem: null });
    } else {
      this.setState({ activeMenuItem: menuItem });
    }
  }

  /**
   * @returns {string} The proper CSS class for the given menu item.
   */
  getCSSClassForMenuItem(menuItem) {
    let cssClass = "flyout-list-item";

    if (menuItem === this.state.activeMenuItem) {
      return `${cssClass} flyout-list-item--active`;
    }
    return cssClass;
  }

  /**
   * The menu content depends on the logged-in status of the user.
   *
   * @returns {JSX} the appropriate menu content for the user
   */
  getMenuItems() {
    const userEmail = this.props.loggedInUserEmail;
    if (userEmail) {
      return this.getMenuItemsForLoggedInUser(userEmail);
    }
    return this.getMenuItemsForLoggedOutUser();
  }

  /**
   * @returns {JSX} the menu content for logged-out users
   */
  getMenuItemsForLoggedOutUser() {

    // Defensive programming for CLASSES menu link:
    //
    // If the current accelerator is not set on the window as it should,
    // then provide a direct link to the /training page instead of the
    // button link + Classes flyout menu.
    const {currentAccelerator} = window;
    const classesListItemContent = currentAccelerator ? (
      <React.Fragment>
        <button
          onClick={() => this.handleMenuItemBtnClick(MENU_ITEM.Classes)}>
          CLASSES
        </button>
        <div className="flyout-list-item__flyout">
          <ClassesFlyout currentAccelerator={currentAccelerator}/>
        </div>
      </React.Fragment>
    ) : (
      <a href="https://growthtools.com/training" style={{ textAlign: "center"}}> CLASSES </a>
    );

    const cssClassToolsItem = this.getCSSClassForMenuItem(MENU_ITEM.Tools);
    const cssClassResourcesItem = this.getCSSClassForMenuItem(MENU_ITEM.Resources);
    const cssClassClassesItem = this.getCSSClassForMenuItem(MENU_ITEM.Classes);

    return (
      <React.Fragment>
        <ul>
          <li className={cssClassToolsItem}>
            <button
              onClick={() => this.handleMenuItemBtnClick(MENU_ITEM.Tools)}>
              TOOLS
            </button>
            <div className="flyout-list-item__flyout">
              <ToolsFlyout />
            </div>
          </li>
          <li className={cssClassResourcesItem}>
            <button
              onClick={() => this.handleMenuItemBtnClick(MENU_ITEM.Resources)}>
              RESOURCES
            </button>
            <div className="flyout-list-item__flyout">
              <ResourcesFlyout />
            </div>
          </li>
          <li className={cssClassClassesItem}>

            {classesListItemContent}

          </li>
          <li> <a href="https://growthtools.com/apply"> COACHING </a> </li>
          <li> <a href="/signin"> SIGN IN </a> </li>
        </ul>
        <button
          className="btn btn-primary btn-create-account"
          style={{ padding: "5px" }}
        >
          Create Account
        </button>
      </React.Fragment>
    );
  }

  /**
   * @returns {JSX} the menu content for logged in users
   */
  getMenuItemsForLoggedInUser(userEmail) {
    return (
      <React.Fragment>
        <ul>
          <li> <a href="/action-guides"> ACTION GUIDES </a> </li>
          <li> <a href="/my-tools"> YOUR TOOLS </a> </li>
          <li> <a href="/my-training"> YOUR TRAINING </a> </li>
        </ul>
        <ul className="user-account-links">
          <li> <a href="/profile" className="link-user"> {userEmail} </a>  </li>
          <li> <a href="/signout" className="link-logout"> SIGN OUT </a>  </li>
        </ul>
      </React.Fragment>
    );
  }

  render() {
    const { menuIsVisible } = this.state;
    const { displayForLightBg } = this.props;

    const hamburgerIcon = displayForLightBg ? MENU_ICON_LIGHT : MENU_ICON_DARK;
    const menuItems = this.getMenuItems();

    return (
      <div id="mobile-menu-wrapper">

        {/* mobile menu hamburger button */}
        <button
          id="growth-tools-menu-btn"
          onClick={this.displayMenu}>
          <img
            src={hamburgerIcon}
            alt="Growth Tools Logo"
          />
        </button>

        {/* MOBILE MENU */}
        <div id="mobile-menu"
          className={menuIsVisible ? "visible" : ""}
          style={{ display: "block" }}>

          {/* Menu Header */}
          <div className="menu-header">
            <button className="btn-toggle" onClick={this.dismissMenu}>
              <img
                src={GROWTH_TOOLS_LOGO_DARK}
                alt="Growth Tools logo"
              />
            </button>
            <button className="btn-dismiss" onClick={this.dismissMenu}>
              <img src={CLOSE_ICON}alt="dismiss icon" />
            </button>
          </div>

          {/* Menu Body */}
          <div className="menu-body" ref={this.menuBodyRef}>
            {menuItems}

            {/* Menu Footer */}
            <div className="menu-footer">
              <img
                src={GROWTH_TOOLS_LOGO_DARK}
                alt="Growth Tools logo"
              />
              <div className="copyright-privacy-terms">
                © {new Date().getFullYear()} Growth Tools · <a>Privacy & Terms</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MobileMenu.defaultProps = {
  displayForLightBg: true
};

MobileMenu.propTypes = {
  displayForLightBg: PropTypes.bool.isRequired,
  loggedInUserEmail: PropTypes.string
};

export default MobileMenu;