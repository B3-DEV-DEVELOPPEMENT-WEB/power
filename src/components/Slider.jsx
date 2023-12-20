import React, { useState, useEffect } from "react";
import image1 from "../assets/img/yasuo.png";
import image2 from "../assets/img/ahri.png";
import image3 from "../assets/img/nocturne.png";

const Slider = () => {
    const images = [image1, image2, image3];
    const [index, setIndex] = useState(0);
    const [isMoving, setIsMoving] = useState(false);

    const next = () => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const previous = () => {
        setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const random = () => {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * images.length);
        } while (randomIndex === index);
        setIndex(randomIndex);
    };

    useEffect(() => {
        if (!isMoving) {
            const timer = setTimeout(next, 4000);
            return () => clearTimeout(timer);
        }
    }, [index, isMoving]);

    return (
        <>
            <h2>Slider</h2>
            <div className="box_img">
                <button onClick={previous}>Précédent</button>
                <img
                    src={images[index]}
                    alt="random"
                    onMouseEnter={() => setIsMoving(true)}
                    onMouseLeave={() => setIsMoving(false)}
                />
                <button onClick={next}>Suivant</button>
            </div>
            <button onClick={random}>Aléatoire</button>
        </>
    );
}

export default Slider;
