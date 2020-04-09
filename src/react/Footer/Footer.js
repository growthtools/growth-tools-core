import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

import { GROWTH_TOOLS_DOMAIN, GOOGLE_STORAGE_DOMAIN } from "../../js/constants";

//
// Icons
//
const ICON_FACEBOOK = `${GOOGLE_STORAGE_DOMAIN}/icons/social/facebook-grey.svg`;
const ICON_FACEBOOK_DARK = `${GOOGLE_STORAGE_DOMAIN}/icons/social/facebook-blue@2x.png`;

const ICON_GROWTH_TOOLS = `${GOOGLE_STORAGE_DOMAIN}/icons/gt-bars-green@2x.png`;
const ICON_GROWTH_TOOLS_WHITE = `${GOOGLE_STORAGE_DOMAIN}/GT-icon@2x.png`;

//
// Text Links
//
const LINKS_FREE_TOOLS = [
  { name: "Attract", href: "https://attract.io" },
  { name: "Welcome.ly", href: "https://welcome.ly" },
  { name: "Go Viral", href: "https://wanttogoviral.com" },
  { name: "ListGoal", href: "https://listgoal.com" },
  { name: "Remind", href: "https://www.remindthem.com" },
  { name: "One Click", href: "https://getoneclick.com" },
  { name: "Don't Hit Publish", href: "https://donthitpublish.com" },
  { name: "DripScripts", href: "https://dripscripts.com" },
  { name: "Agent", href: "https://myspeakingagent.com" }
];

const LINKS_RESOURCES = [
  { name: "Blog", href: "https://blog.videofruit.com" },
  {
    name: "6-Part Email Sales Sequence",
    href: "https://dripscripts.growthtools.com/seq/product-launch/"
  },
  {
    name: "4 Plug-and-Play Lead Magnet Templates",
    href: "https://attract.growthtools.com"
  },
  {
    name: "5-Part High Ticket Sales Funnel Checklist",
    href: "https://videofruit.com/blog/high-ticket-sales/"
  }
];

const LINKS_TRAINING = [
  { name: "Growth University", href: `${GROWTH_TOOLS_DOMAIN}/training` },
  {
    name: "Partnership Accelerator",
    href: `${GROWTH_TOOLS_DOMAIN}/partnership-accelerator`
  },
  {
    name: "Conversion Accelerator",
    href: `${GROWTH_TOOLS_DOMAIN}/conversion-accelerator`
  },
  { name: "Hiring Accelerator", href: `${GROWTH_TOOLS_DOMAIN}/training` },
  { name: "Webinar Accelerator", href: `${GROWTH_TOOLS_DOMAIN}/training` },
  {
    name: "Launch Accelerator",
    href: `${GROWTH_TOOLS_DOMAIN}/launch-accelerator`
  },
  { name: "High Ticket Accelerator", href: `${GROWTH_TOOLS_DOMAIN}/training` }
];

/**
 * Page footer.
 * Displays Growth Tools copyright and links to tools, training, blogs,
 * and Privacy and Terms.
 */
