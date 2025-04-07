import { ReactDOM,useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useListsContext from "../../hooks/use-lists-context";
import useCardsContext from "../../hooks/use-cards-context";
import { instanceOf } from "prop-types";
import { create } from "domain";
import RenderedSlide from "../../components/RenderedSlide";
import { Card } from "../../@types/card";

function Slides(){
   const { getListByID, list } = useListsContext()
   const { deckFetch, deck} = useCardsContext() 
   const [ifReadyList, setIfReadyList] = useState<number>(0)
   const [startCreateDeck, setStartCreateDeck] = useState<number>(0)
   const [ifReadyDeck, setIfReadyDeck] = useState<number>(0)
   
   const [current,setCurrent]=useState<number>(0);
   
   const getListByIdEffect = ()=>{
      if(!list) getListByID( "1" );
   }
   
   const currentSlide = ()=> {
      if(deck[current])return (<RenderedSlide word={deck[current].word} image_url={deck[current].image_url}/>)
      else return null
   }

   const nextSlide = ()=>{
      let next = null
      if(current+1<deck.length){
         next = deck[current+1]
      } else next = deck[0]
      return(
      <div className="next-slide hidden">
         <RenderedSlide word={next.word} image_url={next.image_url}/>
      </div>)}

   const prevSlide = ()=>{
      if(current-1>=0){
         let prev = deck[current-1]
         return(
         <div className="prev-slide hidden">
            <RenderedSlide word={prev.word} image_url={prev.image_url}/>
         </div>)
      } else return null
   }

   const presentationForward = ()=>{
      if(current+1<deck.length){
         setCurrent(current+1)
      } else setCurrent(0)
   }
   const presentationBackward = ()=>{
      if(current-1>=0){
         setCurrent(current-1)
      } else setCurrent(0)
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

   const renderedPresentation = ()=>{
      if(deck[0]?.word) return(

      <div className="slides flex items-stretch justify-center">
         {prevSlide()}
         {currentSlide()}
         {nextSlide()}
      </div>)

      else return(
         <div className="no-slides">
            Nie ma slajdów w tej prezentacji
         </div>)
      }
   
   return(
      <div className="presentation py-8">
         {renderedPresentation()}
        <div className="navigation text-sm fixed top-1/2 transform -translate-y-1/2 actions left-4 right-8">
            <div className="prev" onClick={presentationBackward}>prev</div>
            <div className="next" onClick={presentationForward}>next</div>
         </div>    
      </div>
    )
}

export default Slides;