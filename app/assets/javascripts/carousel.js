$(document).on('turbolinks:load', function(){
  // $('.pf__slider').slick({
  //   autoplay:true,
  //   infinite: true,
  //   speed: 500,
  //   fade: true,
  //   cssEase: 'linear',
  //   arrows:false,
  //   pauseOnHover: false
  // });
  $('.pf__body').slick({
    autoplay:true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows:false,
    // asNavFor:'.pf__slider',
    pauseOnHover: false
  });
  $('.about__slider').slick({
    autoplay:true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows:false,
    pauseOnHover: false,
    asNavFor:'.pf__slider'
  });
  $('.works').slick({
    autoplay:true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows:false,
    asNavFor:'.pic__slider',
    pauseOnHover: false
  });
  $('.pic__slider').slick({
    autoplay:true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    pauseOnHover: false,
    centerMode: true,
    asNavFor:'.works',
    arrows:false
  });
});
