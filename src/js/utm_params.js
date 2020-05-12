function generateUTMparams(type, pathname) {
  
  function generateUTMsource() {
    if (pathname == "generated-path") {
      let workWithUsUTMsource = "add-custom-path-here"; //add custom UTM source here
      return workWithUsUTMsource
    } else {
      let workWithUsUTMsource = pathname;
      return workWithUsUTMsource
    }
  }
  
  let workWithUsUTMsource = generateUTMsource();
  
  const workWithUsURL = "https://lp.growthtools.com/apply-course?utm_source=";
  const workWithUsUTMcontent = "?utm_content=";
  const concat = workWithUsURL + workWithUsUTMsource + workWithUsUTMcontent;
  const workWithUsMobile = concat + "mobile-menu-link";
  const workWithUsDesktop = concat + "work-with-me-button";
  
  if (type == "mobile") {
    return workWithUsMobile
  } else if (type == "desktop") {
    return workWithUsDesktop
  } 
}

export { generateUTMparams }
