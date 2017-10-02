var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  if (req.query.type == "default")
    signIn(req.body.username, req.body.password);
  else
    throw "Not implemented yet.";

  res.status(200);
});

function signIn(username, password) {
  if (!username) throw "Username is required.";
  if (!password) throw "Password is required.";
  // TODO Add password validation.

  // TODO Authenticate user.
}

function signInWithFacebook() {

}

function signInWithGoogle() {

}

module.exports = router;
