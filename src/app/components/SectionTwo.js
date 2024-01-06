import styles from './SectionTwo.module.css';
import Link from 'next/link';

export default function SectionTwo() {
    return (

        <div className={styles.mainContainer}>
            <div className={styles.mainWrapper}>
                <div className={styles.svgDivider}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path fill="#ffffff" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
                <div className={styles.imgWrapper}>
                    <img src="/clothrack.png" alt="" />
                </div>
                <div className={styles.contentBlurb}>
                    <h2>Let us make your wardrobe</h2>
                    <p>Introducing "Floresca Threads" – your ultimate destination for bespoke apparel and precision alterations. At Floresca Threads, we blend artistry with functionality to create and modify clothing and accessories that perfectly fit your style and needs. Whether it’s crafting a custom-designed garment or altering an existing piece to suit your unique silhouette, our skilled seamstress ensures each stitch is sewn with precision and care. </p>
                    <Link href="/contact"><button className={styles.contactUsBTN}>Contact Us</button></Link>
                </div>
            </div>
        </div>

    );
}