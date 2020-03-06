import React from "react";
import PropTypes from "prop-types";
import sharedStyles from "../shared-styles.scss";
import styles from "./styles.scss";
import {GOOGLE_STORAGE_DOMAIN} from "../../../js/constants";
import CTAButton from "../CTAButton/CTAButton";

const FLYOUT_ANCHOR = `${GOOGLE_STORAGE_DOMAIN}/icons/flyout-anchor.svg`;

const TOOL_LOGO_DRIP_SCRIPTS = `${GOOGLE_STORAGE_DOMAIN}/logo/tools/dripscripts.svg`;
const TOOL_LOGO_ATTRACT = `${GOOGLE_STORAGE_DOMAIN}/logo/tools/attract.svg`;
const TOOL_LOGO_GO_VIRAL = `${GOOGLE_STORAGE_DOMAIN}/logo/tools/goviral.svg`;
const TOOL_LOGO_LIST_GOAL = `${GOOGLE_STORAGE_DOMAIN}/logo/tools/listgoal.png`;
const TOOL_LOGO_ONE_CLICK = `${GOOGLE_STORAGE_DOMAIN}/logo/tools/oneclick.svg`;
const TOOL_LOGO_REMIND = `${GOOGLE_STORAGE_DOMAIN}/logo/tools/remind.svg`;
const TOOL_LOGO_WELCOMELY = `${GOOGLE_STORAGE_DOMAIN}/logo/tools/welcomely.svg`;
const TOOL_LOGO_AGENT = `${GOOGLE_STORAGE_DOMAIN}/logo/tools/agent.svg`;
const TOOL_LOGO_DONT_HIT_PUBLISH = `${GOOGLE_STORAGE_DOMAIN}/logo/tools/dont-hit-publish.svg`;

const POPULAR_TOOLS = {
  DripScripts: {
    toolUrl: "https://dripscripts.com/",
    logoSrc: TOOL_LOGO_DRIP_SCRIPTS,
    logoWidth: "236px",
    description: "Write high-converting email sequences in record time"
  },
  Attract: {
    toolUrl: "https://attract.io/",
    logoSrc: TOOL_LOGO_ATTRACT,
    logoWidth: "152px",
    description: "Create a lead magnet you’ll be pumped to share in minutes"
  },
  GoViral: {
    toolUrl: "https://goviral.growthtools.com/",
    logoSrc: TOOL_LOGO_GO_VIRAL,
    logoWidth: "129px",
    description: "Boost your traffic and shares with viral marketing campaigns"
  }
};

const OTHER_TOOLS = {
  ListGoal: {
    toolUrl: "https://listgoal.growthtools.com/",
    logoSrc: TOOL_LOGO_LIST_GOAL,
    logoWidth: "130px"
  },
  OneClick: {
    toolUrl: "https://oneclick.growthtools.com/",
    logoSrc: TOOL_LOGO_ONE_CLICK,
    logoWidth: "127px"
  },
  Remind: {
    toolUrl: "https://remind.growthtools.com",
    logoSrc: TOOL_LOGO_REMIND,
    logoWidth: "101px"
  },
  Welcomely: {
    toolUrl: "https://welcome.ly/",
    logoSrc: TOOL_LOGO_WELCOMELY,
    logoWidth: "131px"
  },
  Agent: {
    toolUrl: "https://agent.growthtools.com",
    logoSrc: TOOL_LOGO_AGENT,
    logoWidth: "83px"
  },
  DontHitPublish: {
    toolUrl: "https://donthitpublish.com/",
    logoSrc: TOOL_LOGO_DONT_HIT_PUBLISH,
    logoWidth: "143px"
  }
};

/******************************************** */

/**
 * A flyout menu for the Tools navigation item in the header
 * of the home page.
 */
function ToolsFlyout(props) {
  return (
    <div className={styles["tools-flyout"]}>

      {/* Most Popular Tools */}
      <section className={styles["tools-flyout__primary"]}>
        <h3 className={styles["tools-flyout__header"]}> MOST POPULAR TOOLS </h3>
        <ul className={styles["tools-flyout__popular-list"]}>
          {["DripScripts", "Attract", "GoViral"].map(popularToolListItem)}
        </ul>
      </section>

      {/* Other Tools */}
      <section className={styles["tools-flyout__secondary"]}>
        <h3 className={styles["tools-flyout__header"]}>OTHER TOOLS</h3>
        <ul className={styles["tools-flyout__other-list"]}>
          {[
            "ListGoal",
            "OneClick",
            "Remind",
            "Welcomely",
            "Agent",
            "DontHitPublish"
          ].map(otherToolListItem)}
        </ul>
      </section>

      {/* CTA button to replace secondary section on mobile layouts */}
      <div className={sharedStyles["tools-flyout__cta-btn"]}>
        <CTAButton
          label="Show all tools"
          href="/tools"
        />
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
 * @param {string} toolName: The tool the returned list item will represent.
 * @returns {JSX} A list item continaing a link to a popular tool.
 */
function popularToolListItem(toolName) {
  const tool = POPULAR_TOOLS[toolName];
  return (
    <li className={styles["tools-flyout__popular-list-item"]} key={toolName}>
      <a
        href={tool.toolUrl}
        target="_blank"
        className={styles["tools-flyout__popular-list-item-link"]}
      >
        <div style={{ position: "relative", display: "flex" }}>
          <img
            className={styles["popular-tool-logo"]}
            src={tool.logoSrc}
            alt={`${toolName} logo`}
          />
        </div>
        <p className={styles["tools-flyout__tool-description"]}>
          {tool.description}
        </p>
      </a>
    </li>
  );
}

/**
 * @param {string} toolName: The tool the returned list item will represent.
 * @returns {JSX} A list item with a link to a tool.
 */
function otherToolListItem(toolName) {
  const tool = OTHER_TOOLS[toolName];
  return (
    <li className={styles["tools-flyout__other-list-item"]} key={toolName}>
      <a
        href={tool.toolUrl}
        target="_blank"
        className={`${styles["tools-flyout__other-list-item-link"]} ${styles[toolName]}`}
      >
        <img
          style={{ width: tool.logoWidth }}
          src={tool.logoSrc}
          alt={`${toolName} logo`}
        />
      </a>
    </li>
  );
}

export default ToolsFlyout;
