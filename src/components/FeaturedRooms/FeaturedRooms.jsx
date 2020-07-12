import React, { Component } from 'react';
import { RoomContext } from '../../context';
import Loading from '../Loading/Loading';
import Room from '../Room/Room'

import styles from './FeaturedRooms.module.css';

export default class FeaturedRooms extends Component {
    
    static contextType = RoomContext
    
    render() {
        let { loading, featuredRooms: rooms} = this.context;
        // console.log(rooms);
        rooms = rooms.map( room => {
            return <Room key={room.id} room={room}/>
        })
        return (
            <section className={styles.container}>
                <h1 className={styles.heading}>Featured Rooms</h1>
                <div className={styles.line}></div>
                <div className={styles.featuredRoomsCenter}>
                    {loading ? <Loading/> : rooms}
                </div>
            </section>
        )
    }
}
