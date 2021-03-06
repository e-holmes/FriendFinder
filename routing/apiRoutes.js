var friendsData = require("../app/data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    friendsData.push(req.body);
      res.json(true);
  });

  app.post("/api/clear", function(req, res) {
    friendsData.length = 0;

    res.json({ ok: true });
  });
};