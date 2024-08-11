import {createContext} from "react";
import {useState} from "react";
import { ReactNode } from "react";
import { ListContextType, List } from "../@types/list";

export const ListContext = createContext<ListContextType|null>(
   null
);

export function ListsContextProvider({children, babyLists}: {children: ReactNode, babyLists:List[]} ){
    const [lists, setLists] = useState<List[]>(babyLists); 
    const [list, setList] = useState<List|null>(null);


    const addList = (newList:List) => {
       setLists([...lists,newList])
    }

    const deleteList = (category:string) => {
        const updatedLists = lists.filter
        (
            (list) => list.category !== category 
        )
        setLists(updatedLists)
        if(list.category===category) setList(null)
    }

    const updateList = (listToUpdate:List) => {
        const updatedLists = lists.map(
            (list) => {
                if (list.category === listToUpdate.category){
                    return {...list, ...listToUpdate} as List
                }
                return list}
            )
        setLists(updatedLists)
        setList(listToUpdate)
    }

    const getListByCategory = (category:string)=>{
        let found = lists.find((l:List)=>(l.category===category))
        if(found?.category===category) {
            setList(list)
            return list
        } else return null
    }

    const value_to_share = {
        lists,
        list,
        addList,
        updateList,
        deleteList,
        getListByCategory
    }

    return( <ListContext.Provider value={value_to_share}>
        {children}
    </ListContext.Provider> )
}
