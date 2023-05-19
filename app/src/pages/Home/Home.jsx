import React from 'react'
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Gallery from '../../components/Gallary/Gallery';
import Footer from '../../components/Footer/Footer';
import data from '../../data/restaurantsData.json'

const Home = () => {
  return (
    <div>
      <Header origin='home' />
      <main>
        <Banner origin='home' />
        <section className='section_card'>
          {data.map((element) => (
            <Gallery key={element.id} element={element} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home