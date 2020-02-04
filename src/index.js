import React from "react";
import ReactDOM from "react-dom";

import Header from "./react/Header/Header"
import Footer from "./react/Footer/Footer"

import { logNoNodeForSelectorWarning } from "./js/logs";

import "./scss/main.scss";

/**
 * Inserts a React component into a DOM node.
 *
 * @param {class} ReactComponent - The class of the React component to insert
 * @param {string} rootCSSSelector - The CSS selector of the root DOM node for the component
 */
function insertReactComponentIntoRoot(ReactComponent, rootCSSSelector, props) {
  const rootElement = document.querySelector(rootCSSSelector);
  if (rootElement) {
    ReactDOM.render(<ReactComponent {...props} />, rootElement);
  } else {
    logNoNodeForSelectorWarning(rootCSSSelector);
  }
}

const GROWTH_TOOLS_CORE = {
  insertReactComponentIntoRoot,

  // React components
  Header,
  Footer
};

// Named Exports
export {insertReactComponentIntoRoot};
export {Header};
export {Footer};

// Default Export
export default GROWTH_TOOLS_CORE;
