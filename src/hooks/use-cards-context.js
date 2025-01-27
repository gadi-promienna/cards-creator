import {useContext} from "react";
import { CardsContext } from "../context/Cards";

function useCardsContext(){
    const context = useContext(CardsContext);
    if (!context) {
        throw new Error(
          "Cards context has to be used within context provider"
        );
      }
    else return useContext(CardsContext)
}

export default useCardsContext