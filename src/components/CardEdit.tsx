import useCardsContext from "../hooks/use-cards-context";
import { useState } from "react";

function CardEdit({word,image_url, id}) {
    const { cardUpdate } = useCardsContext();
    const [imageUrl, setImageUrl] = useState(image_url);

    const wordIdentifierClass = word?.replaceAll(' ','')
    console.log(wordIdentifierClass)

    const showUpdateUrlForm = (e) => {
        const form = document.querySelector(`.${wordIdentifierClass}_update-url`);
        form.classList.remove('hidden');
        e.target.classList.add('hidden');
    }
    const updateImageUrl = (e) => {
        setImageUrl(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        cardUpdate(id, word, imageUrl);
    }

    return ( 
        <div className="update-url-view">
            <div className="pencil" onClick={showUpdateUrlForm}>
               <div className="pencil-icon font-bold text-green-900">&#128221;</div>
            </div>
            <form onSubmit={handleSubmit} className={`hidden ${wordIdentifierClass}_update-url update-url-form border-0 text-xs flex`}>
                    <input className="image-url p-0 border-0 bg-white opacity-80 w-full" type="text" name="image_url" placeholder="New image url" onChange={updateImageUrl}/>
                <button className="update_url_submit text-lg text-green-900 font-extrabold" type="submit">&#x2714;</button>
            </form>
        </div>
     );
}

export default CardEdit;