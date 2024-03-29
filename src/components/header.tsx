import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/provider/global";
import { counter } from "@/helpers/counter";
import { AiOutlineCheckCircle, AiOutlineClockCircle } from 'react-icons/ai';
import ToggleBtn from "./toggleBtn";

export default function Header() {

    const { list } = useContext(GlobalContext);
    const [done, setDone] = useState<number>(0);
    const [undone, setUndone] = useState<number>(0);

    useEffect(() => {
        setDone(counter(list, true));
        setUndone(counter(list, false));
    }, [list]);
    return (
        <div className="flex flex-col pt-10 gap-2 text-start">
            <div className="flex flex-row justify-between">
                <h1 className="text-3xl font-extrabold text-black dark:text-white font-sans ">To Do list</h1>
                <ToggleBtn/>
            </div>
            <div className="flex flex-row gap-3">
                { done !== 0 ? 
                        <div className="flex flex-row items-center gap-2 text-gray-500 dark:text-stone-200">
                            <AiOutlineCheckCircle />
                            <p>{`${done} tasks`}</p>
                        </div> 
                    : ''}

                { undone !== 0 ? 
                        <div className="flex flex-row items-center gap-2 text-gray-500 dark:text-stone-200">
                            <AiOutlineClockCircle/>
                            <p>{`${undone} tasks`}</p>
                        </div> 
                    : ''}
            </div>
        </div>
    )
}