$(document).ready(function () {
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top-100
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
