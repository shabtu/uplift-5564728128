// Mobile nav toggle
(function () {
  var ham = document.querySelector('.hamburger');
  var nav = document.querySelector('.main-nav');
  if (!ham || !nav) return;

  ham.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    ham.setAttribute('aria-expanded', String(open));
  });

  document.addEventListener('click', function (e) {
    if (nav.classList.contains('open') && !nav.contains(e.target) && !ham.contains(e.target)) {
      nav.classList.remove('open');
      ham.setAttribute('aria-expanded', 'false');
    }
  });
})();
