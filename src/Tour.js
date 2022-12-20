
import { useState } from 'react';
import { Container } from 'react-bootstrap';


const Tour = ({ tours, remove}) => {

  const [readMore, setReadMore] = useState(false)

    return <div>
    <h1></h1>
    {tours.map((tour)=>{
      const {id , name, info , image, price } = tour
      return(<Container className='single-tour' key={id}>
        
        <img className='.single-tour'  img src={image} alt="" />
        <Container className='tour-info'>
        <h3>{name}</h3>
        <h3>${price}</h3>
        </Container>
        <h4 className='info'>{readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
          </button></h4>
          

      <button className='delete-btn' value={id} key={id} onClick={()=>remove(id)}>Not interested</button>
      </Container>
       
      )
    })}
   
  </div>;
};

export default Tour;
