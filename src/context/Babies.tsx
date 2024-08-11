import {createContext} from "react";
import {useState} from "react";
import axios from "axios";
import {useCallback} from "react";
import { ReactNode } from "react";
import { BabyContextType, Baby } from "../@types/baby";
import { List } from "../@types/list";
import { encryptPassword } from "../helperFunctions/dataFormat";

export const BabiesContext = createContext<BabyContextType|null>(
   null
);

export function BabiesContextProvider({children}: {children: ReactNode} ){
    const [babies, setBabies] = useState<Baby[]>([]); 
    const [baby, setBaby] = useState<Baby|null>(null);

        const fetchBabies = useCallback (async() => {
            const response = await axios.get('http://localhost:3001/babies')
            setBabies(response.data)
        }, [] )

    const babyCreate = async (name:string, login:string, password:string) => {
        const response = await axios.post('http://localhost:3001/babies', {name: name, login: login, password: encryptPassword(password)})
        setBabies([...babies, response.data])
        setBaby(response.data)
    }

    // const fetchBaby = useCallback (async(login:string) => {
    //     const response = await axios.get("http://localhost:3001/babies?login="+login)
    //     setBaby(response.data)
    // }, [] )

    const getBaby = (login:string,password:string)=>{
        let found = babies.find((b:Baby)=>(b.login===login ))
        if(found?.password===password) {
            setBaby(found)
            return found
        } else return null
    }

    const babyDeleteById = async (id:number) => {
        const response = await axios.delete(`http://localhost:3001/babies/${id}`)
        setBabies(response.data)
    }

    const babyUpdateById = async (id:number, name:string, password:string, words_lists:List[]) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
                name: name,
                password: encryptPassword(password), 
                words_lists: words_lists,
            })

        setBaby(response.data)
    }

    const value_to_share = {
        babies,
        baby,
        fetchBabies,
        getBaby,
        babyCreate,
        babyUpdateById,
        babyDeleteById
    }

    return( <BabiesContext.Provider value={value_to_share}>
        {children}
    </BabiesContext.Provider> )
}
