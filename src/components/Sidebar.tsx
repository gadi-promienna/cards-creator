import { List, ListContextType } from "../@types/list";
import useListsContext from "../hooks/use-lists-context";
import { useEffect } from "react";
import ListActionCard from "./ListActionCard";

function Sidebar() {
    const {fetchLists, listDelete, setList, lists, list} = useListsContext() as ListContextType;
    
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
            // const renderedWords = list.words.join(', ')
            return( 
               <ListActionCard list={list} setList={setList} listDelete={listDelete} />
             )
        }
    )
    
    return (
        <div className="sidebar px-4 py-4">
            <h2 className="text-center py-7">Twoje Listy</h2>
            <ul className="flex flex-col gap-3">{renderedLists}</ul>
        </div>
    )
}

export default Sidebar;