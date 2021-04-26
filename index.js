$(document).ready(function () {
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top-120
      }, 800, function () {
        hash
      });
    }
  });
});



$(document).ready(function () {
  $('.nav-link').click(function () {
    $('.nav-link').removeClass("active");
    $(this).addClass("active");
  });
});

$(document).ready(function () {
  $('a').click(function () {
    $('.nav-link').removeClass("active");
  });
});




document.addEventListener('DOMContentLoaded', function() {
jQuery(function($){
var mywindow = $(window);
var mypos = mywindow.scrollTop();
mywindow.scroll(function() {
if (mypos > 40) {
if(mywindow.scrollTop() > mypos) {
$('#header').addClass('headerup');
} else {
$('#header').removeClass('headerup');
}
}
mypos = mywindow.scrollTop();
}); 

});

});