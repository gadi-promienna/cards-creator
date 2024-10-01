import {} from "../hooks/use-babies-context";
import { useEffect } from "react";
import { Baby, BabyContextType} from "../@types/baby";
import useBabiesContext from "../hooks/use-babies-context";

function Home(){
    const {babies, baby, fetchBabies, loginBaby} = useBabiesContext() as BabyContextType;
    useEffect(() => {
        fetchBabies()
    },
    [fetchBabies]
    )

    const currentBaby:Baby|null = loginBaby("test","test")
    console.log(currentBaby)

    return(
        <h2>Login</h2>
    )
}

export default Home;