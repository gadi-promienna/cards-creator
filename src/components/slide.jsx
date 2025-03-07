function Slide({word, image_url}) {
    console.log(image_url)
    return ( 
        <div className="slide">
            <div className="text">
                <div className="word">{word}</div>
            </div>
            <div className="image">
                <img src={image_url} alt={word + "_foto"} className="image" />
            </div>
        </div>
     );
}

export default Slide;