import React from "react";
import PropTypes from "prop-types";
import {GOOGLE_STORAGE_DOMAIN} from "../../../js/constants";
import styles from "./styles.scss";

const MENU_ICON = `${GOOGLE_STORAGE_DOMAIN}/icons/menu-green.svg`;

/**
 * The CTA button appearing at the bottom of the flyout menus
 * on mobile layouts.
 */
const CTAButton = ({
  label,
  href
}) => (
  <a className={styles["flyout-cta-btn"]} href={href}>
    <img src={MENU_ICON}alt="list icon"/>
    {label}
  </a>
);

CTAButton.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default CTAButton;
