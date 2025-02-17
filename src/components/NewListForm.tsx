import { useState } from "react"
import useListsContext from "../hooks/use-lists-context"
import useCardsContext from "../hooks/use-cards-context"

function NewListForm(){
    const [name, setName] = useState("")
    const [words, setWords] = useState("")
    const {listCreate} = useListsContext()
    const {deckCreate} = useCardsContext()
    
    const onNameChange = (e) => {
        setName(e.target.value)
    }

    const onWordsChange = (e) => {
        setWords(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const wordsToArray = words.split(',')
        listCreate(name,wordsToArray)
        deckCreate(wordsToArray)
        //TODO - check words
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Tytuł listy</label>
            <input onChange={onNameChange} type="text" id="fName" name="name" placeholder="Tytuł listy"/>
            <label>Lista słów odzielona przecinkiem</label>
            <input onChange={onWordsChange} type="text" id="fWords" name="words" placeholder="Tytuł listy"/>
            <button type="submit">Generuj i zapisz</button>
        </form>
    )
}

export default NewListForm;