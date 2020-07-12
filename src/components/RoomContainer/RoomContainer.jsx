import React from 'react';
import RoomFilter from '../RoomFilter/RoomFilter';
import RoomList from '../RoomList/RoomList';
import { withRoomConsumer } from "../../context";
import Loading from "../Loading/Loading";

import styles from './RoomContainer.module.css';



function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <div className={styles.container}>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
      </div>
  );
}

export default withRoomConsumer(RoomContainer);