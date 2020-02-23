import React from "react";
import sharedStyles from "../shared-styles.scss";
import styles from "./styles.scss";
import {GOOGLE_STORAGE_DOMAIN} from "../../../js/constants";
import CTAButton from "../CTAButton/CTAButton";

const IMG_FLYOUT_ANCHOR = `${GOOGLE_STORAGE_DOMAIN}/icons/flyout-anchor.svg`;
const IMG_EMAIL_SEQUENCE = `${GOOGLE_STORAGE_DOMAIN}/resources/email-sequence.svg`;
const IMG_LEAD_MAGNET = `${GOOGLE_STORAGE_DOMAIN}/resources/lead-magnets.svg`;
const IMG_FUNNEL = `${GOOGLE_STORAGE_DOMAIN}/resources/funnel.svg`;


const RECENT_BLOG_POSTS = [
  {
    name: "30-Day Drip Email Sequence Challenge",
    pageUrl: "https://videofruit.com/blog/drip-campaign/"
  },
  {
    name: "Easy Website Optimization: 3 Fast Steps to Generating More Leads and Sales",
    pageUrl: "https://videofruit.com/blog/website-optimization/"
  },
  {
    name: "Viral Marketing: 4 templates to use for more traffic and shares",
    pageUrl: "https://videofruit.com/blog/viral-marketing-campaign/"
  },
  {
    name: "This Virtual Summit Checklist = 25,000 email subscribers",
    pageUrl: "https://videofruit.com/blog/virtual-summit/"
  },
  {
    name: "Download 11 Killer Lead Magnet Ideas & Templates",
    pageUrl: "https://videofruit.com/blog/lead-magnet/"
  },
  {
    name: "The Ultimate Product Launch Plan: How We Made $220,750 with a New Product",
    pageUrl: "https://videofruit.com/blog/product-launch/"
  }
];

/**
 * A flyout menu for the Resources navigation item in the header
 * of the home page.
 */
function ResourcesFlyout() {
  return (
    <div className={styles["resources-flyout"]}>

      {/* List of most popular resources */}
      <section className={styles["resources-flyout__primary"]}>
        <h3 className={styles["resources-flyout__header"]}> MOST POPULAR RESOURCES </h3>
        <ul className={styles["resources-flyout__popular"]}>
          <li>
            <a
              href="https://dripscripts.growthtools.com/seq/product-launch/"
              className={styles["resources-flyout__popular-link"]}
            >
              <div className={styles["image-wrapper"]}>
                <img
                  src={IMG_EMAIL_SEQUENCE}
                  alt="email sequence image"
                />
              </div>
              <label>
                6-PART EMAIL SALES SEQUENCE
              </label>
            </a>
          </li>
          <li>
            <a
              href="https://attract.growthtools.com/"
              className={styles["resources-flyout__popular-link"]}
            >
              <div className={styles["image-wrapper"]}>
                <img
                  src={IMG_LEAD_MAGNET}
                  alt="lead magnets image"
                />
              </div>
              <label>
                4 PLUG-AND-PLAY LEAD MAGNET TEMPLATES
              </label>
            </a>
          </li>
          <li>
            <a
              href="https://videofruit.com/blog/high-ticket-sales/"
              className={styles["resources-flyout__popular-link"]}
            >
              <div className={styles["image-wrapper"]}>
                <img
                  src={IMG_FUNNEL}
                  alt="funnel image"
                />
              </div>
              <label>
                5-PART HIGH TICKET SALES FUNNEL CHECKLIST
              </label>
            </a>
          </li>
        </ul>
      </section>

      {/* Links to other recent blog posts */}
      <section className={styles["resources-flyout__secondary"]}>
        <h3 className={styles["resources-flyout__header"]}>MORE RESOURCES (FROM THE BLOG)</h3>
        <ol className={styles["recent-posts-list--left"]}>
          {RECENT_BLOG_POSTS.slice(0, 3).map(recentBlogPostListItem)}
        </ol>
        <ol className="styles__recent-posts-list--right">
          {RECENT_BLOG_POSTS.slice(3).map(recentBlogPostListItem)}
        </ol>
      </section>

      {/* CTA button to replace secondary section on mobile layouts */}
      <div className={sharedStyles["tools-flyout__cta-btn"]}>
        <CTAButton
          label="Show all resources"
          href="https://blog.growthtools.com"
        />
      </div>

      {/* Mobile anchor icon */}
      <img
        src={IMG_FLYOUT_ANCHOR}
        alt="flyout anchor"
        className={sharedStyles["flyout-menu-anchor--mobile"]}
      />
    </div>
  );
}

/**
 * @param {string} blogPost: The blog post represented by the returned list item.
 * @returns {JSX} A list item providing a link to the blog post.
 */
function recentBlogPostListItem(blogPost) {
  return (
    <li className={styles["recent-posts-list-item"]} key={blogPost.name}>
      <a href={blogPost.pageUrl} className={styles["recent-posts-list-item__link"]}>
        {blogPost.name}
      </a>
    </li>
  );
}

export default ResourcesFlyout;
