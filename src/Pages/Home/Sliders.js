import React from 'react';
import images1 from '../../images/car1-.jpg'
import images2 from '../../images/cars-ever.webp'
import images3 from '../../images/car2.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Sliders = () => {

    return (
        <Carousel autoPlay='interval'>
            <div>
                <img src={images1} />
                <p className="legend">Genuine Car 1</p>
            </div>
            <div>
                <img src={images2} />
                <p className="legend">Genuine Car 2</p>
            </div>
            <div>
                <img src={images3} />
                <p className="legend">Genuine Car 3</p>
            </div>
        </Carousel>
    );

};


export default Sliders;

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>