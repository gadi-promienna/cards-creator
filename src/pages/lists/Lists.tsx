import { object } from "prop-types";
import { BabyContextType } from "../../@types/baby";
import { List, ListContextType } from "../../@types/list";
import { useEffect } from "react";
import useListsContext from "../../hooks/use-lists-context";

function Lists(){
    const {lists, list, getListByCategory} = useListsContext() as ListContextType;
    getListByCategory('Rośliny')
    if(list!=null) console.log(Object.assign(new List(), list).wordsListToText())
    const renderedCategories = lists.map( 
        (list)=>{ 
            return( 
                <>
                    <h3>{list.category}</h3>
                    <p className="text">{list.words}</p>
                </>
             )
        }
    )
    return(
        <div>
            <h2>Twoje Listy</h2>
            {renderedCategories}
        </div>
    )
}

export default Lists;