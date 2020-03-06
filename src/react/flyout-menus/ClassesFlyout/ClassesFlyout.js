import React from "react";
import PropTypes from "prop-types";
import sharedStyles from "../shared-styles.scss";
import styles from "./styles.scss";
import CTAButton from "../CTAButton/CTAButton";
import {
  GROWTH_TOOLS_DOMAIN,
  GOOGLE_STORAGE_DOMAIN
} from "../../../js/constants";

import { whiteIconSrcForAcceleratorType } from "../../../js/utility";

const FLYOUT_ANCHOR = `${GOOGLE_STORAGE_DOMAIN}/icons/flyout-anchor-blue.svg`;

const ACCELERATOR_ICON_HIRING = `${GOOGLE_STORAGE_DOMAIN}/logo/accelerators/hiring.svg`;
const ACCELERATOR_ICON_LAUNCH = `${GOOGLE_STORAGE_DOMAIN}/logo/accelerators/launch.svg`;
const ACCELERATOR_ICON_HIGH_TICKET = `${GOOGLE_STORAGE_DOMAIN}/logo/accelerators/high-ticket.svg`;
const ACCELERATOR_ICON_WEBINAR = `${GOOGLE_STORAGE_DOMAIN}/logo/accelerators/webinar.svg`;
const ACCELERATOR_ICON_PARTNERSHIP = `${GOOGLE_STORAGE_DOMAIN}/logo/accelerators/partnership.svg`;
const ACCELERATOR_ICON_CONVERSION = `${GOOGLE_STORAGE_DOMAIN}/logo/accelerators/conversion.svg`;

const ACCELERATORS = {
  Hiring: {
    pageUrl: `${GROWTH_TOOLS_DOMAIN}/training`,
    logoSrc: ACCELERATOR_ICON_HIRING
  },
  Launch: {
    pageUrl: `${GROWTH_TOOLS_DOMAIN}/launch-accelerator`,
    logoSrc: ACCELERATOR_ICON_LAUNCH
  },
  HighTicket: {
    pageUrl: `${GROWTH_TOOLS_DOMAIN}/training`,
    logoSrc: ACCELERATOR_ICON_HIGH_TICKET
  },
  Webinar: {
    pageUrl: `${GROWTH_TOOLS_DOMAIN}/training`,
    logoSrc: ACCELERATOR_ICON_WEBINAR
  },
  Partnership: {
    pageUrl: `${GROWTH_TOOLS_DOMAIN}/partnership-accelerator`,
    logoSrc: ACCELERATOR_ICON_PARTNERSHIP
  },
  Conversion: {
    pageUrl: `${GROWTH_TOOLS_DOMAIN}/conversion-accelerator`,
    logoSrc: ACCELERATOR_ICON_CONVERSION
  }
};

/**
 * A flyout menu for the Classes navigation item in the header
 * of the home page. Displays the single accelerator currently
 * open for enrollment and links to the other accelerators.
 */
function ClassesFlyout(props) {
  if (!props.currentAccelerator) {
    console.error(
      "Cannot render ClassesFlyout Component: props.currentAccelerator is not defined!"
    );
    return null;
  }

  const {
    goal,
    accelerator_type,
    num_seats_remaining,
    sales_page_url,
    enrollment_is_open
  } = props.currentAccelerator;

  return (
    <div className={styles["classes-flyout"]}>

      {/* Primary (light blue) section
        *
        * Accelerator open for enrollment
        *
        */}
      <section className={styles["classes-flyout__primary"]}>
        <h3 className={styles["classes-flyout__header"]}>
          ENROLLING
          {" "}
          {enrollment_is_open ? "NOW" : "SOON"}
        </h3>
        <div className={styles["current-accelerator"]}>
          <img
            className={styles["current-accelerator__icon"]}
            src={whiteIconSrcForAcceleratorType(accelerator_type)}
            alt="accelerator icon"
          />
          <section className={styles["current-accelerator__main"]}>
            <h4 className={styles["current-accelerator__type"]}>
              {`${accelerator_type} ACCELERATOR`.toUpperCase()}
            </h4>
            <p className={styles["current-accelerator__name"]}>
              {goal}
            </p>
          </section>
          <p className={styles["current-accelerator__seats-remaining"]}>
            {`${num_seats_remaining} seat${num_seats_remaining === 1 ? "" : "s"} ${enrollment_is_open ? "remaining" : "will be available"}`}
          </p>
          <a className={styles["current-accelerator__link"]} href={sales_page_url}>
            <span> Learn more </span>
          </a>
        </div>
      </section>

      {/* Secondary section
        * 
        * List of links to other accelerators
        */}
      <section className={styles["classes-flyout__secondary"]}>
        <h3 className={styles["classes-flyout__header"]}>
          UPCOMING 4-WEEK CLASSES
        </h3>
        <ul className={styles["accelerator-list"]}>
          {[
            "Hiring",
            "Launch",
            "HighTicket",
            "Webinar",
            "Partnership",
            "Conversion"
          ].map(acceleratorListItem)}
        </ul>
      </section>

      {/* CTA button to replace secondary section on mobile layouts */}
      <div className={sharedStyles["tools-flyout__cta-btn"]}>
        <CTAButton label="Show all marketing classes" href="/training" />
      </div>

      {/* Mobile anchor icon */}
      <img
        src={FLYOUT_ANCHOR}
        alt="flyout anchor"
        className={sharedStyles["flyout-menu-anchor--mobile"]}
      />
    </div>
  );
}

/**
 * @param {string} acceleratorName: The accelerator represented by the returned list item.
 * @returns {JSX} A list item providing a link to an accelerator page.
 */
function acceleratorListItem(acceleratorName) {
  const accelerator = ACCELERATORS[acceleratorName];
  return (
    <li className={styles["accelerator-list-item"]} key={acceleratorName}>
      <a href={accelerator.pageUrl} className={styles["accelerator-list-item__link"]}>
        <img src={accelerator.logoSrc} alt={`${acceleratorName} logo`} />
      </a>
    </li>
  );
}

ClassesFlyout.propTypes = {
  currentAccelerator: PropTypes.shape({
    accelerator_type: PropTypes.string.isRequired,
    goal: PropTypes.string.isRequired,
    num_seats_remaining: PropTypes.number.isRequired,
    sales_page_url: PropTypes.string.isRequired,
    enrollment_is_open: PropTypes.bool.isRequired
  }).isRequired
};

export default ClassesFlyout;
