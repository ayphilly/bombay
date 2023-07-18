import { Boardtext} from "../components/gamecomp"
import { boardModel } from "../helpers/models"

export const Board = ({result, computer, choices, win}:boardModel)=> {

    let __renderBoard =()=> {
        if (result) {

            if (result.includes('tie')){
                return ( <span className="w-full flex flex-col mx-auto items-center gap-[10px]">
                    <Boardtext text={'Its a tie'} addOns="text-cream" />
                    <p className="my-0 uppercase font-[500] text-[1.2em] text-cream">YOU WIN <strong 
                    className="text-white font-[400]">{win}</strong> </p>
                </span>)
            }
           return ( <span className="w-full flex flex-col mx-auto items-center gap-[10px]">
                    <Boardtext text={result} addOns="text-green-600" />
                    <p className="my-0 uppercase font-[500] text-[1.2em] text-cream">YOU WIN <strong 
                    className="text-white font-[400]">{win}</strong> </p>
            </span>)
        }else {
            if (computer) {
                return (
                    <span className="w-fit mx-auto flex items-start gap-[50px] ">
                        <Boardtext text={computer}/>
                        <Boardtext text="VS"/>
                        <Boardtext text={choices.map(item=> item).join(", ")}/>
                    </span>
                )
            } else {
                return <></>
            }
        }
    }

    return (
        __renderBoard()
    )
}