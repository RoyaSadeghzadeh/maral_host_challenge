// generate path
function generatePath(root, sublink) {
  return `${root}${sublink}`;
}

const ROOT = "/";
const ROOT_AUTH = "/auth/";
const ROOT_LANDING = "/landing/";

export const ROOT_PATHS = {
  root: ROOT,
  auth: {
    root: ROOT_AUTH,
    login: generatePath(ROOT_AUTH, "login"),
    signup: generatePath(ROOT_AUTH, "signup"),
    verification: generatePath(ROOT_AUTH, "verification"),
    sso: generatePath(ROOT_AUTH, "sso"),
  },
  landing: {
    root: ROOT_LANDING,
    dashboard: generatePath(ROOT_LANDING, "dashboard"),
  },
};
