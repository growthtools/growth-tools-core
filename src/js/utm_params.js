function generateUTMsource(pathname) {
  if (pathname == "/blog/covid-mastermind/") { // example
    let workWithUsUTMsource = pathname + "posted-on-twitter-may2020"; //add custom UTM source here
    return workWithUsUTMsource
  } else {
    let workWithUsUTMsource = pathname; // then this is the default
    return workWithUsUTMsource
  }
}

function getValues(pathname) {
  const workWithUsURL = "https://lp.growthtools.com/apply-course?utm_source=";
  const workWithUsUTMcontent = "?utm_content=";
  const combined = workWithUsURL + generateUTMsource(pathname) + workWithUsUTMcontent;
  return combined
}

function generatedesktopUTMparams(pathname) {
  const workWithUsDesktop = getValues(pathname) + "work-with-me-button-5";  
  return workWithUsDesktop
}

function generatemobileUTMparams(pathname) {
  const workWithUsMobile = getValues(pathname) + "mobile-menu-link-5";
  return workWithUsMobile 
}

export { generatedesktopUTMparams, generatemobileUTMparams }
