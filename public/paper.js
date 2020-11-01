//add undo and redo if have time.

var path;
function onMouseDown(event) {

  path = new Path();
  path.strokeColor = "#FFFFFF";
  path.strokeWidth = 4;
  path.strokeJoin = 'round';
 
  path.add(event.point);
}

function onMouseDrag(event) {
  path.add(event.point);
}

window.paperscript_ready = true;

window.clear_canvas = function () {
  project.clear();
}

window.resize_paper = function(w, h) {
  view.viewSize.width = w;
  view.viewSize.height = h;
}



