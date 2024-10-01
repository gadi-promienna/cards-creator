import {createContext} from "react";
import {useState, useEffect} from "react";
import { ReactNode } from "react";
import { ListContextType, List } from "../@types/list";
import useBabiesContext from "../hooks/use-babies-context";
import { BabyContextType } from "../@types/baby";

export const ListsContext = createContext<ListContextType|null>(
   null
);

export function ListsContextProvider({children}: {children: ReactNode} ){
    const {baby, loadBaby} = useBabiesContext() as BabyContextType;
    const [babyFirstChange, setBabyFirstChange] = useState<number>(0)
    useEffect(()=>{loadBaby(5); setBabyFirstChange(1)},
        [babyFirstChange]
    )

    const words_lists = () =>{
        if(baby) return baby.words_lists
        else return []
    }

    const [lists, setLists] = useState<List[]>(words_lists()); 
    const [list, setList] = useState<List|null>(null);

    const {babyUpdateListsById} = useBabiesContext() as BabyContextType;
    const saveLists = ()=>{
        babyUpdateListsById(baby.id, lists)
    }

    const addList = (newList:List) => {
       setLists([...lists,newList])
       saveLists()
    }

    const deleteList = (category:string) => {
        const updatedLists = lists.filter
        (
            (list) => list.category !== category 
        )
        setLists(updatedLists)
        if(list.category===category) setList(null)
            saveLists()
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
        saveLists()
    }

    const getListByCategory = (category:string)=>{
        let found = lists.find((l)=>l.category===category)
        if(found) {
            setList(found)
            return found
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

    return( <ListsContext.Provider value={value_to_share}>
        {children}
    </ListsContext.Provider> )
}
