
import TourData from './TourData';

const Tour = ({loading , tours}) => {
console.log(tours)
  
  
  return <h2>
    {loading ? 'Loading  ....' : < TourData tours = {tours} /> }
  </h2>;
};

export default Tour;
