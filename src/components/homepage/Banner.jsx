import React from 'react';
import heroImg from '../../assets/hero_book.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 h-[70vh] my-4 rounded-md p-4">
            <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full">
                <img
                    src={heroImg}
                    className="rounded-lg shadow-2xl"
                />
                <div className='space-y-4'>
                    <h1 className="text-5xl font-semibold">Books to freshen up your bookshelf</h1>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;