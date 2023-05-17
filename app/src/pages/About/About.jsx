import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Dropdown from '../../components/Dropdown/Dropdown'
import data from '../../components/Dropdown/data.json';

const About = () => {
  return (
    <div>
      <Header origin='about' />
      <main>
        <Banner origin='about' />
        <div className='mainDropdown'>
          {data.map((item) => (
            <Dropdown
              key={item.id}
              title={item.title}
              text_content={item.text_content}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
