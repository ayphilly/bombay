import { Topresult } from "../components/topresult"
import { results } from "../helpers/data"

export const Topbar = ({data}: {data:number[]})=> {

    return (
        <section className={`w-full bg-darkOne mx-auto h-[50px] sticky left-0 right-0 top-0 z-50 flex items-center justify-center`}>
            <span className="container w-fit  mx-auto my-auto flex gap-[20px] md:gap-[40px] xl:gap-[70px]  ">
                {
                    results.map((item,id)=> (
                        <Topresult key={id.toString()} name={item} value={data[id]} />
                    ))
                }
            </span>
        </section>
    )
}