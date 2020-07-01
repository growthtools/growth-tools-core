const BASE_URL = "https://lp.growthtools.com/apply-course";
const DESKTOP_SOURCE = "GT-Nav-Button";
const MOBILE_SOURCE = DESKTOP_SOURCE + "-Mobile";

function workWithUsURLMobile(content, source = null) {
  const params = paramString(content, source || MOBILE_SOURCE);

  if (params === "") {
    return BASE_URL;
  }

  return `${BASE_URL}?${params}`;
}

function workWithUsURLDesktop(content, source = null) {
  let url = BASE_URL;
  const params = paramString(content, source || DESKTOP_SOURCE);

  if (params !== "") {
    url = `${url}?${params}`;
  }

  return url;
}

export { workWithUsURLDesktop, workWithUsURLMobile };

function paramString(content, source) {
  let params = new URLSearchParams();
  if (source !== "") {
    params.set("utm_source", source);
  }

  if (content !== "/" && content !== "") {
    params.set("utm_content", content);
  }

  return params.toString();
}
