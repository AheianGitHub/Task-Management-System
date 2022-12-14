var User = require("../Models/userAccounts");

function editProfile(request, res) {
  var username = request.body.username;
  var password = request.body.password;
  var email = request.body.email;

  User.editProfile(username, password, email, (err, dataHold) => {
    if (err) {
      return res.status(400).send(err);
    } else if (dataHold) {
      return res.sendStatus(200);
    } else if (!dataHold) {
      return res.sendStatus(400);
    }
  });
}

module.exports = { editProfile };
