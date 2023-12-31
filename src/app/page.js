'use client';
import './global.css';
import Image from 'next/image';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import setAuthToken from './utils/setAuthToken';
import Navigation from './components/layout/Navigation';
import ProductSection from './components/ProductSection';
import HPContactUs from './components/HPcontactUs';
import Footer from './components/layout/Footer';

// we are going to be fetching data from our API and displaying it on
// the page

export default function Home() {
  // state is what the data is representing in realtime
  // const [data, setData] = useState(null);
  // const [isLoading, setLoading] = useState(false);
  // const [age, setAge] = useState(null);
  // const [name, setName] = useState('Dylan');

  // useEffect(() => {
  //   // hitting an api and setting our component with some data
  //   fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // data is an object
  //       setData(data);
  //       setLoading(false);
  //     });
  // }, []);

  // if (isLoading) return <p>Loading...</p>;
  // if (!data) return <p>No data shown...</p>;

  return (
    <main className={styles.main}>
      {/* <p>{data.message}</p> */}
      <Navigation />
      <img className ={styles.heroImage}src="/heroImg1.png" />
      <ProductSection />
      <ProductSection />
      <HPContactUs />
      <Footer />
    </main>
  );
}

// home page
// blog
// games - show all games
// games{id} - show one game
// games/search - page to search for games
// games/result - page that gives results from search
// games/new - create a new game
// games{id}/edit - edit a current game
// games{id} - remove a game