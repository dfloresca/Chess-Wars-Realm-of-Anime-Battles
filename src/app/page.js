'use client';
import Image from 'next/image';
import styles from './page.module.css';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import ProductSection from './components/productSection';

export default function Home() {

  return (
    <main className={styles.main}>
      <SectionOne />
      <ProductSection />
      <SectionTwo />
      

    </main>
  );
}