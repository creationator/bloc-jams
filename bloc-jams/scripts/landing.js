
// var revealPoint = function(points) {
//   for (var i = 0; i < points.length; i++) {
//     points[i].style.opacity = 1;
//     points[i].style.transform = "scaleX(1) translateY(0)";
//     points[i].style.msTransform = "scaleX(1) translateY(0)";
//     points[i].style.WebkitTransform = "scaleX(1) translateY(0)";
//   }
// };
//

var animatePoints = function() {
  var revealPoint = function() {
         // #7
         $(this).css({
             opacity: 1,
             transform: 'scaleX(1) translateY(0)'
         });
       };
       $.each($('.point'), revealPoint);
   };


var animatePoints = function(points) {
  forEach(points, revealPoint);
};

$(window).load(function() {
  if ($(window).height() > 950) {
         animatePoints();
  }

  var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;


  $(window).scroll(function(event) {
    if ($(window).scrollTop() >= scrollDistance) {
             animatePoints();
    }
  });
});
