const baseUrl = new URL(window.location.href);
const apiContext = baseUrl.protocol + '//' + baseUrl.host + '/api/am/store/v0.13';

export const ApiEndpoints = {
  apiContext: apiContext,
  authentication: {
    login: baseUrl.protocol + '//' + baseUrl.host +"/app-store/public/api/auth/login",
    logout: "./assets/files/logout.json",
    signup: "./assets/files/sign-up.json",
    changePassword: "./assets/files/sign-up.json",
    clientRegistration: baseUrl.protocol + '//' + baseUrl.host + '/client-registration/v0.13/register',
    tokenGeneration: baseUrl.protocol + '//' + baseUrl.host+ '/token',
  },
  apis: {
    search: apiContext + '/apis',
    apiOverview: apiContext + '/apis/',
    applications: apiContext + '/subscriptions',
    subscribe: "./assets/files/subscribe.json"
  },
  global: {
    countries:
      "https://raw.githubusercontent.com/pbakondy/mcc-mnc-list/master/mcc-mnc-list.json",
    tiers: "./assets/files/tiers.json"
  },
  applications: {
    getAllApplications: "./assets/files/applications.json",
    getSubscriptions: "./assets/files/subscriptions.json",
  },
  forum: {
    getAllTopics: "./assets/files/all-tpics.json",
    getOneTopic: "./assets/files/one-thread.json",
    deleteTopic: "./assets/files/delete-topic.json",
    create: "./assets/files/create-topic.json"
  }
};