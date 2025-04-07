function RenderedSlide({word, image_url}) {
    return ( 
        <div className="slide card shadow-md"> 
            <div className="image">
                <img src={image_url} alt={word + "_foto"} className="image" />
            </div>
            <div className="content">
                <div className="word title">{word}</div>
            </div>
           
        </div>
     );
}

export default RenderedSlide;