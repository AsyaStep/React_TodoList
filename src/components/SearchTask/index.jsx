import React from "react";
import Input from "../Input/index";
import Button from "../Button/index";
import Image from "../Image/index";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { searchIcon } from "../../static";

export default function SearchTask() {
  const [value, setValue] = useState("");
  const history = useHistory();
  const url = new URL(window.location.href);

  const onChangeInput = (e)=>{
    setValue(e.target.value);
  }
 
  const handlerSetURLValue = () => {    
    const setURLValue = url.searchParams.set("search", `${value}`);   
    history.replace(url.search.replace(setURLValue));    
    setValue('');   
  };

  return (
    <div className="box">
      <div className="container">
      <Input
        placeholderStr="search..."
        type="search"
        id="search"
        value={value}
        onChange={(e)=>onChangeInput(e)}
      />
      <Button onClick={handlerSetURLValue}><Image src={searchIcon} alt="search title"/></Button>
      </div>
    </div>)
}
