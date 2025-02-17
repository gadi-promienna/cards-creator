import { List, ListContextType } from "../@types/list";
import useListsContext from "../hooks/use-lists-context";
import { useEffect } from "react";

function Sidebar() {
    const {fetchLists, lists, list} = useListsContext() as ListContextType;
    
    useEffect(() => {
        fetchLists()
        },[fetchLists])

        console.log(lists)
    const renderedLists = lists.map( 
        (list)=>{ 
            const renderedWords = list.words.map((word)=>
                {
                    return(<li>{word}</li>)
                }
            )
            return( 
                <li>
                    <h3>{list.name}</h3>
                    <ul>
                        {renderedWords}
                    </ul>
                </li>
             )
        }
    )
    
    return(
        <div className="sidebar">
            <h2>Twoje Listy</h2>
            {renderedLists}
        </div>
    )
}

export default Sidebar;