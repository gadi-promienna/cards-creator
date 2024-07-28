import {useContext} from "react";
import {BabiesContext} from "../context/Babies";

function useBabiesContext(){
    const context = useContext(BabiesContext);
    if (!context) {
        throw new Error(
          "Baby context has to be used within context provider"
        );
      }
    else return useContext(BabiesContext)
}

export default useBabiesContext