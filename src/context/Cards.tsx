import {createContext} from "react";
import {useState} from "react";
import { useCallback } from "react";
import { ReactNode } from "react";
import { CardContextType, Card } from "../@types/card";
import axios from "axios";

export const CardsContext = createContext<CardContextType|null>(
   null
);

export function CardsContextProvider({children}: {children: ReactNode} ){
    const [deck, setDeck] = useState<Card[]>([]); 
    const [card, setCard] = useState<Card|null>(null);
    const [cards, setCards] = useState<Card[]|[]>(null);
    
    const fetchCards = useCallback (async() => {
        const response = await axios.get('http://localhost:3001/cards')
        setCards(response.data)
    }, [] )

    const deckCreate = async(words:[string]) => {
        words.forEach(word => {
            cardCreate(word)
        });
    }

    const findCard = useCallback (async(word:string) => {
        const response = await axios.get(`http://localhost:3001/cards?word=${word}`)
        const results = response.data;
        if (results.length < 1) {
            cardCreate(word);
        }
        else if (!results.image_url){
            cardAutoUpdate(results[0].id)
        }
       else setDeck([...deck, results])
    }, [] )

    const cardCreate = async (word:string) => {
        const response = await axios.post('http://localhost:3001/cards', {word: word, image_url:""})
        setDeck([...deck, response.data])
    }

    const cardDelete = async (id:number) => {
        const response = await axios.delete(`http://localhost:3001/cards/${id}`)
        return false;
    }

    const cardUpdate = async (id:number, word:string) => {
        const response = await axios.put(`http://localhost:3001/cards/${id}`, {
                word: word
            })
        setDeck([...deck, response.data])
    }
 
    const cardAutoUpdate = async (id:number) => {
        const response = await axios.put(`http://localhost:3001/cards/${id}`, {
            image_url: "updated.jpg"
        })
    }

    const value_to_share = {
        cards,
        card,
        deck,
        deckCreate,
        findCard,
        fetchCards,
        cardCreate,
        cardUpdate,
        cardDelete
    }

    return( 
    <CardsContext.Provider value={value_to_share}>
        {children}
    </CardsContext.Provider> )
}
