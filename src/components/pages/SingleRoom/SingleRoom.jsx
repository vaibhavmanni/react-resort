import React, { Component } from 'react';
import defaultBcg from '../../../images/room-1.jpeg';
import Banner from '../../Banner/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../../../context'
import StyledHero from '../../StyledHero/StyledHero'

import styles from './SingleRoom.module.css'

export default class SingleRoom extends Component {
    constructor(props){
        super(props);
        // console.log(this.props);
        this.state = {
            slug:this.props.match.params.slug,
            defaultBcg
        } 
    }
    static contextType = RoomContext;


    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if(!room) {
            return <div className={styles.error}>
                <h2 className={styles.oops}>OOPS! no such room found</h2>
                <Link to='/rooms' className={styles.btnbackToRooms}>Back to Rooms</Link>
            </div>
        }
        const {name, description, capacity, size, price, extras, breakfast, pets, images} = room
        const [mainImg, ...defaultImg] = images;

        return (
            <div className={styles.container}>
                <StyledHero img={images[0] || defaultBcg}>
                    <Banner title={`${name}`}>
                        <Link to='/rooms' className={styles.btnbackToRooms}>
                            Back to Rooms
                        </Link>
                    </Banner>
                </StyledHero>
                <section className={styles.singleRoom}>
                    <div className={styles.singleRoomImages}>
                        {defaultImg.map((item, index) => {
                        return <img key={index} src={item} alt={name} />;
                        })}
                    </div>
                    <div className={styles.singleRoomInfo}>
                        <article className={styles.desc}>
                            <h3>details</h3>
                            <div className={styles.line}></div>
                            <p>{description}</p>
                        </article>
                        <article className={styles.info}>
                            <h3>Info</h3>
                            <div className={styles.line}></div>
                            <h6>price: ${price}</h6>
                            <h6>size: {size} SQFT</h6>
                            <h6>
                                max capacity :{" "}
                                {capacity > 1 ? `${capacity} people` : `${capacity} person `}
                            </h6>
                            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                            <h6>{breakfast && "free breakfast included"}</h6>
                        </article>
                    </div>
                </section>
                <section className={styles.roomExtras}>
                    <h3>Extras</h3>
                    <div className={styles.line}></div>
                    <ul className={styles.extras}>
                        {extras.map((item, index) => {
                        return <li key={index}>- {item}</li>;
                        })}
                    </ul>
                </section>
            </div>
        )
    }
}
