import React, { useState } from "react";
import "./bottom.css";
export const BottomDrawer = ({drawerOpen,arrayList}) => {
  return (
    <div className="bottom-drawer" style={{visibility: drawerOpen? 'visible' : 'hidden'}}>
      {
        arrayList.map((el) => (
          <h2 className="array_list">{el}</h2>
        ))
      }
       
    </div>
  );
};
