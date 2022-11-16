
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
                <h1>Bildergallerie</h1>
            </header>
            <div>
                    <img src="https://picsum.photos/800/600?random=1"/>,
                    <img src="https://picsum.photos/800/600?random=2"/>,
                    <img src="https://picsum.photos/800/600?random=3"/>
                    <img src="https://picsum.photos/800/600?random=4"/>
                    <img src="https://picsum.photos/800/600?random=5"/>
            </div>
            <footer>
                <AliceCarousel mouseTracking items={items}/>
                <image mouseTracking items={items}/>
            </footer>
        </div>
    );

}
export default App;


