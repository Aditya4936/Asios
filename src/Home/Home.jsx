import React from 'react';
import Banner from './Slider'
import Aboutcompany from './Aboutcompany';
import Portfolio from './Portfolio';
const Home = () => {
    return (
        <div >
            <Banner />
                <Aboutcompany />
                <Portfolio/>
        </div>
    )
}

export default Home;
