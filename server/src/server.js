const http = require("http");

const app = require("./app");

const { loadplanetsData } = require("./models/planets.models");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startSever() {
  await loadplanetsData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

startSever();
