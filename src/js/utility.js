import {GOOGLE_STORAGE_DOMAIN} from "./constants";

/*
 * Utility functions
 */

const WHITE_ACCEL_LOGOS_BASE_URL = `${GOOGLE_STORAGE_DOMAIN}/icons/accelerators`;
const WHITE_ACCEL_LOGOS = {
  Partnership: `${WHITE_ACCEL_LOGOS_BASE_URL}/partnership-white.svg`,
  Conversion: `${WHITE_ACCEL_LOGOS_BASE_URL}/conversion-white.svg`,
  Launch: `${WHITE_ACCEL_LOGOS_BASE_URL}/launch-white.svg`,
  Hiring: `${WHITE_ACCEL_LOGOS_BASE_URL}/hiring-white.svg`,
  Webinar: `${WHITE_ACCEL_LOGOS_BASE_URL}/webinar-white.svg`,
  "High Ticket": `${WHITE_ACCEL_LOGOS_BASE_URL}/high-ticket-white.svg`
};

const FALLBACK_ICON = `${GOOGLE_STORAGE_DOMAIN}/icons/GT-White.svg`;

/**
 * @param {string} type - The accelerator type
 * @returns {string} The path or base64 of the accelerator's white icon.
 * The value will be base64 if the size of the image is less than the limit
 * set for the file-loader in webpack.config.js.
 */
export function whiteIconSrcForAcceleratorType(type) {
  let acceleratorIconUrl = WHITE_ACCEL_LOGOS[type];

  if (!acceleratorIconUrl) {
    acceleratorIconUrl = FALLBACK_ICON;
    console.warn(
      `Accelerator type "${type}" is not recognized!
                Expected "Partnership" or "List Building" or "Conversion"`
    );
  }

  return acceleratorIconUrl;
}
