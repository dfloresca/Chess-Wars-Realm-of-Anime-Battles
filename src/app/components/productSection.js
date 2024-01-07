'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../ProductSection.module.css';
import ProductSectionAll from './productSectionAll';


export default function Products() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [allItems, setAllItems] = useState([]); // Define allItems state
    const [filteredItems, setFilteredItems] = useState([]); // Define filteredItems state

    const handleCategoryClick = (category) => {
        // console.log(`Selected category: ${category}`);
        setSelectedCategory(category);
    };

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/products`)
            .then(response => {
                // console.log(`Fetched items: ${JSON.stringify(response.data, null, 2)}`);
                setAllItems(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        const items = selectedCategory === 'All' ? allItems : allItems.filter(item => item.category.toLowerCase() === selectedCategory);
        // console.log(`Filtered items: ${JSON.stringify(items, null, 2)}`);
        setFilteredItems(items);
    }, [selectedCategory, allItems]);

    return (
        <div>
            <h1 className={styles.h1}>Floresca Threads Originals</h1>
            <ul className={styles.miniFilter}>
                <li key={`category-All`} className={styles.listFilter} onClick={() => handleCategoryClick('All')}>All</li>
                <li key={`category-blouse`} className={styles.listFilter} onClick={() => handleCategoryClick('blouse')}>Blouses</li>
                <li key={`category-dress`} className={styles.listFilter} onClick={() => handleCategoryClick('dress')}>Dresses</li>
            </ul>
            <ProductSectionAll items={filteredItems} />
        </div>
    );
}