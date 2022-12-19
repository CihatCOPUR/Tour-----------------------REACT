
import TourData from './TourData';

const Tour = ({ tours}) => {
console.log(tours)
  
  
  return <h2>
    { tours.map((tour)=>{
      return < TourData key = {tour.id} tours= {tours} /> 
    }) }
  </h2>;
};

export default Tour;
