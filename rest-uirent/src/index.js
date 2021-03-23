import express from "express";
import http from "http";

import config from "./config";
import routes from "./routes";

let app = express();
app.server = http.createServer(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json({
    limit: config.bodyLimit
}));

app.use("/", routes);
app.server.listen(config.port);

console.log("Started on port: " + app.server.address().port);
export default app;