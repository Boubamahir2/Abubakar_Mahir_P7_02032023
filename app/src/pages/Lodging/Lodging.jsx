import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/Carousel/Carousel';
import { useParams } from 'react-router-dom';
import data from '../../data/restaurantsData.json'
import NotFound from '../NotFound/NotFound';
import Dropdown from '../../components/Dropdown/Dropdown';
import {Profile,
  Ratings,
  HostTag} from '../../components/Profile&Ratings'

const Lodging = () => {
  const {id} = useParams();
  const filteredLodging = data.filter(lodging => lodging.id === id);
   const { title, location, tags, host, rating, description, equipment } =
     filteredLodging || {};
   if (!filteredLodging) return <NotFound />;
  return (
    <>
      <Header origin='home' />
      <Carousel />
      <div className='section_details}>
        <div className='section_details_property}>
          <h1 className='property_title}>{title}</h1>
          <p className='property_location}>{location}</p>
          <HostTag tags={tags} />
        </div>
        <div className='section_details_host}>
          <div className='host}>
            <HostProfile host={host} />
            <div>
              <Rating className='host_rating} rating={rating} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Lodging;
