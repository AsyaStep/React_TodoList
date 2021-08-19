import React from "react";
import ListGroup from "../ListGroup/index";
import Image from "../Image/index";
import { createIcon } from "../../static";

import "./style.scss";

export default function ListTask({
  point,
  showModalCreate,
  showModalDelete,
  showModalEdit,
}) {
  const handlerClickList = (event, id) => {
    const target = event.target.tagName;
    console.log(target);
    if (target === "DIV") {
      showModalEdit(id);
    }
  };

  const onClickFunctions = (id) => {
    return {
      onClickList: (e) => handlerClickList(e, id),
      onClickButton: () => showModalDelete(id),
    };
  };
  return (
    <><div className="create-box">
      <h1>Список задач</h1>
      <Image src={createIcon} alt="create task" onClick={()=>showModalCreate()}/>
      </div>
      <div className="list-container">
      {point.map((item) => {
        console.log(item.idTask);
        return ( 
          <ListGroup
            key={item.idTask}
            title={item.title}
            task={item.task}
            onClick={onClickFunctions(item.idTask)}            
          /> 
        );
      })}
      </div>
    </>
  );
}
