
import './App.css';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



function App() {

    const handleDragStart = (e) => e.preventDefault();

    const items = [
        <img src="https://picsum.photos/800/600?random=1" onDragStart={handleDragStart} role="presentation"/>,
        <img src="https://picsum.photos/800/600?random=2" onDragStart={handleDragStart} role="presentation"/>,
        <img src="https://picsum.photos/800/600?random=3" onDragStart={handleDragStart} role="presentation"/>,
        <img src="https://picsum.photos/800/600?random=4" onDragStart={handleDragStart} role="presentation"/>,
        <img src="https://picsum.photos/800/600?random=5" onDragStart={handleDragStart} role="presentation"/>,
        <img src="https://picsum.photos/800/600?random=6" onDragStart={handleDragStart} role="presentation"/>,
        <img src="https://picsum.photos/800/600?random=7" onDragStart={handleDragStart} role="presentation"/>,
        <img src="https://picsum.photos/800/600?random=8" onDragStart={handleDragStart} role="presentation"/>,
        <img src="https://picsum.photos/800/600?random=9" onDragStart={handleDragStart} role="presentation"/>,

    ];

    return (
        <div>
            <header>
            <h1>Gallery</h1>
                </header>
            <AliceCarousel mouseTracking items={items}/>
            <p>
                <image mouseTracking items={items}/>
            </p>
        </div>
    );
}

export default App;
