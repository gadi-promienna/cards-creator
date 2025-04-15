import CardEdit from "./CardEdit";

function RenderedCard({word, image_url, id}) {
    const wordIdentifierClass = ()=>{
        console.log(word)
        let wordIdentifier = word.replaceAll(' ','')
        return (wordIdentifier)
    }
    console.log(wordIdentifierClass)

    const showUpdateUrl = (e) => {
        const updateUrl = document.querySelector(`.${wordIdentifierClass()}-image`);
        updateUrl?.classList.remove('hidden');
    }

    const hideUpdateUrl = () => {
        const updateUrl = document.querySelector(`.${wordIdentifierClass()}-image`);
        updateUrl?.classList.add('hidden');
    }

    return ( 
        <div className="card border-black border-2"> 
            <div className="image relative" onMouseEnter={showUpdateUrl} onMouseLeave={hideUpdateUrl}>
                <img src={image_url} alt={word + "_foto"} />
                <span>ok</span>
                <div className={`hidden update-url ${wordIdentifierClass()}-image absolute top-2 right-2`}>
                    <CardEdit id={id} word={word} image_url={image_url} />
                </div>
            </div>
            <div className="content">
                <div className="word title">{word}</div>
            </div>
           
        </div>
     );
}

export default RenderedCard;