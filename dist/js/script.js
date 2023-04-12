var acc = document.getElementsByClassName("program__accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

/* (function ($) {
  $(document).ready(function () {
      $('.accordeon-label').each(function () {
          if ($(this).hasClass('opened')) {
              $('.accordeon-content', this).show();
          }
      });
  });

  $('.accordeon-label').on('click', function () {
      $(this).toggleClass('opened');
      $('.accordeon-content', this).toggle(300);
      if ($(this).hasClass('opened')) {
          $(this).siblings().removeClass('opened');
          $(this).siblings().children('.accordeon-content').hide(300);
      }
  });
})(jQuery); */