import React from "react";
import './bottom.css'
 
export const ToggleDrawer = ({toggleHandler}) => {
    return <button className="toggle_button" onClick={() => toggleHandler()}>Open Bottom Sheet</button>
}