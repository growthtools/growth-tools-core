function generateUTMparams(type, pathname) {
  const workWithUsURL = "https://lp.growthtools.com/apply-course?utm_source=";
  const workWithUsUTMsource = pathname;
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
