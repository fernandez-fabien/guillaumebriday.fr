var CountUp = require('../node_modules/countup.js/dist/CountUp.js')

document.addEventListener('turbolinks:load', function() {
  animate_progress_bar = function() {
    devContents = document.querySelectorAll('.dev-content');
    for (i = 0, len = devContents.length; i < len; i++) {
      var content = devContents[i]
      var bar = content.querySelector('.progress-bar')
      var progressPercent = content.querySelector('.progress-percent')
      var width = bar.getAttribute('data-width')
      var options = { suffix: '%' };

      bar.style.width = width + '%'
      progressPercent.style.left = width + '%'

      var countUp = new CountUp(progressPercent, 0, width, 0, 1.5, options)
      countUp.start()
    }
  }
});
