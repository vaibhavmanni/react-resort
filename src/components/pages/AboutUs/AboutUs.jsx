import React from 'react';
import styles from './AboutUs.module.css'
import Hero from '../../Hero/Hero';
import Banner from '../../Banner/Banner';

const AboutUs = () => {
    return (
        <div className={styles.container}>
            <Hero hero={styles.aboutUsBackground}>
                <Banner title='About us' className={styles.banner}>
                    <p className={styles.aboutUsText}>Our resort is a an urban oasis that narrates 
                the visual language of nature seamlessly weaved with splendid architecture, and 
                reminisces of the rich heritage with eight acres of luscious greens and 
                ranquil water-bodies crisscrossing the length of this luxury resort.</p>
                </Banner>
            </Hero>
        </div>
    )
}

export default AboutUs;