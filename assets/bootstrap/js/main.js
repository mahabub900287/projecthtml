$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      items:1,
      loop:true,
      autoplay:true,
      autoplayTimeout:4000
     
      
  });
  $('.counter').counterUp({
    delay: 10,
    time:3000
});
  new WOW().init();
    var typed = new Typed(".tspan", {
        strings: ["Your Better Life"],
        typeSpeed: 50,
        backSpeed: 50,
        smartBackspace: true, // this is a default
        loop: true
      });
      var typed = new Typed(".cdp", {
        strings: ["Your Better Life"],
        typeSpeed: 50,
        backSpeed: 50,
        smartBackspace: true, // this is a default
        loop: true
      });
});
