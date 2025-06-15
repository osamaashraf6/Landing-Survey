const globalService = {
  // baseUrl
  baseUrl: `${import.meta.env.VITE_BASE_URL}`,
  //   Routes
  routes: {
    users: "/api/v1/users",
    auth: "/api/v1/auth",
    addresses: "/api/v1/addresses",
    survey: "/api/v1/survey",
  },
  //   domainImgs
  userImg: `${import.meta.env.VITE_BASE_URL}/users/`,
  surveyImg: `${import.meta.env.VITE_BASE_URL}/survey/`,
  //   ApiKey
};

export default globalService;
