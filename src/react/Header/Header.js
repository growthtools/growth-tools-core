import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import {GROWTH_TOOLS_DOMAIN, GOOGLE_STORAGE_DOMAIN} from "../../js/constants";

import FlyoutMenuNav from "../flyout-menus/FlyoutMenuNav/FlyoutMenuNav";
import MobileMenu from "../MobileMenu/MobileMenu";

const GROWTH_TOOLS_LOGO_DARK  = `${GOOGLE_STORAGE_DOMAIN}/logo/green-bars.svg`;
const GROWTH_TOOLS_LOGO_LIGHT = `${GOOGLE_STORAGE_DOMAIN}/logo/blue-bars.svg`;


/**
 * Page header. Displays link to Growth Tools home page and
 * primary navigation for Tools, Training, Blog, Sign-in, and
 * Account Creation.
 */
class Header extends React.Component {
  render() {
    const { lightsAreOn, currentAccelerator } = this.props;

    let headerCSSClassName = "", gtLogo = GROWTH_TOOLS_LOGO_DARK;
    if (lightsAreOn) {
      headerCSSClassName = "lights-on";
      gtLogo = GROWTH_TOOLS_LOGO_LIGHT;
    }

    return (
      <header className={headerCSSClassName}>

        <a id="growth-tools-link" href={GROWTH_TOOLS_DOMAIN}>
          <img src={gtLogo} alt="Growth Tools Logo" />
        </a>

        <FlyoutMenuNav
          displayForLightBg={lightsAreOn}
          currentAccelerator={currentAccelerator}
        />

        <a
          id="coaching-link"
          href="https://lp.growthtools.com/apply-course?utm_source=GT-Website-Nav"
          target="_blank"
        >
          COACHING
        </a>

        <MobileMenu displayForLightBg={lightsAreOn} />
      </header>
    );
  }
}

Header.defaultProps = {
  lightsAreOn: true
};

Header.propTypes = {
  lightsAreOn: PropTypes.bool.isRequired,
  currentAccelerator: PropTypes.shape({
    accelerator_type: PropTypes.string.isRequired,
    goal: PropTypes.string.isRequired,
    num_seats_remaining: PropTypes.number.isRequired,
    sales_page_url: PropTypes.string.isRequired,
    enrollment_is_open: PropTypes.bool.isRequired
  }).isRequired
};

export default Header;
