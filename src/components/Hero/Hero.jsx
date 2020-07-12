import React from 'react'
import styles from './Hero.module.css'

export default function Hero( { children, hero } ) {
    return (
        <div className={hero}>
            {children}
        </div>
    )
}
Hero.defaultProps = {
    hero:`${styles.defaultHero}`
}
