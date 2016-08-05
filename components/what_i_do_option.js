const m = require('mithril');

// args:
// iconUrl, nameText, descriptionText
var WhatIDoOption = {
  controller: function(args) {
    return {};
  },

  view: function(ctrl, args) {
    return m('.what-i-do-option', [
      m('img', {class: 'icon', src: args.iconUrl}),
      m('.name', args.nameText),
      m('.description', args.descriptionText)
    ]);
  }
};

module.exports = WhatIDoOption;