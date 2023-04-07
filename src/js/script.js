$(document).ready(function(){
    $('.carousel__inner').slick({
        dots: false,
        infinite: false,
        speed: 1500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
              breakpoint: 769,
              settings: {
                arrows: false,
                dots: true,
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                dots: true,
              }
            }
          ]
      });

      $(window).scroll(function() {
        if ($(this).scrollTop() > 1200) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut()
        }
    });

    $("a[href=#promo]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    $('.modal__close').on('click', function() {
        $('.overlay, #thanks').fadeOut('slow');
    });

    function valideForms(form){
        $(form).validate({
            rules: {
                firstname: "required",
                lastname: "required",             
                email: {
                    required: true,
                    email: true
                }                
            },
            messages: {
                firstname: "Please specify your firstname",
                lastname: "Please specify your lastname",
                email: {
                    required: "We need your email address to contact you",
                    email: "Your email address must be in the format of name@domain.com"
                }
              }
        });
    };

    valideForms('#contact-form');
    valideForms('#promo-form');

    $('form').submit(function(e) {
        e.preventDefault();

        if (!$(this).valid()) {
            return;
        }

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

/*     window.addEventListener('DOMContentLoaded', () => {
        const headermenu = document.querySelector('.header__menu'),
        menuItem = document.querySelectorAll('.menu__item'),
        hamburger = document.querySelector('.hamburger');
    
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            headermenu.classList.toggle('header__menu_active');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                headermenu.classList.toggle('header__menu_active');
            })
        })
    }) */
    
    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.header__menu'),
        closeElem = document.querySelector('.close');

    hamburger.addEventListener('click', () => {
        menu.classList.add('header__menu_active');
        });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('header__menu_active');
        })
  });

