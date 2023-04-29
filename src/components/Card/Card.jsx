import "./Card.css";

function Card(props) {
   
  const item = props.item; 

    return (
        <div className='card'>
        <h2>{item.title}</h2>
        <img 
        width="150" 
        src={item.imagemUrl} />
      </div>
    );
    
}

export default Card;