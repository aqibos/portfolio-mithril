const m = require('mithril');

var Header = {
  controller: function(args) {
    return {};
  },

  view: function(ctrl, args) {
    return m('.header', {hidden: true}, 'Header');
  }
};

module.exports = Header;