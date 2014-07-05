$ ->

  # fix viewport on orientation change
  viewportFix = ->
    document.querySelector('meta[name=viewport]')?.content = "width=#{window.innerWidth}, height=#{window.innerHeight}, minimum-scale=1, maximum-scale=1, user-scalable=no"
  window.onorientationchange = viewportFix
  viewportFix()

  $('#parallaxScene').parallax
    frictionX: 0.1
    frictionY: 0.1
    scalarX: 10
    scalarY: 10