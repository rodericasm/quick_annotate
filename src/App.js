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
        text_area.setAttribute("data-text", "");
        text_container.style.height = text_container.getBoundingClientRect().height + "px";
        text_container.style.width = text_container.getBoundingClientRect().width + "px";
        my_canvas.style.width = my_canvas.style.width;
        my_canvas.style.pointerEvents = "auto";
        text_container.style.pointerEvents = "none";
        
        if (document.documentElement.clientHeight > text_container.getBoundingClientRect().height) {
          my_canvas.style.height = document.documentElement.clientHeight + "px";
          window.resize_paper(document.documentElement.clientWidth, document.documentElement.clientHeight);
        }
        if (text_container.getBoundingClientRect().height > document.documentElement.clientHeight) {
          window.scrollTo(0, 0);
          my_canvas.style.height = (text_container.getBoundingClientRect().height + 140) + "px";
          window.resize_paper(document.documentElement.clientWidth, (text_container.getBoundingClientRect().height + 140));
        }
        
        break;
      case "edit":
        var my_canvas = document.getElementById("myCanvas");
        var text_container = document.getElementById("text_container");
        var text_area = document.getElementById("text_area");
        window.clear_canvas();
        text_area.innerHTML = "";
        text_area.setAttribute("data-text", "Enter text here!");
        text_container.style.height = "";
        text_container.style.width = "86%";
        my_canvas.style.height = 'calc(100% - 140px)';
        my_canvas.style.width = "100%";
        my_canvas.style.pointerEvents = "none";
        text_container.style.pointerEvents = "auto";

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
      <div className="left_nav">{mode}</div>
      {mode == "edit" ?
             <div className="right_nav">
             <button onClick={() => set_mode("draw")}>draw</button>
                 </div> 
                 :
                     <div className="right_nav">
                       <svg onClick={() => set_mode("edit")} width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                 <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                 <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
               </svg>
                         </div> 
                         }

      


      </div>

      <div className="text_container" id="text_container">
  <div className="text_area" id="text_area" lang="en" contenteditable="true" data-text="Enter text here!"></div>
</div>
<canvas id="myCanvas" resize="true"></canvas>

      
    </div>
  );
}

