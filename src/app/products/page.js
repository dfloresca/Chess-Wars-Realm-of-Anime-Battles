import Navigation from "../components/layout/Navigation";
import styles from './Products.module.css'

export default function products(){
    return(

        <div>
            <Navigation />
            <h1 className={styles.h1}>Floresca Threads Originals</h1>
            <ul className={styles.miniFilter}>
                <li className={styles.listFilter}>All</li>
                <li className={styles.listFilter}>Blouses</li>
                <li className={styles.listFilter}>Dresses</li>
            </ul>

        </div>
    );
    }