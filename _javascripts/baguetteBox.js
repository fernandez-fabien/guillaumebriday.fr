document.addEventListener("turbolinks:load", function() {
  var baguetteBox = require('../node_modules/baguettebox.js/dist/baguetteBox.js');

  baguetteBox.run('.gallery-grid', {
    animation: false,
    overlayBackgroundColor: 'rgba(0,0,0,0.9)',
  });
});
