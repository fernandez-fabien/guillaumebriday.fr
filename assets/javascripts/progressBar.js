import ProgressBar from 'progressbar.js'

document.addEventListener('turbolinks:load', () => {
  var elements = document.querySelectorAll('.progressbar-container')
  window.scope = {}

  for (var i = 0, len = elements.length; i < len; i++) {
    var element = elements[i]

    element.line = new ProgressBar.Line(element, {
      easing: 'easeInOut',
      duration: 1500,
      color: '#252525',
      trailColor: '#ccc',
      svgStyle: {
        width: '100%',
        height: '100%'
      },
      text: {
        style: null
      },
      step: function (_state, bar, attachment) {
        bar.setText(Math.round(bar.value() * 100) + ' %')

        var text = bar._container.querySelector('.progressbar-text')

        text.style.left = bar.value() * 100 + '%'
      }
    })
  }

  window.scope.animate_progress_bar = () => {
    for (var i = 0, len = elements.length; i < len; i++) {
      var element = elements[i]

      element.line.animate(element.getAttribute('data-width') / 100)
    }
  }
})
