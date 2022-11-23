
import './App.css';
import React from 'react';
import PhotoAlbum from "react-photo-album";
import AliceCarousel from 'react-alice-carousel';
import * as PropTypes from "prop-types";
import App from "./App";


function Gallerie2() {

    const photos = [
        {
            src: "https://picsum.photos/800/600?random=1",
            width: 800,
            height: 600,
        },
        {
            src: "https://picsum.photos/800/600?random=2",
            width: 1600,
            height: 900,
        },
        {
            src: "https://picsum.photos/800/600?random=3",
            width: 800,
            height: 800,
        },
        {
            src: "https://picsum.photos/800/600?random=4",
            width: 1000,
            height: 800,
        },
        {
            src: "https://picsum.photos/800/600?random=12",
            width: 900,
            height: 800,
        },
        {
            src: "https://picsum.photos/800/600?random=5",
            width: 800,
            height: 600,
        },
        {
            src: "https://picsum.photos/800/600?random=6",
            width: 2000,
            height: 900,
        },
        {
            src: "https://picsum.photos/800/600?random=7",
            width: 2000,
            height: 800,
        },
        {
            src: "https://picsum.photos/800/600?random=12",
            width: 500,
            height: 800,
        },
        {
            src: "https://picsum.photos/800/600?random=8",
            width: 800,
            height: 800,
        },
        {
            src: "https://picsum.photos/800/600?random=9",
            width: 1600,
            height: 700,
        },
        {
            src: "https://picsum.photos/800/600?random=10",
            width: 1000,
            height: 800,
        },
        {
            src: "https://picsum.photos/800/600?random=11",
            width: 1000,
            height: 800,
        },
        {
            src: "https://picsum.photos/800/600?random=12",
            width: 500,
            height: 800,
        },
        {
            src: "https://picsum.photos/800/600?random=1",
            width: 800,
            height: 600,
        },
        {
            src: "https://picsum.photos/800/600?random=2",
            width: 1600,
            height: 900,
        },
        {
            src: "https://picsum.photos/800/600?random=3",
            width: 800,
            height: 800,
        },
        {
            src: "https://picsum.photos/800/600?random=4",
            width: 1000,
            height: 800,
        },
        {
            src: "https://picsum.photos/800/600?random=12",
            width: 900,
            height: 800,
        },
        {
            src: "https://picsum.photos/800/600?random=5",
            width: 800,
            height: 600,
        },
        {
            src: "https://picsum.photos/800/600?random=6",
            width: 2000,
            height: 900,
        },
        {
            src: "https://picsum.photos/800/600?random=7",
            width: 2000,
            height: 800,
        },
        {
            src: "https://picsum.photos/800/600?random=12",
            width: 500,
            height: 800,
        },
        {
            src: "https://picsum.photos/800/600?random=8",
            width: 800,
            height: 800,
        },
        {
            src: "https://picsum.photos/800/600?random=9",
            width: 1600,
            height: 700,
        },
        {
            src: "https://picsum.photos/800/600?random=10",
            width: 1000,
            height: 800,
        },
        {
            src: "https://picsum.photos/800/600?random=11",
            width: 1000,
            height: 800,
        },
        {
            src: "https://picsum.photos/800/600?random=12",
            width: 500,
            height: 800,
        },
    ];


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

    <>
            <header>
                <h1>Bildergalerie</h1>
            </header>
            <div>
                 <PhotoAlbum layout="rows" photos={photos} />
            </div>
        <br/>
            <div>
                <AliceCarousel  id={"slide"} mouseTracking items={items}/>
            </div>

</>


    );
}
export default Gallerie2;


