import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/Zayaka-junction.png";





const Header =()=>{
    return(
        <div className="header">
            <div>
                <img src={logo} alt="Zayaka logo" style={{ width: "100px", height: "auto" }} />

                
            </div>

        </div>
    )
}
const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>

        </div>

    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <AppLayout />
  </>
);
