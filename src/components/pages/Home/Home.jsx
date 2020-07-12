import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../../Hero/Hero';
import Banner from '../../Banner/Banner'
import Services from '../../Services/Services'
import FeaturedRooms from '../../FeaturedRooms/FeaturedRooms';


import styles from './Home.module.css'

const Home = () => {
    return (
        <div className={styles.container}>
            <Hero>
                <Banner title='Lorem Resorts' subtitle='Curated to cater Comfort.'>
                    <div className={styles.btnContainer}>
                        <Link to='/about-us' className={styles.btnExplore}>Explore</Link>
                        <Link to='/rooms' className={styles.btnExplore}>Reserve now</Link>
                    </div>
                </Banner>
            </Hero>
            <Services></Services>
            <FeaturedRooms></FeaturedRooms>
        </div>           
    )
}

export default Home;