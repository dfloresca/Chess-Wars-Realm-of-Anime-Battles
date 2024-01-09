import styles from './ProductCard.module.css';
import { useState, useContext } from 'react';
import { CartContext } from '../store/cartContext';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselWindow = ({ items }) => {
    const cartCtx = useContext(CartContext);

    function handleAddToCart(item) {
        cartCtx.addItem(item);
        console.log('Add to cart clicked');
    }

    if (!items) {
        return null; // or return a loading spinner, or some placeholder content
    }

    return (
        <Carousel className={styles.carousel} showArrows={true} stopOnHover={true} swipeable={true} emulateTouch={true} centerMode={true} showThumbs={false}>
        {items.map(item => (
            <div className={styles.cardContainer} key={item._id}>
                <div className={styles.cardWrapper}>
                    <img src={item.image} alt="" />
                    <div className={styles.infoWrapper}>
                        <div className={styles.productInfo}>
                            <p className={styles.sudoTitle}>{item.name}</p>
                            <p>{item.price} USD</p>
                        </div>
                        <div onClick={() => handleAddToCart(item)} className={styles.addToCart}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        </Carousel>
    );
}

export default CarouselWindow;