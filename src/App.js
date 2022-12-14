
import './App.css';
import React, {useEffect, useRef, useState} from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PhotoAlbum from "react-photo-album";
import {PhotoAlbumProps} from "react-photo-album";
import AliceCarousel from "react-alice-carousel";
import {VideoLightbox} from "lightbox.js-react";




function App() {

    const fotos= [
        {
            id: 1,
            src: "https://picsum.photos/800/600?random=1",
            width: 800,
            height: 600,
        },
        {
            id: 2,
            src: "https://picsum.photos/800/600?random=6",
            width: 2000,
            height: 900,
        },
        {
            id: 3,
            src: "https://picsum.photos/800/600?random=7",
            width: 700,
            height: 800,
        },
        {
            id: 4,
            src: "https://picsum.photos/800/600?random=12",
            width: 500,
            height: 800,
        },
        {
            id: 5,
            src: "https://picsum.photos/800/600?random=8",
            width: 800,
            height: 800,
        },
        {
            id: 6,
            src: "https://picsum.photos/800/600?random=9",
            width: 1600,
            height: 700,
        },
    ];


    const renderSlideInfo = ({ item, itemsCount }) => {
        return `${item}\\${itemsCount}` + ' Bild';
    };

    const renderDotsItem = ({ isActive }) => {
        return isActive ? 'x' : 'o';
    };

    const renderPrevButton = ({ isDisabled }) => {
        return <span style={{ opacity: isDisabled ? '0.5' : 1 }}>&lt;</span>;
    };

    const renderNextButton = ({ isDisabled }) => {
        return <span style={{ opacity: isDisabled ? '0.5' : 1 }}>&gt;</span>;
    };

    const renderPlayPauseButton = ({ isPlaying }) => {
        return isPlaying ? 'PAUSE' : 'PLAY';
    };
    const handleDragStart = (e) => e.preventDefault();

    const items = [
        <img src="https://picsum.photos/800/600?random=1" onDragStart={handleDragStart} role="presentation" data-value="1"/>,
        <img src="https://picsum.photos/800/600?random=2" onDragStart={handleDragStart} role="presentation" data-value="2"/>,
        <img src="https://picsum.photos/800/600?random=3" onDragStart={handleDragStart} role="presentation" data-value="3"/>,
        <img src="https://picsum.photos/800/600?random=4" onDragStart={handleDragStart} role="presentation" data-value="4"/>,
        <img src="https://picsum.photos/800/600?random=5" onDragStart={handleDragStart} role="presentation" data-value="5"/>,
        <img src="https://picsum.photos/800/600?random=6" onDragStart={handleDragStart} role="presentation" data-value="6"/>,
        <img src="https://picsum.photos/800/600?random=7" onDragStart={handleDragStart} role="presentation" data-value="7"/>,
    ];
    return (
        <div>
            <header>
                <h1>Video</h1>
            </header>
            <div>
                <video controls width={1000} loop autoPlay>
                    <source src={'"C:\\clip2-1080p.mp4"'} type={'video/mp4'}/>
                </video>
            </div>
            <br/>
            <header>
                <h1>Bildergallerie</h1>
            </header>
            <div>
                <PhotoAlbum  layout="rows" photos={fotos} />
            </div>
            <br/>
            <div>
                <AliceCarousel
                    key="carousel"
                    background-color={'black'}
                    mouseTracking items={items}
                    autoPlay
                    mouseTracking
                    disableSlideInfo={false}
                    renderSlideInfo={renderSlideInfo}
                    renderDotsItem={renderDotsItem}
                    renderNextButton={renderNextButton}
                    renderPrevButton={renderPrevButton}
                    renderPlayPauseButton={renderPlayPauseButton}
                />

            </div>
        </div>
    )
}
export default App;



