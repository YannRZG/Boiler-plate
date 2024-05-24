import React from 'react';
import Animate from '../components/Anime';
import App from '../components/Modal';

const Home = () => {

    return (
    <>
        <div className='centered-container'>
            <h1 className="text-3xl font-bold">Home</h1>
            <Animate />
        </div>
        <div className="justify-center d-flex">
            <App />
            
        </div>
    </>
    )
}

export default Home