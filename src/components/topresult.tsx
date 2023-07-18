import { resultModel } from "../helpers/models"

export const Topresult = (props:resultModel)=> {
    return (
        <span className="w-fit flex items-start gap-[5px]">
            <p className="my-0 font-[400] text-cream text-[1em] uppercase">{props.name}: </p>
            <p className="my-0 font-[500] text-white text-[1em] uppercase">{props.value}</p>
        </span>
    )
}