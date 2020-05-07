const WORKWITHUS_URL = "https://lp.growthtools.com/apply-course?utm_source=";
const WORKWITHUS_UTM_SOURCE = window.location.pathname == "/" ? "GT-Website-Nav" : window.location.pathname;
const WORKWITHUS_UTM_CONTENT = "?utm_content=";
const CONCAT = WORKWITHUS_URL + WORKWITHUS_UTM_SOURCE + WORKWITHUS_UTM_CONTENT;

const WORKWITHUS_HREF_MOBILE = CONCAT + "mobile-menu-link";
const WORKWITHUS_HREF_DESKTOP = CONCAT + "work-with-me-button";

export { WORKWITHUS_HREF_DESKTOP, WORKWITHUS_HREF_MOBILE }
