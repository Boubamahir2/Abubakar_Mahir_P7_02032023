import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/Carousel/Carousel';
import { useParams } from 'react-router-dom';
import data from '../../data/restaurantsData.json'
import NotFound from '../NotFound/NotFound';

const Lodging = () => {
  const {id} = useParams();
  const filteredLodging = data.filter(lodging => lodging.id === id);
   const { title, location, tags, host, rating, description, equipment } =
     filteredLodging || {};
   if (!filteredLodging) return <NotFound />;
  return (
    <>
      <Header origin='home' />
      <Carousel/>

      <Footer/>
    </>
  );
};

export default Lodging;
