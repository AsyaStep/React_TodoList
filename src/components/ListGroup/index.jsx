import { removeIcon } from "../../static";
import Image from "../Image";
import "./style.scss";

export default function ListGroup ({title, task, onClick }){  

  return (
    <ul className = "list-task">
      <li className = "list-task__wrapper" onClick={onClick.onClickList}>
        <div className="list-task__title">{title}</div>
        <hr></hr>
        <div className="list-task__task">
        {task}
        <Image src={removeIcon} alt="delete task" onClick={onClick.onClickButton}/>
        </div>
      </li>
    </ul>
  );
};

