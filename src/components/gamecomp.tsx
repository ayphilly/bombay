import { SinglepositionModel } from "../helpers/models"
import { getColor, getTColor } from "../helpers/utils"

export const Singleposition = ({data,computer,result, active, click}:SinglepositionModel)=> {
    const handleClick = () => {
        click();
    };
    return (
        <button onClick={handleClick} disabled={result || computer ? true:false} className={`w-[250px] h-[150px] md:h-[200px] flex items-end justify-center ${result.includes(data.name.toLocaleLowerCase())? `border-[6px] ${data.stroke}`:'border-[2px]' } ${getColor(data.name)} rounded-[10px] disabled:cursor-not-allowed `}>

            <span className="flex flex-col items-center gap-[20px] pb-[10px] md:pb-[20px]">
                {
                    active.filter(item=> item=== data.name)[0] && <p className="
                        w-[50px] h-[50px] flex items-center justify-center text-dark font-[700] text-[1em] bg-white rounded-[100%] border-[3.5px] border-blue-600 
                    ">
                        {data.amount}
                    </p>
                }
                 <p className={`my-0 text-[2em] font-[600] uppercase ${getTColor(data.name)}`}>{data.name}</p>
            </span>
           
        </button>
    )
}

export const Boardtext = ({text, addOns}:{text:string, addOns?:string})=> {

    return (
        <p className={`my-0 uppercase font-[700] text-white text-[3.5em] ${addOns} `}> {text}</p>
    )
}

export const Column = (props:any)=> {
    return (
        <span className="flex flex-col items-center">
            {props.children}
        </span>
    )
}