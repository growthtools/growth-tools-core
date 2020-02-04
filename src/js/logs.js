/**
 * Message logging functions
 */
import {PACKAGE_NAME} from "./constants";

export function logNoNodeForSelectorWarning(cssSelector) {
  console.warn(`${PACKAGE_NAME}:
    Cannot insert React component.
    No DOM node matches query selector "${cssSelector}".`);
}
