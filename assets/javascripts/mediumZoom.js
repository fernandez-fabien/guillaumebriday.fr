import mediumZoom from 'medium-zoom'

document.addEventListener('turbolinks:load', () => {
  mediumZoom(document.querySelectorAll('[data-action="zoom"]'))
})
