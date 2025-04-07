import { useNavigate } from "react-router-dom";

function ListActionCard({list,setList,listDelete}) {
    const navigate = useNavigate()
    const createCardsView = ()=>{
        setList(list);
        navigate("/presentation/cards")
    }

    const createPresentationView = ()=>{
        setList(list);
        navigate("/presentation/slides")
    }

    const listDeleteAction = ()=>{
        listDelete(list.id)
    }
    
    const renderedWords = list.words.join(', ')
    return ( 
        <li className="grid grid-cols-2 grid-rows-1">
            <div className="image"></div>
            <div className="content py-8 text-center">
            <h3>{list.name}</h3>
            <p className="text-sm">({renderedWords})</p> 
            <div className="actions flex justify-between px-2">
                <div className="cards" onClick={createCardsView}>cards</div>
                <div className="presentation" onClick={createPresentationView}>run</div>
                <div className="edit">edit</div>
                <div onClick={listDeleteAction} className="delete">delete</div>
            </div>
        </div>
    </li>
     );
}

export default ListActionCard;