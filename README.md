# @growth-tools/core npm package

This npm package contains functions and React components shared across Growth Tools domains.

## How to use

### Install @growth-tools/core

`$ npm install --save @growth-tools/core`

### Import dependencies

*Example*

```
import React from "react";
import ReactDOM from "react-dom";

// Import a React component and its styles.
import { Footer } from "@growth-tools/core";
import "@growth-tools/core/dist/main.css";


ReactDOM.render(<Footer />, document.getElementById("footer-root"));

```

As demonstrated above, remember to also import `@growth-tools/core/dist/main.css` if you're importing a React component.

## Functions

### insertReactComponentIntoRoot

A convenience function for inserting React components into the DOM.

#### Signature

`insertReactComponentIntoRoot(ReactComponent, rootCSSSelector, props): void`

### Parameters

`ReactComponent {React component class}`: The class of the React component to be inserted

`rootCSSSelector {string}`: The CSS selector of the DOM node acting as the root for the component

`props {object}`: Passed to the component's `props`

### Example Usage

```
import {insertReactComponentIntoRoot} from "@growth-tools/core";

const MyComponent = ...; // Some React component class


insertReactComponentIntoRoot(<MyComponent />, "root-node", { value: "123" });
```

## React Components

### Header

Displays a Growth Tools logo linking to the Growth Tools home page and navigation menus.

#### Prop Types

`lightsAreOn`
- Affects the colors of the header elements. `true` assumes a page with a light background and is the default value.

`currentAccelerator`
- Data for the Growth Tools accelerator currently open for enrollment. Necessary for the `CLASSES` flyout menu displayed by the header.

#### Prop Types Definition

```
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
```

#### Example Usage

```
import { Header } from "@growth-tools/core";
import "@growth-tools/core/dist/main.css";

const CURRENT_ACCELERATOR = { ... };

ReactDOM.render(
  <Header currentAccelerator={CURRENT_ACCELERATOR} />,
  document.getElementById("header-root")
);
```


### Footer

Displays navigation links, user sign-in, copyright, and privacy policy.

#### Prop Types

`lightsAreOn`
- Affects the colors of the header elements. `true` assumes a page with a light background and is the default value.

#### Prop Types Definition

```
Footer.defaultProps = {
  lightsAreOn: true
};

Footer.propTypes = {
  lightsAreOn: PropTypes.bool.isRequired
};
```

#### Example Usage

```
import { Footer } from "@growth-tools/core";
import "@growth-tools/core/dist/main.css";

ReactDOM.render(
  <Footer />,
  document.getElementById("footer-root")
);
```

## Using Font Assets

**@growth-tools/core** provides files for the Brandon Text fonts used by the React components.

In the (unlikely) event these font files are not already included in the consuming project, either copy them from this package into the proper directory or refer to the example stylesheet at `/src/scss/EXAMPLE_FONTS_FILE.scss`.


## How to test locally

1. Clone this repository to your local machine.
2. Navigate to the `core` directory and install dependencies:
```
$ cd /path/to/@growth-tools/core
$ npm install
```
3. Link the package to your local test project:
```
$ npm link; # while still in @growth-tools/core directory
$ cd /path/to/local/test/project
$ npm link @growth-tools/core
```
(Documentation for [`npm link`](https://docs.npmjs.com/cli/link.html)).

4. The package should now be accessible to your local project for testing. Use as described above.
