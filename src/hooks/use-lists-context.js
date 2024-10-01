import {useContext} from "react";
import { ListsContext } from "../context/Lists";

function useListsContext(){
    const context = useContext(ListsContext);
    if (!context) {
        throw new Error(
          "Lists context has to be used within context provider"
        );
      }
    else return useContext(ListsContext)
}

export default useListsContext