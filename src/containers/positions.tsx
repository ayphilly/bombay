import { Singleposition } from "../components/gamecomp"
import { positions } from "../helpers/data"
import { allPositionsModel } from "../helpers/models"


export const Allpositions = ({active,result, computer, click}:allPositionsModel)=> {

    return (
        <div className="w-full flex items-center justify-center ">
            <div className="mx-auto w-fit flex flex-wrap justify-center gap-[25px] md:gap-[50px]  ">
                {
                    positions.map((item,id)=> (
                        <Singleposition key={id.toString()}  data={item} computer={computer} result={result} active={active} click={() =>click(item.name)} />
                    ))
                }
            </div>
        </div>
    )
}