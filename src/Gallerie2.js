
import './App.css';
import React from 'react';
import PhotoAlbum from "react-photo-album";
import AliceCarousel from 'react-alice-carousel';
import * as PropTypes from "prop-types";


function Carousel(props) {
    return null;
}

Carousel.propTypes = {
    rows: PropTypes.number,
    loop: PropTypes.bool,
    cols: PropTypes.number,
    gap: PropTypes.number,
    children: PropTypes.node
};

function Gallerie2() {


    const handleDragStart = (e) => e.preventDefault();
    const photos = [
        {
            src: "https://picsum.photos/800/600?random=1",
            width: 800,
            height: 600
        },
        {
            src: "https://picsum.photos/800/600?random=2",
            width: 1600,
            height: 900
        },
        {
            src: "https://picsum.photos/800/600?random=3",
            width: 800,
            height: 800
        },
        {
            src: "https://picsum.photos/800/600?random=4",
            width: 800,
            height: 800
        },
        {
        src: "https://picsum.photos/800/600?random=5",
        width: 800,
        height: 600
        },
        {
            src: "https://picsum.photos/800/600?random=6",
            width: 2000,
            height: 900
        },
        {
            src: "https://picsum.photos/800/600?random=7",
            width: 1000,
            height: 800
        },
        {
            src: "https://picsum.photos/800/600?random=8",
            width: 800,
            height: 800
        },
        {
            src: "https://picsum.photos/800/600?random=9",
            width: 1600,
            height: 700
        },
        {
            src: "https://picsum.photos/800/600?random=10",
            width: 1000,
            height: 800
        },
        {
            src: "https://picsum.photos/800/600?random=11",
            width: 500,
            height: 800
        }
    ];


return (

    <div>
            <header>
                <h1>Bildergalerie</h1>
            </header>
            <div>
                 <PhotoAlbum layout="rows" photos={photos} />
            </div>

        <div  >
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>

    );
}
export default Gallerie2;


