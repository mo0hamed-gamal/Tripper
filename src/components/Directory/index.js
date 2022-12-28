import React from 'react';
import HotelsImg from './../../assets/hotels1.jpg';
import ApartmentsImg from './../../assets/apartments1.jpg';
import BedsImg from './../../assets/beds.jpg';
import RoomsImg from './../../assets/rooms.jpg';
import ChaletsImg from './../../assets/chalets.jpg'
import GizaImg from './../../assets/giza.jpg';
import SheikhZayedImg from './../../assets/SheikhZayed.jpg'
import sharmElSheikhImg from './../../assets/sharmElSheikh.jpg';
import DahabImg from './../../assets/dahab.jpg';
import HosaryImg from './../../assets/hosary.jpg';
import MadinatyImg from './../../assets/madinaty.jpg';
import MidtownImg from './../../assets/midtown.jpg';
import HurghadaImg from './../../assets/hurghada.jpg';
import AlexandriaImg from './../../assets/alexandria.jpg';
import ZamalekImg from './../../assets/zamalek.jpg';
import './styles.scss';

const Directory = props => {
    return (
        <div className="directory">
            <div className="wrap">
                <div
                    className="item"
                    style={{
                        backgroundImage: `url(${HotelsImg})`
                    }}
                >
                    <a href="http://localhost:3000/search/hotel">
                        Browse Hotels
                    </a>
                </div>
                <div
                    className="item"
                    style={{
                        backgroundImage: `url(${ApartmentsImg})`
                    }}
                >
                    <a href="http://localhost:3000/search/apartment">
                        Browse Apartments
                    </a>
                </div>
                <div
                    className="item"
                    style={{
                        backgroundImage: `url(${ChaletsImg})`
                    }}
                >
                    <a href="http://localhost:3000/search/chalet">
                        Browse Chalets
                    </a>
                </div>
                <div
                    className="item"
                    style={{
                        backgroundImage: `url(${RoomsImg})`
                    }}
                >
                    <a href="http://localhost:3000/search/room">
                        Browse Rooms
                    </a>
                </div>
            </div>

            <div className="placesNearWrap">
                <h4>Explore nearby</h4>
                <div
                    className="item2"
                    style={{
                        backgroundImage: `url(${GizaImg})`
                    }}
                >
                    <a href="http://localhost:3000/search/room">
                        Giza
                    </a>
                </div>
                <div
                    className="item2"
                    style={{
                        backgroundImage: `url(${SheikhZayedImg})`
                    }}
                >
                    <a href="http://localhost:3000/search/room">
                        Zayed
                    </a>
                </div>
                <div
                    className="item2"
                    style={{
                        backgroundImage: `url(${sharmElSheikhImg})`
                    }}
                >
                    <a href="http://localhost:3000/search/room">
                        Sharm
                    </a>
                </div>
                <div
                    className="item2"
                    style={{
                        backgroundImage: `url(${DahabImg})`
                    }}
                >
                    <a href="http://localhost:3000/search/chalet">
                        Dahab
                    </a>
                </div>
                <div
                    className="item2"
                    style={{
                        backgroundImage: `url(${HosaryImg})`
                    }}
                >
                    <a href="http://localhost:3000/search/room">
                        Hosary
                    </a>
                </div>
                <div
                    className="item2"
                    style={{
                        backgroundImage: `url(${MadinatyImg})`
                    }}
                >
                    <a href="http://localhost:3000/search/villa">
                        Madinaty
                    </a>
                </div>
                <div
                    className="item2"
                    style={{
                        backgroundImage: `url(${MidtownImg})`
                    }}
                >
                    <a href="http://localhost:3000/search/room">
                        Midtown
                    </a>
                </div>
                <div
                    className="item2"
                    style={{
                        backgroundImage: `url(${HurghadaImg})`
                    }}
                >
                    <a href="http://localhost:3000/search/room">
                        Hurghada
                    </a>
                </div>
                <div
                    className="item2"
                    style={{
                        backgroundImage: `url(${AlexandriaImg})`
                    }}
                >
                    <a href="http://localhost:3000/search/room">
                        Alexandria
                    </a>
                </div>
                <div
                    className="item2"
                    style={{
                        backgroundImage: `url(${ZamalekImg})`
                    }}
                >
                    <a href="http://localhost:3000/search/room">
                        Zamalek
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Directory;

