import React, { useState } from "react";
import styles from "./Dish.module.css";

function Dish({ dish }) {
  const [showImage, setShowImage] = useState(false);

  return (
    <>
      {/* Kortet */}
      <div 
        className={styles.card} 
        onClick={() => setShowImage(true)}
      >
        <div className={styles.dishHeader}>
          <span className={styles.title}>{dish.tittel}</span>
          <span className={styles.price}> {dish.pris}</span>
        </div>
        <p className={styles.ingredients}>{dish.ingredienser}</p>
      </div>

      {/* Modal */}
      {showImage && (
        <div className={styles.modal} onClick={() => setShowImage(false)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <img src={dish.bilde} alt={dish.tittel} />
          </div>
        </div>
      )}
    </>
  );
}

export default Dish;
