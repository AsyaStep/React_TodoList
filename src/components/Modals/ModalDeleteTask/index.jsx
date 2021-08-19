import React from "react";
import Button from "../../Button/index";

import "./style.scss";

export default function ModalDeleteTask({ handlerDeleteTodo, hideModal }) {
  return (
    <div>
      <div className="modal-delete">
        <div className="modal-delete__content">
          <p>Вы действительно хотите удалить эту задачу?</p>
        </div>
        <div className="modal-delete__btns">
          <Button className="modal-delete__remove" title="Удалить" onClick={handlerDeleteTodo} />
          <Button className="modal-delete__close" title="Закрыть" onClick={hideModal} />
        </div>
      </div>
    </div>
  );
}
