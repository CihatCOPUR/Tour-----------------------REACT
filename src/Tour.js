
import TourData from './TourData';

const Tour = ({loading , tours}) => {
console.log(tours)
  
  
  return <h2>
    { tours.map((tour)=>{
      return < TourData key = {tour.id} {...tours} /> 
    }) }
  </h2>;
};

export default Tour;
