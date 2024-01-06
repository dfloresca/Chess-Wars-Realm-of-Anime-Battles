import styles from './SectionTwo.module.css';

export default function SectionTwo() {
    return (

        <div className={styles.mainContainer}>
            <div className={styles.mainWrapper}>
                <div className={styles.imgWrapper}>
                    <img src="/clothrack.png" alt="" />
                </div>
                <div className={styles.contentBlurb}>
                    <h3>Let us make your wardrobe</h3>
                    <p>Introducing "Floresca Threads" – your ultimate destination for bespoke apparel and precision alterations. At Floresca Threads, we blend artistry with functionality to create and modify clothing and accessories that perfectly fit your style and needs. Whether it’s crafting a custom-designed garment or altering an existing piece to suit your unique silhouette, our skilled seamstress ensures each stitch is sewn with precision and care. Our commitment to quality and attention to detail ensures that every piece, from elegant dresses to chic accessories, is a testament to your personal style. Let Floresca Threads transform your wardrobe into a curated collection of pieces that are uniquely yours. Visit us today and experience the art of tailored perfection!</p>
                    <button className={styles.contactUsBTN}>Contact Us</button>
                </div>
            </div>
        </div>

    );
}