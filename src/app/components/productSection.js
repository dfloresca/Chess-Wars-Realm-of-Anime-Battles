'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../productSection.module.css';
import ProductSectionAll from './productSectionAll';
import CarouselWindow from './Carousel';


export default function Products() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [allItems, setAllItems] = useState([]); // Define allItems state
    const [filteredItems, setFilteredItems] = useState([]); // Define filteredItems state
    const [isMobile, setIsMobile] = useState(false); // Define isMobile state

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/products`)
            .then(response => {
                setAllItems(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        const items = selectedCategory === 'All' ? allItems : allItems.filter(item => item.category.toLowerCase() === selectedCategory);
        setFilteredItems(items);
    }, [selectedCategory, allItems]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 725);
        };

        handleResize(); // Check initial window size
        window.addEventListener('resize', handleResize); // Add event listener for window resize

        return () => {
            window.removeEventListener('resize', handleResize); // Clean up event listener on component unmount
        };
    }, []);

    return (
        <div>
            <h1 className={styles.h1}>Floresca Threads Originals</h1>
            <ul className={styles.miniFilter}>
                <li key={`category-All`} className={styles.listFilter} onClick={() => handleCategoryClick('All')}>All</li>
                <li key={`category-blouse`} className={styles.listFilter} onClick={() => handleCategoryClick('blouse')}>Blouses</li>
                <li key={`category-dress`} className={styles.listFilter} onClick={() => handleCategoryClick('dress')}>Dresses</li>
            </ul>
            {isMobile ? (
                <CarouselWindow items={filteredItems} />
            ) : (
                <ProductSectionAll items={filteredItems} />
            )}
        </div>
    );
}