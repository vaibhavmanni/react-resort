import React from 'react';
import Room from '../Room/Room'

import styles from './RoomList.module.css';

export default function RoomList({rooms}) {
    if(rooms.length === 0){
        return(
            <div className={styles.emptySearch}>
                <h3>No Rooms matched your search parameters</h3>
            </div>
        )
    }
    return (
        <section className={styles.roomslist}>
            <div className={styles.roomslistCenter}>
                {
                    rooms.map(item => {
                        return <Room key={item.id} room={item}/>
                    })
                }
            </div>
        </section>
    )
}
