const m = require('mithril');

var Banner = {
  controller: function(args) {
    return {};
  },

  view: function(ctrl, args) {
    return m('.banner', 
      m('.banner-container', [
        m('.logo', 'Logo'),
        m('.title1', 'Title 1'),
        m('.title2', 'Title 2'),
        m('.subtitle', 'Subtitle'),
        m('.quick-menu', [
          m('.option1', 'Option 1'),
          m('.option2', 'Option 2'),
          m('.option3', 'Option 3'),
          m('.option4', 'Option 4')
        ]),
      ])
    );
  }
};

module.exports = Banner;