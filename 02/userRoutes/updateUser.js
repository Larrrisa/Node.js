const data = require("../data");
const url = require("url");

module.exports = (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const id = parseInt(path.split("/")[2]);

  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    try {
      console.log("Received body:", body);
      const updatedData = JSON.parse(body);
      const user = data.getUserById(id);

      if (user) {
        const updatedUser = data.updateUser(id, updatedData);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(updatedUser));
      } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "User not found" }));
      }
    } catch (error) {
      console.error(error);
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Invalid request body" }));
    }
  });
};
