const globalService = {
  // baseUrl
  baseUrl: `${import.meta.env.VITE_BASE_URL}`,
  //   Routes
  routes: {
    preview: "/questions",
    publishLink: "/survey/survey",
    auth: "/auth",
    addresses: "/addresses",
    survey: "/survey",
  },
  //   domainImgs
  userImg: `${import.meta.env.VITE_BASE_URL}/users/`,
  surveyImg: `${import.meta.env.VITE_BASE_URL}/survey/`,
  //   ApiKey
};

export default globalService;
