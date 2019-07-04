var Device = function(app) {
  var self = this;
  self.on = false;
  self.app = app;
  self.DeviceSessionId = undefined;

  self.turnOn = function() {
    fetch('/turn_on/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'userId': self.app.userId,
        'appSessionId': self.app.appSessionId
      })
    }).then(
      response => response.json()
    ).then(json => {
      console.log(json);
      self.deviceSessionId = json.device_session.id;
    });
  };

  self.signal = function() {
    fetch('/signal/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'userId': self.app.userId,
        'deviceSessionId': self.deviceSessionId
      })
    });
  };

  self.turnOff = function() {
    fetch('/turn_off/', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'userId': self.userId,
        'appSessionId': self.app.appSessionId,
        'deviceSessionId': self.deviceSessionId
      })
    });
    self.deviceSessionId = undefined
  };

  self.longSqueeze = function() {
    self.on = !self.on;
    self.turnOn();
  };

  self.squeeze = function() {
    timestamp = Date.now()
    if (self.on) {
      self.signal();
      console.log('squeezedevice')
    }
  };

  // self.getTokenNode = function(id) {
  //   var match = null;
  //   self.tokenNodes.forEach(function(tokenNode) {
  //     if (tokenNode.id == id) match = tokenNode;
  //   });
  //   return match;
  // }
  //
  // // GENERATE TOKENNODES FROM TOKENS, render
  // self.importSubtree = function(tokens, token) {
  //   tokenNode = new TokenNode(self, token);
  //   self.tokenNodes.push(tokenNode);
  //   token.child_ids.forEach(function(childId) {
  //     self.importSubtree(tokens, tokens[childId])
  //   });
  // }
  //
  // self.renderSubtree = function(tokenNode) {
  //   tokenNode.render();
  //   tokenNode.children.forEach(function(child) {
  //     self.renderSubtree(child);
  //   });
  // }
  // //// BELONS HERE
  // // PROCESS QUERY, DISPLAY RESULTS
  // self.process = function(query) {
  //   console.log('process')
  //   fetch('/parse?query=' + query)
  //   .then(function(response) {
  //     return response.json();
  //   })
  //   .then(function(tokens) {
  //     self.tokenNodes = []
  //     tokens.forEach(function(token) {
  //       if (token.dep == 'ROOT') {
  //         self.importSubtree(tokens, token);
  //         self.renderSubtree(self.getTokenNode(token.id));
  //       }
  //     });
  //
  //     // remove additional nodes
  //     self.nodes.getIds().forEach(function(id) {
  //       if (!self.getTokenNode(id)) {
  //         self.nodes.remove(id);
  //       }
  //     });
  //   });
  // };
  //
  // //// BELONGS HERE
  // // COLLAPSE SUBTREE WHEN CLICKED
  // self.network.on('click', function(properties) {
  //   if (properties.nodes.length > 0) {
  //     tokenNode = self.getTokenNode(properties.nodes[0]);
  //     tokenNode.collapsed = !tokenNode.collapsed;
  //     self.renderSubtree(tokenNode);
  //   }
  // });
}
