$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
      $("#fixed-nav").addClass("shrink-nav");
      $("#breadcrumb-shrink").addClass("shrink-breadcrumb");
  } else {
      $("#fixed-nav").removeClass("shrink-nav");
      $("#breadcrumb-shrink").removeClass("shrink-breadcrumb");
  }
});
