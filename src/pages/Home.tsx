import { object } from "prop-types";
import { List, ListContextType } from "../@types/list";
import { useEffect } from "react";
import useListsContext from "../hooks/use-lists-context";
import NewListForm from "../components/NewListForm";
function Home(){
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
             {/* <NewListForm></NewListForm> */}
            <h2>Twoje Listy</h2>
            {renderedLists}
        </div>
    )
}

export default Home;