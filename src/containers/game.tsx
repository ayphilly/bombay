import { Singleoption } from "../components/gamecomp"
import { games } from "../helpers/data"
import { allGameModel } from "../helpers/models"


export const Allgames = ({active,result, computer, click}:allGameModel)=> {

    return (
        <div className="w-full flex items-center justify-center ">
            <div className="mx-auto w-fit flex flex-wrap justify-center gap-[25px] md:gap-[50px]  ">
                {
                    games.map((item,id)=> (
                        <Singleoption key={id.toString()}  data={item} computer={computer} result={result} active={active} click={() =>click(item.name)} />
                    ))
                }
            </div>
        </div>
    )
}