document.addEventListener('DOMContentLoaded', () => {

    const menu = document.querySelector('.header'),
    menuItem = document.querySelectorAll('.header__item'),
    hamburger = document.querySelector('.hamburger__wrapper');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__wrapper_active');
        menu.classList.toggle('header_active');
    });

    // menuItem.forEach(item => {
    //     item.addEventListener('click', () => {
    //         hamburger.classList.toggle('hamburger__wrapper_active');
    //         menu.classList.toggle('header_active');
    //     });
    // });


    let hidden = true;
    document.querySelector('.header__item').onclick = function() {
    document.querySelector('.submenu').style.transform = (hidden) ? 'scaleY(1)' : 'scaleY(0)';
    hidden = !hidden;
};

    $('.promo__slider').slick({
      infinite: true,
      arrows: false,
      dots: true,
      speed: 600,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: 'linear',
      responsive: [
        {
        },
      ]
  
    });
  
  


    $('.cases__slider').slick({
      infinite: true,
      arrows: true,
      appendArrows:'.slider-arrows',
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/Arrow-left.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/Arrow-right.png"></button>',
      dots: true,
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 2,
      slidesToScroll: 1,
      variableWidth: true,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 993,
          settings: {
            slidesToShow: 1,
            centerMode: false,
            arrows: false,
          }
        },
        {
          breakpoint: 577,
          settings: {
            centerMode: false,
            arrows: false,


          }
        },
        {
          breakpoint: 481,
          settings: {
            centerMode: false,
            arrows: false,
            dots: false,
          }
        },


      ]

    });


    $('.reviews__slider').slick({
      infinite: true,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/Arrow-left.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/Arrow-right.png"></button>',
      dots: true,
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 2,
      slidesToScroll: 1,
      variableWidth: true,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 769,
          settings: {
            centerMode: true,
            arrows: false,
          }
        },
        {
          breakpoint: 481,
          settings: {
            arrows: false,
            dots: false,
          }
        },


      ]

    });

    $('.cases-page__slider').slick({
      infinite: true,
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: 'linear',
      // autoplay: true,
      responsive: [
        {
          breakpoint: 769,
          settings: {
          }
        },
      ]
  
    });
  


    

    $('[data-modal=callback]').on('click', function() {
      $('.overlay, #callback').fadeIn('slow');
    });

    $('[data-modal=application]').on('click', function() {
      $('.overlay, #application').fadeIn('slow');
    });

  
    $('.modal__close').on('click', function() {
      $('.overlay, #callback, #application').fadeOut('slow');
    });



  function validateForms(form){
    $(form).validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Пожалуйста, введите свое имя",
                minlength: jQuery.validator.format("Введите {0} символа!")
              },
            phone: "Пожалуйста, введите свой номер телефона",
            email: {
              required: "Пожалуйста, введите свою почту",
              email: "Неправильно введен адрес почты"
            }
        }
    });
};

validateForms('#callback form');
validateForms('#consultation form');
validateForms('#tariff-consultation form');

  $('input[name=phone]').mask("+7 (999) 999-9999");
	

     
  const consultation = document.querySelector('#consultation'),
  accounting = document.querySelector('#accounting'),
  juridical = document.querySelector('#juridical'),
  personnel = document.querySelector('#personnel'),
  foreign = document.querySelector('#foreign-economic'),
  consultationItem = document.querySelector('.consultation-item'),
  accountingItem = document.querySelector('.accounting-item'),
  juridicalItem = document.querySelector('.juridical-item'),
  personnelItem = document.querySelector('.personnel-item'),
  foreignItem = document.querySelector('.foreign-economic-item');



  accounting.addEventListener('click', () => {
    consultationItem.classList.remove('active');
    juridicalItem.classList.remove('active');
    foreignItem.classList.remove('active');
    personnelItem.classList.remove('active');
    accountingItem.classList.add('active');
});

juridical.addEventListener('click', () => {
  consultationItem.classList.remove('active');
  foreignItem.classList.remove('active');
  personnelItem.classList.remove('active');
  accountingItem.classList.remove('active');
  juridicalItem.classList.add('active');
});

personnel.addEventListener('click', () => {
  consultationItem.classList.remove('active');
  juridicalItem.classList.remove('active');
  foreignItem.classList.remove('active');
  accountingItem.classList.remove('active');
  personnelItem.classList.add('active');
});

foreign.addEventListener('click', () => {
  consultationItem.classList.remove('active');
  juridicalItem.classList.remove('active');
  personnelItem.classList.remove('active');
  accountingItem.classList.remove('active');
  foreignItem.classList.add('active');
});


consultation.addEventListener('click', () => {
  juridicalItem.classList.remove('active');
  foreignItem.classList.remove('active');
  personnelItem.classList.remove('active');
  accountingItem.classList.remove('active');
  consultationItem.classList.add('active');
});


const dropdownBtn = document.querySelectorAll('.dropdown__link');
		      

dropdownBtn.forEach(element =>{
  element.addEventListener('click', ()=>{
    element.nextElementSibling.classList.toggle('hover');
    element.firstElementChild.classList.toggle('transformed');



    })
  });


    
});
