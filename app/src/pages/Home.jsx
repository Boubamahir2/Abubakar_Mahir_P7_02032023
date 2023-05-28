import Banner from "../../components/Banner";
import Card from "../../components/Card";


function Home({apparts}) {
  return (
    <div className='home'>
      <Banner origin='home' />
      <div className='cards'>
        {apparts.map((appart) => (
          <Card
            key={appart.id}
            appartId={appart.id}
            appartTitle={appart.title}
            appartCover={appart.cover}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;