import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../../Hero/Hero';
import Banner from '../../Banner/Banner'


import styles from './ErrorPage.module.css'

const ErrorPage = () => {
    return (
        <div className={styles.container}>
            <Hero>
                <Banner title='404' subtitle='The page you are looking for is not found.'>
                <Link to='/' className={styles.btnExplore}>Back Home</Link>
                </Banner>
            </Hero>
        </div>
    )
}

export default ErrorPage;