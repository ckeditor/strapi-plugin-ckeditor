module.exports = {
  type: "admin",
  routes: [
    {
      method: "GET",
      path: "/config",
      handler: "config.index",
      config: {
        policies: [],
      },
    },
  ],
};
