(function (d, w, n, c, $) {
  const panel = d.querySelector('.Panel'),
    panelBtn = d.querySelector('.Panel-button'),
    hamburger = d.querySelector('.hamburger'),
    scrollBtns = d.querySelectorAll('.u-scrollBtn'),
    scrollSections = d.querySelectorAll('.u-scrollSection')

  function moveScroll (el) {
    window.scrollTo({
      behavior: 'smooth',
      left: 0,
      top: el.offsetTop
    })
  }

  panelBtn.addEventListener('click', function (e) {
    hamburger.classList.toggle('is-active')
    panel.classList.toggle('is-active')
  })

  scrollBtns.forEach(function (btn, pos) {
    btn.addEventListener('click', function (e) {
      e.preventDefault()
      moveScroll( scrollSections[pos] )
      hamburger.classList.remove('is-active')
      panel.classList.remove('is-active')
    })
  })

  $(d).ready(function () {
    //método que activa el la barra de navegación
    //http://materializecss.com/side-nav.html
    $(".button-collapse").sideNav({
      /* edge: 'right' */
      menuWidth: '80%'
    })

    $('#carousel').carousel()

    $('#slider').carousel({ fullWidth: true })
  })

  $(document).ready(function(){
    $('.carousel').carousel();
  });
})(document, window, navigator, console.log, jQuery);
