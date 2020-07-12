import React from 'react'
import styles from './Banner.module.css'

export default function Banner({ children, title, subtitle }) {
    return (
        <div className={styles.banner}>
            <p className={styles.heading}>{title}</p>
            <div className={styles.line}/> 
            <p className={styles.content}>{subtitle}</p>
            {children}
        </div>
    )
}
