// var animatePoints = function() {
//
//                var points = document.getElementsByClassName('point');
//
//                var revealFirstPoint = function() {
//
//                };
//
//                var revealSecondPoint = function() {
//                    points[1].style.opacity = 1;
//                    points[1].style.transform = "scaleX(1) translateY(0)";
//                    points[1].style.msTransform = "scaleX(1) translateY(0)";
//                    points[1].style.WebkitTransform = "scaleX(1) translateY(0)";
//                };
//
//                var revealThirdPoint = function() {
//                    points[2].style.opacity = 1;
//                    points[2].style.transform = "scaleX(1) translateY(0)";
//                    points[2].style.msTransform = "scaleX(1) translateY(0)";
//                    points[2].style.WebkitTransform = "scaleX(1) translateY(0)";
//                };
//
//                revealFirstPoint();
//                revealSecondPoint();
//                revealThirdPoint();
//
//            };
// var revealPoint = function(points) {
//   var points = document.getElementsByClassName('point');
//   for (var i = 0; i < points.length; i++) {
//     points[i].style.opacity = 1;
//     points[i].style.transform = "scaleX(1) translateY(0)";
//     points[i].style.msTransform = "scaleX(1) translateY(0)";
//     points[i].style.WebkitTransform = "scaleX(1) translateY(0)";
//   }
// };



var revealPoint = function(index) {
  var points = document.getElementsByClassName('point');
  points[index].style.opacity = 1;
  points[index].style.transform = "scaleX(1) translateY(0)";
  points[index].style.msTransform = "scaleX(1) translateY(0)";
  points[index].style.WebkitTransform = "scaleX(1) translateY(0)";

  for (var i = 0; i < points.length; i++) {
    revealPoint();
  }
};
