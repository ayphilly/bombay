import React from "react";
import { btnModel } from "../helpers/models";

export const Platformbutton = (props:btnModel)=> {
   let handleClick = ()=> {
    props.click()
   }
  
    return (
        <button className={` w-fit px-[45px]  h-[70px] flex items-center justify-center gap-[20px] rounded-full text-cream uppercase bg-dark text-[1.2em] font-[500] 
              border-[1.5px] border-cream disabled:opacity-[.2]`} type={'button'} 
            onClick={handleClick} 
            disabled={props.disabled}>
         {props.name}</button>
    )
    
}