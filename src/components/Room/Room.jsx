import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import PropTypes from "prop-types";
import defaultImg from "../../images/room-4.jpeg";


import styles from "./Room.module.css";

export default function Room({ room }) {
  const { name, slug, images, price } = room;

  return (
    <article className={styles.room}>
      <div className={styles.imgContainer}>
        <img src={images[0] || defaultImg} alt="single-room" />
        <div className={styles.priceTop}>
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link
          to={`/${slug}`}
          className={cx(styles.btnFeatured, styles.roomLink)}
        >
          Features
        </Link>
      </div>
      <p className={styles.roomInfo}>{name}</p>
    </article>
  );
}

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
