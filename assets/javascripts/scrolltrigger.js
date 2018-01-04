import ScrollTrigger from 'scrolltrigger-classes'

document.addEventListener("turbolinks:load", function() {
  var trigger = new ScrollTrigger(
    {
      centerVertical: true,
      addHeight: false,
      once: true
    },
    document.body,
    window
  );

  trigger.callScope = window.scope
});
