var App = function() {
  var self = this;
  self.userId = undefined;
  self.appSessionId = undefined;

// create user, app session & get ids
  logIn = function() {
    fetch('/log_in/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'username': 'username',
        'password': 'password'
      })
    }).then(
      response => response.json()
    ).then(json => {
      console.log(json);
      self.userId = json.user.id;
      self.appSessionId = json.app_session.id;
    });
  }
  logIn()
}
