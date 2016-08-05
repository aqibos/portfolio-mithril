const m = require('mithril');

// const ROOT = './components';

const Header         = require('./components/header');
const Banner         = require('./components/banner');
const WhatIDo        = require('./components/what_i_do');
const Myself         = require('./components/myself');
const MyFolio        = require('./components/my_folio');
const Projects       = require('./components/projects');
const Skills         = require('./components/skills');
const ContactForm    = require('./components/contact_form');
const ContactDetails = require('./components/contact_details');
const Footer         = require('./components/footer');

m.mount(getElementById('header'),          Header);
m.mount(getElementById('banner'),          Banner);
m.mount(getElementById('what-i-do'),       WhatIDo); 
m.mount(getElementById('myself'),          Myself);
m.mount(getElementById('my-folio'),        MyFolio);
m.mount(getElementById('projects'),        Projects);
m.mount(getElementById('skills'),          Skills);
m.mount(getElementById('contact-form'),    ContactForm);
m.mount(getElementById('contact-details'), ContactDetails);
m.mount(getElementById('footer'),          Footer);

function getElementById(elemId) {
  return document.getElementById(elemId);
}

  
