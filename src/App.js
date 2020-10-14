import React, {useEffect, useState} from "react";
import "./App.css";

export default function App() {

  var [mode, set_mode] = useState("init");

  useEffect(() => {

    switch (mode) {
      case "init":
        break;
      case "draw":
        var my_canvas = document.getElementById("myCanvas");
        var text_container = document.getElementById("text_container");
        var text_area = document.getElementById("text_area");
        text_container.style.height = text_container.getBoundingClientRect().height + "px";
        text_container.style.width = text_container.getBoundingClientRect().width + "px";
        my_canvas.style.height = document.documentElement.clientHeight + "px";
        my_canvas.style.width = document.documentElement.clientWidth + "px";
        my_canvas.style.pointerEvents = "auto";
        text_container.style.pointerEvents = "none";
        window.resize_paper(document.documentElement.clientWidth, document.documentElement.clientHeight);
        break;
      case "edit":
        var my_canvas = document.getElementById("myCanvas");
        var text_container = document.getElementById("text_container");
        text_container.style.height = "";
        text_container.style.width = 86 + "%";
        my_canvas.style.height = 100 + "vh";
        my_canvas.style.width = 100 + "vw";
        my_canvas.style.pointerEvents = "none";
        text_container.style.pointerEvents = "auto";
        window.clear_canvas();
        break;
      default:
        break;
    }
 
  }, [mode]); 

  const edit_state = () => {
    window.location.reload();
  }

  const set_mode_elements = () => {
    


    
  }
  
  return (
    <div className="App">
      <div className="toolbar">
      <p className="left_nav">{mode}</p>
      <button onClick={() => set_mode("draw")}>draw</button>
      <button onClick={() => set_mode("edit")}>edit</button>
      <div className="right_nav">
        {mode == "edit_mode" ? <p>asd</p> : <p>azsd</p> }

        <p>
          undo
          </p>
          </div>
      </div>

      <div className="text_container" id="text_container">
  <div className="text_area" id="text_area" lang="en" contenteditable="true" data-text="Enter text here"></div>
</div>
<canvas id="myCanvas" resize="true"></canvas>

      
    </div>
  );
}

