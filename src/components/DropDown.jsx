
import React from "react";
import DropDownStyles from '@/components/styles/DropDownStyles.module.css';
import { FaFilter } from "react-icons/fa";

export default function DropDown() {
  return (
  <> 
  <div className={DropDownStyles.dropfull}>
    <label className={DropDownStyles.label}> <FaFilter className={DropDownStyles.filtro}/></label> 
    <select id="drop" className={DropDownStyles.drop}   >
      <option value="">Melhores</option>
      <option value="cat">Mais recentes</option>
      <option value="hamster">Em destaque</option>
    </select> 
    
  </div>  
  </>);
}