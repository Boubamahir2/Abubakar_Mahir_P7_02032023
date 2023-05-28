
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import data from '../../data/restaurantsData.json'
import './home.css'

const Home = () => {
  return (
    <div className="container-home">
      <Header origin='home' />
      <main className='main-container'>
        <Banner origin='home' />
        <section className='section_card'>
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home