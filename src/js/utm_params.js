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
  let workWithUsUTMsource = generateUTMsource(pathname);
  const workWithUsURL = "https://lp.growthtools.com/apply-course?utm_source=";
  const workWithUsUTMcontent = "?utm_content=";
  const combined = workWithUsURL + workWithUsUTMsource + workWithUsUTMcontent;
  return combined
}

function generatedesktopUTMparams(pathname) {
  let concat = getValues(pathname);
  const workWithUsDesktop = concat + "work-with-me-button-2";  
  return workWithUsDesktop
}

function generatemobileUTMparams(pathname) {
  let concat = getValues(pathname);
  const workWithUsMobile = concat + "mobile-menu-link-2";
  return workWithUsMobile 
}

export { generatedesktopUTMparams, generatemobileUTMparams }
