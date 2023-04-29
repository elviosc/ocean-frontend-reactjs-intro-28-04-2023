import './App.css';
import Card from './components/Card/Card';

const pikachu = {
  title: "Pikachu",
  imagemUrl: 
  "https://sm.ign.com/ign_br/screenshot/default/025pikachu-os-anime-10_5z4v.png",

};
const charmander = {
  title: 'Charmander',
  imagemUrl: 'https://th.bing.com/th/id/OIP.ry3-o0K6tCejpRrEfM2uLQHaIN?pid=ImgDet&rs=1',

};

const bulbasaur = {
  title: 'Bulbasaur',
  imagemUrl: 'https://th.bing.com/th/id/R.0d1af06414e491b95c8088dde38e3209?rik=6lbTccIDlpprzA&pid=ImgRaw&r=0',

};

const items = [pikachu,charmander,bulbasaur]

function App() {
   return (
    <>      
      <h1>Pokédex</h1>      
      {items.map(function (item, index){
        return <Card item={item} key={`card_${index}`} />;
      })}
       
    </>
  );
}

export default App
