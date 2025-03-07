import { ReactDOM,useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useListsContext from "../../hooks/use-lists-context";
import useCardsContext from "../../hooks/use-cards-context";
import { instanceOf } from "prop-types";
import { create } from "domain";
import Slide from "../../components/slide";

function Slides(){
   const { getListByID, list } = useListsContext()
   const { deckFetch, deck} = useCardsContext() 
   const { id } = useParams()
   const [ifReadyList, setIfReadyList] = useState<number>(0)
   const [startCreateDeck, setStartCreateDeck] = useState<number>(0)
   const [ifReadyDeck, setIfReadyDeck] = useState<number>(0)
   
   const getListByIdEffect = ()=>{
      if(!list) getListByID( id );
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

   const renderList = <h2>List {list?.name}</h2>

   const renderedDeck = deck.map(
      (card)=>{
         return <Slide word={card.word} image_url={card.image_url}></Slide>
      }
   )
   return(
      <div>
        <div>Widok prezentacji</div>
        {renderList}
        {renderedDeck}
      </div>
    )
}

export default Slides;