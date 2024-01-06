// ProductSectionAll.js
import React from 'react';
import ProductCard from './productCard';
import styles from './ProductSection.module.css';

const ProductSection = ({ items }) => {
    return (
        <div className={styles.sectionWrapper}>
            {items.map(item => (
                <ProductCard key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ProductSection;