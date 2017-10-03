$(document).ready(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop() > 700) {
      $(".call-button").fadeIn();
        }else{
      $(".call-button").fadeOut();
     }
   });
});
