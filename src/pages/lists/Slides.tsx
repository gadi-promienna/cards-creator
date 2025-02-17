import { ReactDOM,useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useListsContext from "../../hooks/use-lists-context";
import useCardsContext from "../../hooks/use-cards-context";
import { instanceOf } from "prop-types";


function Slides(){
   const { getListByID, list } = useListsContext()
   const { findCard, deck} = useCardsContext() 
   const { id } = useParams()
   const [ifReadyList, setIfReadyList] = useState<number>(0)
   
   // const createDeck = async()=>{
   //    list?.words.forEach(async (word) =>
   //       await findCard(word)
   //    )
   // }
   
   
   const getListByIdEffect = ()=>{
      getListByID( id );
      if (list instanceof Promise){
         setIfReadyList(ifReadyList + 1)
      } 
   }

   useEffect(
      ()=>{ getListByIdEffect() },
      [ifReadyList]
   )

   console.log(list)
   return(
        <div>Widok prezentacji</div>
    )
}

export default Slides;