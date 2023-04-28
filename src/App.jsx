import './App.css';
import Card from './components/Card/Card';

const picachu = {
  title: "Picachu",
  imgUrl: 
  "https://sm.ign.com/ign_br/screenshot/default/025pikachu-os-anime-10_5z4v.png",

};
const charmander = {
  title: 'Charmander',
  imgUrl: 'https://th.bing.com/th/id/OIP.ry3-o0K6tCejpRrEfM2uLQHaIN?pid=ImgDet&rs=1',

};

const bulbasaur = {
  title: 'Bulbasaur',
  imgUrl: 'https://th.bing.com/th/id/OIP.ry3-o0K6tCejpRrEfM2uLQHaIN?pid=ImgDet&rs=1',

};

function App() {
   return (
    <>      
      <h1>Pokédex</h1>      
      <Card item={picachu} />
      <Card item={charmander} />
      <Card item={bulbasaur} />
    </>
  )
}

export default App
