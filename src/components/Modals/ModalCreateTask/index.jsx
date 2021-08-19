import React from "react";
import Button from "../../Button";
import Input from "../../Input";

import "./style.scss";

export default function ModalCreateTask({
  change,
  titleError,
  formValid,
  handlerChangeTitleTodo,
  handlerChangeTaskTodo,
  handlerAddTodo,
  hideModal,
}) {
  return (
    <div className="modal-create">
        <div className="modal-create__group">          
          <Input
            name = "name"
            type="text"             
            id="title"            
            value={change.titleTodo}
            onChange={(e) => handlerChangeTitleTodo(e)}
          />
          <span className="bar"></span>
          <label>Введите заголовок заметки</label>
          {titleError !== '' ? <div style={{color: 'red'}}>{titleError}</div> : null}          
        </div>
        <div className="modal-create__group">
          <Input
            name = "task"
            type="text"
            id="task"
            value={change.taskTodo}
            onChange={(e) => handlerChangeTaskTodo(e)}
          />
          <span className="bar"></span>
           <label>Введите текст заметки</label>          
        </div>
        <div className="modal-create__btns">
          <Button className="modal-create__create-task" disabled={!formValid} type='submit' title="Создать" onClick={handlerAddTodo}/>
          <Button className="modal-create__close" title="Закрыть" onClick={hideModal} />
        </div>
    </div>
  );
}
