import React from "react";
import Button from "../../Button";
import Input from "../../Input";

import "./style.scss";

export default function ModalEditTask({
  hideModal,
  update,
  handlerChangeInputTitle,
  handlerChangeInputTask,
  handlerEditTodo
}) {
  return (
    <div className="modal-edit">
        <div className="modal-edit__group">          
          <Input            
            value={update.title}
            onChange={(e) => handlerChangeInputTitle(e)}
          />
          <span className="bar"></span>
          <label>Введите новый заголовок заметки</label> 
        </div>
        <div className="modal-edit__group">
          <Input            
            value={update.task}
            onChange={(e) => handlerChangeInputTask(e)}
          />
          <span className="bar"></span>
          <label>Введите новый текст заметки</label> 
        </div>
        <div className="modal-edit__btns">
          <Button className="modal-edit__edit" title="Изменить" onClick={handlerEditTodo} />
          <Button className="modal-edit__close" title="Закрыть" onClick={hideModal} />
        </div>      
    </div>
  );
}
