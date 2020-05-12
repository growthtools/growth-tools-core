function generateUTMsource(pathname) {
  if (pathname == "/blog/covid-mastermind/") { // example
    return pathname + "posted-on-twitter-may2020"; //add custom UTM source here
  } else {
    return pathname; // then this is the default
  }
}

function getValues(pathname) {
  return "https://lp.growthtools.com/apply-course?utm_source=" + generateUTMsource(pathname) + "?utm_content=";
}

function generatedesktopUTMparams(pathname) {
  return getValues(pathname) + "work-with-me-button";  
}

function generatemobileUTMparams(pathname) {
  return getValues(pathname) + "mobile-menu-link";
}

export { generatedesktopUTMparams, generatemobileUTMparams }
