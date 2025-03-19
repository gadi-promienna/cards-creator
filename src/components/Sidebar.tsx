import { List, ListContextType } from "../@types/list";
import useListsContext from "../hooks/use-lists-context";
import { useEffect } from "react";

function Sidebar() {
    const {fetchLists, lists, list} = useListsContext() as ListContextType;
    
    useEffect(() => {
        fetchLists()
        },[fetchLists])

    const renderedLists = lists.map( 
        (list)=>{ 
            // const renderedWords = list.words.map((word)=>
            //     {
            //         return(<li>{word}</li>)
            //     }
            // )
            const renderedWords = list.words.join(', ')
            return( 
                <li className="grid grid-cols-2 grid-rows-1">
                    <div className="image"></div>
                    <div className="content py-8 text-center">
                       <h3>{list.name}</h3>
                    <p className="text-sm">({renderedWords})</p> 
                    <div className="actions flex justify-between px-2">
                        <div className="cards">cards</div>
                        <div className="presentation">run</div>
                        <div className="edit">edit</div>
                        <div className="delete">delete</div>
                    </div>
                </div>
                </li>
             )
        }
    )
    
    return(
        <div className="sidebar px-4 py-4">
            <h2 className="text-center py-7">Twoje Listy</h2>
            <ul className="flex flex-col gap-3">{renderedLists}</ul>
        </div>
    )
}

export default Sidebar;