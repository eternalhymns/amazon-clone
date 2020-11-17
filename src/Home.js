import React from 'react';
import'./Home.css';
import Product from "./Product.js";
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://cdn.mos.cms.futurecdn.net/wiXtq4NPpGbNf6PEHTT4hg-320-80.jpg" alt=""/>
                <div className="home__row">
                    <Product id="34353849"
                             title="Directorate S: The C.I.A. and America's Secret Wars in Afghanistan and Pakistan Paperback – Illustrated, February 5, 2019"
                             price={15.99} 
                             image="https://images-na.ssl-images-amazon.com/images/I/41MV5DFHN6L._AC_SX184_.jpg" 
                             rating={5} />
                    <Product title="Stone Lain Coupe Dinnerware Set, Service For 4, Black Matte"
                             price={29.77} 
                             image="https://m.media-amazon.com/images/I/81uA+IVnJcL._AC_UL480_FMwebp_QL65_.jpg" 
                             rating={3} />
                </div>
                <div className="home__row">
                    <Product id="44353849"
                             title="Welch's Fruit Snacks, Berries 'n Cherries, Gluten Free, Bulk Pack, 0.9 oz Individual Single Serve Bags (Pack of 40)"
                             price={13.45} 
                             image="https://m.media-amazon.com/images/I/91hj+c7OLpL._AC_UL480_FMwebp_QL65_.jpg" 
                             rating={5} />
                    <Product id="34353848"
                             title="French's Classic Yellow Mustard (Stone Ground Mustard, Gluten Free), 14 oz"
                             price={13.45} 
                             image="https://m.media-amazon.com/images/I/71ajhzmiX6L._AC_UL480_FMwebp_QL65_.jpg" 
                             rating={5} />
                    <Product id="34354848"
                             title="Nabisco Savory Cracker Variety Pack, RITZ, Cheese Nips, Wheat Thins & RITZ Toasted Chips Sour Cream and Onion, 20 Snack Packs"
                             price={13.45} 
                             image="https://m.media-amazon.com/images/I/81yZRKHl9bL._AC_UL480_FMwebp_QL65_.jpg" 
                             rating={5} />
                </div>
                <div className="home__row">
                <Product     id="94354848"
                             title="KODAK Mini Digital Film & Slide Scanner – Converts 35mm, 126, 110, Super 8 & 8mm Film Negatives & Slides to 22 Megapixel JPEG Images – Includes - 2.4 LCD Screen – Easy Load Film Adapters"
                             price={119.99} 
                             image="https://m.media-amazon.com/images/I/71z8cGgjj-L._AC_UY327_FMwebp_QL65_.jpg" 
                             rating={5} />
                    
                </div>

            </div>
        </div>
    )
}

export default Home;
