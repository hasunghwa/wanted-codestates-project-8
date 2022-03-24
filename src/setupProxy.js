const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/openapi-json/pubdata/pubMapForest.do", {
      target: "https://www.chungbuk.go.kr",
      changeOrigin: true,
    })
  );
};
