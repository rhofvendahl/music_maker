var Device = function() {
  var self = this;
  var on = False;

  self.longSqueeze = function() {
    var on = !on;
  };

  self.squeeze = function() {
    timestamp = Date.now()
    if (self.on) {
      fetch('/signal', {
        method: 'POST',
        body: JSON.stringify(timestamp)
      });
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
