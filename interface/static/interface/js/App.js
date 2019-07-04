var App = function() {
var self = this;
var self.userId = undefined;
var self.appSessionId = undefined;

// create user, app session & get ids
  logIn = function() {
    fetch('/log_in/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json' // should this be in quotes?
      },
      body: JSON.stringify({
        'username': 'username_' + toString(Date.now()), // should this be in quotes?
        'password': 'password'
      })
    }).then(
      json = response.json();
      self.userId = json.user.id;
      self.appSessionId = json.app_session.id;
    );
  }
  self.logIn()
}
