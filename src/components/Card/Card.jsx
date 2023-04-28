import "./Card.css";

function Card(props) {
  console.log("props", props);
  const item = props.item;
  console.log("item.title", item.title);

    return (
        <div className='card'>
        <h2>{item.title}</h2>
        <img 
        width="150" 
        src={item.imgURL} />
      </div>
    );
    
}

export default Card;