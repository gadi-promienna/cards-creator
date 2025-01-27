import {createContext} from "react";
import {useState} from "react";
import { useCallback } from "react";
import { ReactNode } from "react";
import { CardContextType, Card } from "../@types/card";
import axios from "axios";

// fetchCards: ()=>Promise<void>,
//     cardCreate: (name:string,words:string[]) => void;
//     cardUpdate: (id:number,name:string,words:string[]) => void;
//     cardDelete: (id:number) => void;
//     findCard: (id:number) => void;

export const CardsContext = createContext<CardContextType|null>(
   null
);

export function CardsContextProvider({children}: {children: ReactNode} ){
    const fetchCards = useCallback (async() => {
        const response = await axios.get('http://localhost:3001/cards')
        setCards(response.data)
    }, [] )

    const findCard = useCallback (async(word:string) => {
        const response = await axios.get(`http://localhost:3001/cards?word=${word}`)
        return(response.data[0])
    }, [] )

    const [cards, setCards] = useState<Card[]>([]); 
    const [card, setCard] = useState<Card|null>(null);

    const cardCreate = async (word:"string") => {
        const response = await axios.post('http://localhost:3001/cards', {word: word, image_url:""})
        return response.data[0]
        // setCards([...Cards, response.data])
        // setCard(response.data)
    }

    const cardDelete = async (id:number) => {
        const response = await axios.delete(`http://localhost:3001/cards/${id}`)
        return false;
    }

    const cardUpdate = async (id:number, word:string) => {
        const response = await axios.put(`http://localhost:3001/cards/${id}`, {
                word: word,
            })
        return(response.data[0])
    }
 

    const value_to_share = {
        cards,
        card,
        findCard,
        fetchCards,
        cardCreate,
        cardUpdate,
        cardDelete
    }

    return( <CardsContext.Provider value={value_to_share}>
        {children}
    </CardsContext.Provider> )
}
