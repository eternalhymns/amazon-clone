import React from 'react';
import'./Home.css';
import Product from "./Product.js";
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://cdn.mos.cms.futurecdn.net/wiXtq4NPpGbNf6PEHTT4hg-320-80.jpg" alt=""/>
                <div className="home__row">
                    <Product/>
                    <Product/>
                </div>
                <div className="home__row">
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
                <div className="home__row">
                    <Product/>
                    
                </div>

            </div>
        </div>
    )
}

export default Home;
