import { useState } from "react"
import useListsContext from "../hooks/use-lists-context"
import useCardsContext from "../hooks/use-cards-context"
import { useNavigate } from "react-router-dom"

function NewListForm(){
    const [name, setName] = useState("")
    const [words, setWords] = useState("")
    const {listCreate} = useListsContext()
    const {deckCreate} = useCardsContext()
    const navigate = useNavigate()

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
        navigate("/presentation/slides")
        //TODO - check words
    }

    return(
        <form className="flex flex-col align-middle gap-4 px-4 py-4" onSubmit={onSubmit}>
            <label htmlFor="name">Tytuł listy</label>
            <input className="rounded-xl" onChange={onNameChange} type="text" id="fName" name="name" placeholder="Tytuł listy"/>
            <label htmlFor="words">Lista słów odzielona przecinkiem</label>
            <textarea className="rounded-xl h-60" onChange={onWordsChange} id="fWords" name="words" placeholder="np. krzesło,stół,kanapa"/>
            <button className="cta_button" type="submit">Generuj i zapisz</button>
        </form>
    )
}

export default NewListForm;