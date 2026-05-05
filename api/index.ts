import server from "../dist/server/server.js";

export default function handler(req, res) {
  return server(req, res);
}