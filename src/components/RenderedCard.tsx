function RenderedCard({word, image_url}) {
    console.log(image_url)
    return ( 
        <div className="card border-black border-2"> 
            <div className="image">
                <img src={image_url} alt={word + "_foto"} className="image" />
            </div>
            <div className="content">
                <div className="word title">{word}</div>
            </div>
           
        </div>
     );
}

export default RenderedCard;