import React from "react";
import Button from "../Button/index";

export default function LocalStorageBlock({
  saveTodoLocalStorage,
  deleteTodoLocalStorage,
}) {
  return (
    <div className="localStorage-block"> 
      <Button className="btn-save" title="Save Todo" onClick={saveTodoLocalStorage}/>     
     <Button className="btn-delete"title="Delete Todo" onClick={deleteTodoLocalStorage}/>         
    </div>
  );
}
