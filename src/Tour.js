
import { useState } from 'react';
import { Container } from 'react-bootstrap';


const Tour = ({ tours}) => {

  const [readMore, setReadMore] = useState(false)
  
  return <div>
    <h1></h1>
    {tours.map((tour)=>{
      return(<Container className='single-tour' key={tour.id}>
        <img className='.single-tour'  img src={tour.image} alt="" />
        <Container className='tour-info'>
        <h3>{tour.name}</h3>
        <h3>${tour.price}</h3>
        </Container>
        <h4 className='info'>{readMore ? tour.info : `${tour.info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
          </button></h4>


      </Container>
        
      )
    })}
   
  </div>;
};

export default Tour;
