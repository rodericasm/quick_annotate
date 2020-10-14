// The minimum distance the mouse has to drag
// before firing the next onMouseDrag event:

var path;
function onMouseDown(event) {
  // Create a new path and give it a stroke color:
  path = new Path();
  path.strokeColor = "#00000";

  // Add a segment to the path where
  // you clicked:
  path.add(event.point);
}

function onMouseDrag(event) {
  // Every drag event, add a segment
  // to the path at the position of the mouse:
  path.add(event.point);
}

function onFrame(event) {
}

window.clear_canvas = function () {
  project.clear();
}

window.resize_paper = function(w, h) {
  view.viewSize.width = w;
  view.viewSize.height = h;
}



