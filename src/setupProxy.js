const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/proxy",
    createProxyMiddleware({
      target: "https://www.chungbuk.go.kr",
      changeOrigin: true,
    })
  );
};
