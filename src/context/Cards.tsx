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
        });}

    const deckFetch =
       (words=[]) => {
        const deckToDisplayPromises = words.map(async(word:string) => {
             const card = await findCard(word)
             if(card && card.length>0) return card[0]
            });
            Promise.all(deckToDisplayPromises).then(
                (values)=>{
                    const deckToDisplay = values.filter(
                        (v)=>{return v!==undefined}
                    )
                    console.log(deckToDisplay)
                    setDeck(deckToDisplay)
                })}

    const findCard = async(word:string) => {
        const response = await axios.get(`http://localhost:3001/cards?word=${word}`)
        const results = response.data.filter(
                (el)=>{ 
                    if("word" in el) return true
                    else return false
                }
            )
            console.log("talia")
        return results; }

    const cardCreate = async (word:string) => {
        const image_url = await getImageUrl(word)
        const response = await axios.post('http://localhost:3001/cards', {word: word, image_url:image_url})
    }

    const getImageUrl = async (word:string)=>{
        const response = await axios.get(
            'https://api.unsplash.com/search/photos',
            {
                headers: {
                    Authorization: ''
                },
                params: {
                    query: word,
                }})
        const results = response.data["results"]
        if(results.length>0) {
            console.log(results[0].urls.small)
            return results[0].urls.small
        } else return ""}

    const cardDelete = async (id:number) => {
        const response = await axios.delete(`http://localhost:3001/cards/${id}`)
        return false;
    }

    const cardUpdate = async (id:number, word:string) => {
        const response = await axios.put(`http://localhost:3001/cards/${id}`, {
                word: word
            })
        setDeck([...deck, response.data])}
 
    const cardAutoUpdate = async (id:number) => {
        const response = await axios.put(`http://localhost:3001/cards/${id}`, {
            image_url: "updated.jpg"
        })}

    const value_to_share = {
        cards,
        card,
        deck,
        deckCreate,
        deckFetch,
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