function Footer(props) {
  const { lightsAreOn } = props;

  let footerCSSClassName, iconFacebook;

  // Set the CSS styles and icons according to "lights on" state:
  if (lightsAreOn) {
    footerCSSClassName = styles["lights-on"];
    iconFacebook = ICON_FACEBOOK;
  } else {
    footerCSSClassName = "";
    iconFacebook = ICON_FACEBOOK_DARK;
  }

  return (
    <footer className={footerCSSClassName}>

      {/* Social Links */}
      <div className={styles["social-links"]}>
        <a
          href="https://facebook.com/growthtool"
          className={styles["link-secondary"]}
        >
          <img src={iconFacebook} alt="Facebook icon" />
        </a>
        {/*
        <a href="https://instagram.com/growthtools" className="link-secondary">
          <img src={iconInstagram} alt="Instagram icon" />
        </a>
        <a href="https://twitter.com/growthtools" className="link-secondary">
          <img src={iconTwitter} alt="Twitter icon" />
        </a>
        */}
      </div>

      <div className={styles["menu-section"]}>
        {/* FREE TOOLS SECTION */}
        <section className={styles["menu-group"]}>
          <h4>
            <a href={`${GROWTH_TOOLS_DOMAIN}/tools`}>
              TOOLS
            </a>
          </h4>
          <ul className={styles["nav-list"]}>
            {LINKS_FREE_TOOLS.map(getListItemLink)}
          </ul>
        </section>

        {/* RESOURCES SECTION */}
        <section className={styles["menu-group"]}>
          <h4>
            <a href="https://blog.videofruit.com">
              Resources
            </a>
          </h4>
          <ul
            className={[styles["nav-list"], styles["nav-list--resources"]].join(
              " "
            )}
          >
            {LINKS_RESOURCES.map(getListItemLink)}
          </ul>
        </section>

        {/* TRAINING SECTION */}
        <section className={styles["menu-group"]}>
          <h4>
            <a href={`${GROWTH_TOOLS_DOMAIN}/training`}>
              Classes
            </a>
          </h4>
          <ul
            className={[styles["nav-list"], styles["nav-list--training"]].join(
              " "
            )}
          >
            {LINKS_TRAINING.map(getListItemLink)}
          </ul>
        </section>

        {/* COACHING SECTION */}
        <section className={styles["menu-group"]}>
          <h4>
            <a href="https://growthtools.com/apply">
              Coaching
            </a>
          </h4>
          <ul className={styles["nav-list"]}>
            <li>
              <a
                href="https://growthtools.com/apply"
                className={styles["link-secondary"]}
              >
                Schedule a consult
              </a>
            </li>
            <li>
              <a
                href={`${GROWTH_TOOLS_DOMAIN}/goal`}
                className={styles["link-secondary"]}
              >
                $100M Client Growth Counter
              </a>
            </li>
          </ul>
        </section>

        {/* User Action Buttons
          * Sign In + Create Account */}
        <div className={styles["user-actions"]}>
          <a
            className={styles["user-actions__btn-signin"]}
            href={`${GROWTH_TOOLS_DOMAIN}/signin`}
          >
            Sign in
          </a>
          <a
            className={styles["user-actions__btn-create-account"]}
            href={`${GROWTH_TOOLS_DOMAIN}/register`}
          >
            Create Account
          </a>
        </div>

        {/* BLOG SECTION */}
        {/*
          <section className="menu-group">
            <h4>
              <a href="/blog">
                  BLOG
              </a>
            </h4>
            <ul className="nav-list nav-list--blog">
              <li>
                <a href="#" className="link-secondary"></a>
              </li>
              <li>
                <a href="#" className="link-secondary"></a>
              </li>
              <li>
                <a href="#" className="link-secondary"></a>
              </li>
              <li>
                <a href="#" className="link-secondary"></a>
              </li>
            </ul>
          </section>
          */}
      </div>

      <div className={styles["lower"]}>
        <div className={styles["logo"]}>
          <img
            src={ICON_GROWTH_TOOLS}
            alt="Growth Tools bars"
            className={styles["not-mobile"]}
          />
          {lightsAreOn
            ? <img
                src={ICON_GROWTH_TOOLS}
                alt="Growth Tools"
                className={styles["mobile"]}
              />
            : <img
                src={ICON_GROWTH_TOOLS_WHITE}
                alt="Growth Tools"
                className={styles["mobile"]}
              />}
        </div>
        <div className={styles["copyright"]}>
          © {new Date().getFullYear()} <span>Growth Tools</span> •
          <a
            href="https://my.growthtools.com/terms"
            className={styles["link-secondary"]}
          >
            Privacy & Terms
          </a>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  lightsAreOn: true
};

Footer.propTypes = {
  lightsAreOn: PropTypes.bool.isRequired
};

/**
 * Convenience function for getting a list item text link.
 */
function getListItemLink({ name, href }) {
  return (
    <li>
      <a href={href} className="link-secondary"> {name} </a>
    </li>
  );
}

export default Footer;
