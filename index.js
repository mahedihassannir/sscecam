const http = require("http");
const app = require("./app/app");
const chalk = require("chalk");
const port = 5000;

const server = http.createServer(app);


server.listen(port, () => {
    console.log(chalk.bgBlue("server is running"))
});
