import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars'

const MovieCard = ({title,description,posterURL,rating}) => {
    const ratingChanged = (newRating) => {
        console.log(newRating)
      }
  return (
    
    <Card style={{ width: '18rem', display:'inline-block', border:'solid black 3px', margin:5}}>
      <Card.Img variant="top" src={posterURL} style={{width:280 , height:150 , margin:2 }} />
      <Card.Body>
        <Card.Title>Movie Title : {title} </Card.Title>
        <Card.Text>
            {description}
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <ReactStars
  count={5}
  onChange={ratingChanged}
  size={24}
  color2={'#ffd700'} 
  half= {false}
  edit ={false}
  value={rating}/>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;


