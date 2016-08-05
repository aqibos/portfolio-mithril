const faker = require('faker');  //TODO: remove
const R     = require('ramda');

const m = require('mithril');
const WhatIDoOption = require('./what_i_do_option');

// TODO: remove
const options = R.times(() => { 
  return {  
    iconUrl: faker.image.imageUrl(),
    nameText: faker.lorem.word(),
    descriptionText: faker.lorem.sentence() 
  };
}, 4);


var WhatIDo = {
  controller: function(args) {
    return {};
  },

  view: function(ctrl, args) {
    return m('.what-i-do', [
      m('.title', 'Title'),
      m('.subtitle', 'Subtitle'),
      m('.options', options.map(o => m.component(WhatIDoOption, o)))
    ]);
  }
};

module.exports = WhatIDo;