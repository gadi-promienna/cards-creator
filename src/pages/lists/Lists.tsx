import { object } from "prop-types";
import { List, ListContextType } from "../../@types/list";
import { useEffect } from "react";
import useListsContext from "../../hooks/use-lists-context";

function Lists(){
    const {fetchLists, lists, list} = useListsContext() as ListContextType;
    
    useEffect(() => {
        fetchLists()
    },
    [fetchLists]
    )

    const renderedLists = lists.map( 
        (list)=>{ 
            return( 
                <>
                    <h3>{list.name}</h3>
                    <p className="text">{list.words}</p>
                </>
             )
        }
    )
    return(
        <div>
            <h2>Twoje Listy</h2>
            {renderedLists}
        </div>
    )
}

export default Lists;