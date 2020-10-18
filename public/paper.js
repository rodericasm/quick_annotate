// The minimum distance the mouse has to drag
// before firing the next onMouseDrag event:

var path;
var path_buffer = [];
var path_history = [];
function onMouseDown(event) {
  // Create a new path and give it a stroke color:
  path = new Path();
  path.strokeColor = "#00000";

  // Add a segment to the path where
  // you clicked:
  path_buffer.push(path);
  path.add(event.point);
}

function onMouseDrag(event) {
  // Every drag event, add a segment
  // to the path at the position of the mouse:
  path_buffer.push(path);
  path.add(event.point);
}

function onMouseUp(event) {
  
  path_history.push(path_buffer);
  path_buffer = [];
  console.log(path_history[0]);
}

window.paperscript_ready = true;

window.clear_canvas = function () {
  project.clear();
  path = null;
  path_buffer = [];
  path_history = [];
}

window.undo_draw = function () {

}

window.redo_draw = function () {
  
}

window.resize_paper = function(w, h) {
  view.viewSize.width = w;
  view.viewSize.height = h;
}



