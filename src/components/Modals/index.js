import React from "react";
import { useSelector } from "react-redux";
import { getModal } from "../../store/modals/selectors";
import ModalCreateTaskContainer from "../../containers/ModalCreateTaskContainer"
import ModalDeleteTaskContainer from "../../containers/ModalDeleteTaskContainer";
import ModelEditTaskContainer from "../../containers/ModalEditTaskContainer";

const modalCollections = {
    modalCreateTask: ModalCreateTaskContainer,
    modalDeleteTask: ModalDeleteTaskContainer,
    modalEditTask: ModelEditTaskContainer
}
export default function Modals(){
    const modal = useSelector((state)=>getModal(state))

    if(!modal.length){
        return null
    }   

    return <>
    {modal.map((item) => {
        const CurrentModal=modalCollections[item.name]
        return <CurrentModal {...item} key={item.name}/>
    })}
    </>
        
}