import React, {useEffect, useState} from "react";
import "./App.css";


export default function App() {

  var [mode, set_mode] = useState("loading");


  useEffect(() => {
    var my_canvas = document.getElementById("myCanvas");
    var text_container = document.getElementById("text_container");
    var text_area = document.getElementById("text_area"); 
    var cur_canv_width = my_canvas.style.width;
    switch (mode) {
      case "init":
        var loading_screen = document.getElementById("loading_screen");
        loading_screen.style.display = "none";
        text_area.setAttribute("data-text", "");
        text_area.innerHTML = "Welcome to Quick Annotate! This is a sample text, draw and annotate around me. Press the button above to edit me!"
        text_container.style.height = text_container.getBoundingClientRect().height + "px";
        text_container.style.width = text_container.getBoundingClientRect().width + "px";
        my_canvas.style.width = cur_canv_width;
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
      case "draw":
        text_area.setAttribute("data-text", "");
        text_container.style.height = text_container.getBoundingClientRect().height + "px";
        text_container.style.width = text_container.getBoundingClientRect().width + "px";
        my_canvas.style.width = cur_canv_width;
        my_canvas.style.pointerEvents = "auto";
        text_container.style.pointerEvents = "none";
        text_area.style.borderBottom = "";
        my_canvas.style.borderBottom = "1px dotted black  ";
        
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

        window.clear_canvas();
        text_area.innerHTML = "";
        text_area.setAttribute("data-text", "Enter text here. Then press the button above to draw and annotate!");
        text_container.style.height = "";
        text_container.style.width = "86%";
        text_area.style.borderBottom = "1px dotted black";
        my_canvas.style.borderBottom = "";
        my_canvas.style.height = 'calc(100% - 140px)';
        my_canvas.style.width = "100%";
        my_canvas.style.pointerEvents = "none";
        text_container.style.pointerEvents = "auto";
        break;
      default:
        break;
    }
 
  }, [mode]); 

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.paperscript_ready){
        set_mode("init");
        clearInterval(interval);
      }
    }, 1000);
    }, []);
  
  return (
    <div className="App">
      <div className="loading_screen" id="loading_screen">
        <p>Loading Quick Annotate....</p>
      </div>
      <div className="toolbar">
      {mode === "edit" ?
             <div className="center_nav">
                  <svg onClick={() => set_mode("draw")} width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-file-play" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z"/>
                    <path d="M6 10.117V5.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43z"/>
                  </svg>


              </div> 
                 :
                     <div className="center_nav">
                       <svg onClick={() => set_mode("edit")} width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                       </svg>

                         </div> 
                         }

      


      </div>

      <div className="text_container" id="text_container">
  <div className="text_area" id="text_area" lang="en" contentEditable="true" data-text="" spellCheck="false"></div>
</div>
<canvas id="myCanvas" resize="true"></canvas>

      
    </div>
  );
}

