var user = require('../models/user')

var authenticatedRoute = {
  statics: {
    willTransitionTo: function(transition) {
      return user.get().then(function(data) {
      }, function(err) {
      })
    }
  }
}

module.exports = authenticatedRoute
