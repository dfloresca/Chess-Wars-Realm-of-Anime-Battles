import ProductCard from "./ProductCards";
import styles from './ProductSection.module.css';
export default function ProductSection() {
    return(
        <div className={styles.sectionWrapper}>
        <h6 className={styles.h6}>shop collection</h6>
        <ProductCard />
        </div>
    );
}