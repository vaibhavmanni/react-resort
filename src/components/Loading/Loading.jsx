import React from 'react'
import loadingGif from '../../images/gif/loading-arrow.gif'
import styles from './Loading.module.css';


export default function Loading() {
    return (
        <div className={styles.loading}>
            <h4>Loading...</h4>
            <img src={loadingGif} alt="loading"/>
        </div> 
    )
}
