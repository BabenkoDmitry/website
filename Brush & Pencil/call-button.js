$(document).ready(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop() > 700) {
      $(".call-button").fadeIn();
        }else{
      $(".call-button").fadeOut();
     }
   });

 $(".call-button").mouseover(function(){
    $(".call-button").effect("shake", {distance:4}, 500);
   });
});
