// ProductSectionAll.js
import React from 'react';
import ProductCard from './productCard';
import styles from '../ProductSection.module.css';

const ProductSectionAll = ({ items }) => {
    return (
        <div className={styles.sectionWrapper}>
            {items.map(item => (
                <ProductCard key={item._id} item={item} />
            ))}
        </div>
    );
};

export default ProductSectionAll;