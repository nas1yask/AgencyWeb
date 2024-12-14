// $(".hello").mask("99/99/9999");
// $(".tel").mask("+7 (999) 999-9999");


// var typed = new Typed('.txt', {
//     strings: ['Hello everyone', 'Just Text', 'Guys'],
//     typeSpeed: 70,
//     backSpeed: 30,
//     fadeOut: true
//   });

// $('.box').backgroundMove({
//     movementStrength:'50'
// });
    

  $('.blog .slider').slick({
    slidesToShow: 3,
    arrows: false
  });

  $('.next').on('click', ()=>{
    $('.slider').slick('slickNext')
  })

  $('.prev').on('click', ()=>{
    $('.slider').slick('slickPrev')
  })


    $('a[data-modal]').on('click', function() {
      $($(this).data('modal')).modal();
      return false;
    });



