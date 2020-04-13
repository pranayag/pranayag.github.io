$(document).ready(function () {
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top-100
      }, 800, function () {
        window.location.hash = hash-100;
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

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  var body = $("html, body");
  body.stop().animate({ scrollTop: 0 }, 500);
}

// var myVar;

// function myFunction() {
//   myVar = setTimeout(showPage, 2000);
// }

// function showPage() {
//   document.getElementById("loader").style.display = "none";
//   document.getElementById("show").style.display = "block";
// }

