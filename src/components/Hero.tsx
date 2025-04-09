import hero from "../assets/images/hero.jpg";

function Hero() {
    return ( 
        <div className="hero-section">
            <div className="hero-image">
                <img src={hero} alt="Hero" />
            </div>
            <div className="hero-title flex justify-around flex-col gap-4 py-20 px-40">
                <h1 className="">Generator kart i prezentacji</h1>
                <h2>Wygenerują swoją niepowtarzalną talię kart lub prezentację z nazwami i obrazkami</h2>
            </div>
        </div>
     );
}

export default Hero;