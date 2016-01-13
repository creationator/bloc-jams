
var revealPoint = function(points) {
  var points = document.getElementsByClassName('point');
  for (var i = 0; i < points.length; i++) {
    points[i].style.opacity = 1;
    points[i].style.transform = "scaleX(1) translateY(0)";
    points[i].style.msTransform = "scaleX(1) translateY(0)";
    points[i].style.WebkitTransform = "scaleX(1) translateY(0)";
  }
};

//The solution in the video is below. Mines seemed less complicated

// var animatePoints = function() {
// var revealPoint = function(index) {
//   var points = document.getElementsByClassName('point');
//   points[index].style.opacity = 1;
//   points[index].style.transform = "scaleX(1) translateY(0)";
//   points[index].style.msTransform = "scaleX(1) translateY(0)";
//   points[index].style.WebkitTransform = "scaleX(1) translateY(0)";
//
//   for (var i = 0; i < points.length; i++) {
//     revealPoint();
//   }
// };
// };
