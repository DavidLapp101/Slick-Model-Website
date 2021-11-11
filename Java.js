$( document ).ready(function() {
$('.properties-slide').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow : $('.prev'),
    nextArrow : $('.next'),
  });
  console.log('hello')

  $('.section-6-container').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow : $('.left'),
    nextArrow : $('.right'),
  });
  console.log('hello')
  

  window.addEventListener("scroll", function(){
    var header = document.querySelector(".navigation");
    if(window.scrollY>0){
      $('.navigation').removeClass("nav-bar")
    }
    else{
      $('.navigation').addClass("nav-bar")
    }

    header.classList.toggle("sticky", window.scrollY>0);
  });
});