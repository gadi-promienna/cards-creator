import {createContext} from "react";
import {useState} from "react";
import { useCallback } from "react";
import { ReactNode } from "react";
import { ListContextType, List } from "../@types/list";
import axios from "axios";
export const ListsContext = createContext<ListContextType|null>(
   null
);
export function ListsContextProvider({children}: {children: ReactNode} ){
   
     const fetchLists = useCallback (async() => {
        const response = await axios.get('http://localhost:3001/lists')
        setLists(response.data)
    }, [] )

    const getListByID = useCallback (async(id:number) => {
        const response = await axios.get(`http://localhost:3001/lists/${id}`)
        setList(response.data)
    }, [] )

    const [lists, setLists] = useState<List[]>([]); 
    const [list, setList] = useState<List|null>(null);

    const listCreate = async (name:string, words:String[]) => {
        const response = await axios.post('http://localhost:3001/lists', {name: name, words:words})
        setLists([...lists, response.data])
        setList(response.data)
    }

    const listDelete = async (id:number) => {
        const response = await axios.delete(`http://localhost:3001/lists/${id}`)
        setLists(response.data)
    }

    const listUpdate = async (id:number, name:string, words:string[]) => {
        const response = await axios.put(`http://localhost:3001/lists/${id}`, {
                name: name,
                words: words,
            })

        setLists([...lists, response.data])
    }
 

    const value_to_share = {
        lists,
        list,
        fetchLists,
        getListByID,
        listCreate,
        listUpdate,
        listDelete
    }

    return( <ListsContext.Provider value={value_to_share}>
        {children}
    </ListsContext.Provider> )
}
