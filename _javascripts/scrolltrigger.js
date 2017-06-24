var ScrollTrigger = require('../node_modules/scrolltrigger-classes/ScrollTrigger.js')

document.addEventListener('turbolinks:load', function() {
  var trigger = new ScrollTrigger({
                    centerVertical: true,
                    addHeight: false,
                    once: true
                  }, document.body, window)
});
