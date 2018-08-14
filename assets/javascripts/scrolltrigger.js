import ScrollTrigger from 'scrolltrigger-classes'

document.addEventListener('turbolinks:load', () => {
  var trigger = new ScrollTrigger(
    {
      centerVertical: true,
      addHeight: false,
      once: true
    },
    document.body,
    window
  )

  trigger.callScope = window.scope
})
