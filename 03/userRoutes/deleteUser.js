const data = require("../sql3data");
const url = require("url");

module.exports = (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const id = parseInt(req.url.split("/")[2]);
  const userDeleted = data.deleteUser(id);

  if (userDeleted) {
    res.writeHead(201);
    res.end(JSON.stringify({ message: "User is deleted" }));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: "User not found" }));
  }
};
