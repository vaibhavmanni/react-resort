import React, { Component } from 'react'
import cx from 'classnames'

import { BsWifi, BsFillClockFill } from 'react-icons/bs';
import { FaCocktail, FaMoneyCheckAlt } from 'react-icons/fa';

import styles from './Services.module.css'

export default class Services extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={ cx(styles.card, styles.card-1) }>
                    <BsFillClockFill className={styles.icons}/>
                    <h1>Flexible Timings</h1>
                </div>
                <div className={ cx(styles.card, styles.card-2) }>
                    <BsWifi className={styles.icons}/>
                    <h1>Free Wi-Fi</h1>
                </div>
                <div className={ cx(styles.card, styles.card-3) }>
                    <FaCocktail className={styles.icons}/>
                    <h1>Unlimited Cocktail</h1>
                </div>
                <div className={ cx(styles.card, styles.card-4) }>
                    <FaMoneyCheckAlt className={styles.icons}/>
                    <h1>Best Prices Guarranted</h1>
                </div>
            </div>
        )
    }
}

