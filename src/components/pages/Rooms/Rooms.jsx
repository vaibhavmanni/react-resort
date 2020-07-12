import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../Hero/Hero'
import Banner from '../../Banner/Banner'
import RoomContainer from '../../RoomContainer/RoomContainer'
import styles from './Rooms.module.css'



const Rooms = () => {
    return (
        <div className={styles.container}>
            <Hero hero={styles.roomsHero}>
                <Banner title='Our Rooms'>
                    <Link to='./' className={styles.btnExplore}>Back Home</Link>
                </Banner>
            </Hero>
            <RoomContainer></RoomContainer>
        </div>
    )
}

export default Rooms;