import { ReactDOM,useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useListsContext from "../../hooks/use-lists-context";
import useCardsContext from "../../hooks/use-cards-context";
import { instanceOf } from "prop-types";
import { create } from "domain";
import RenderedCard from "../../components/RenderedCard";

function Cards(){
   const { getListByID, list } = useListsContext()
   const { deckFetch, deck} = useCardsContext() 
   const [ifReadyList, setIfReadyList] = useState<number>(0)
   const [startCreateDeck, setStartCreateDeck] = useState<number>(0)
   const [ifReadyDeck, setIfReadyDeck] = useState<number>(0)
   
   const getListByIdEffect = ()=>{
      if(!list) getListByID( "1" );
   }

   useEffect(
      ()=>{getListByIdEffect()},
      []
   )

   const createDeckEffect = ()=>{
      if(list?.words){
            deckFetch(list.words)
      } else {
         setIfReadyList(ifReadyList+1)
      }
   }

   useEffect(
      ()=>{ createDeckEffect() },
      [ifReadyList]
   )

   const renderListTitle = <h1 className="pb-8 text-lg text-g">Karty "{list?.name}"</h1>

   const renderedDeck = deck.map(
      (card)=>{
         return <RenderedCard id={card.id} word={card.word} image_url={card.image_url}></RenderedCard>
      }
   )
   return(
      <div>
        {renderListTitle}
        <div className="cards flex flex-wrap gap-20 justify-center">
         {renderedDeck}
        </div>
      </div>
    )
}

export default Cards;