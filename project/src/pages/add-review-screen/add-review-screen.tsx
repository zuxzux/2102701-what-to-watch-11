import {Navigate, useParams} from 'react-router-dom';
import { Films } from '../../types/film';
import AddReview from '../../components/add-review/add-review';
import { useAppSelector } from '../../hooks';

function AddReviewScreen(): JSX.Element {
  const films = useAppSelector((state) => state.filmsList);
  const params = useParams();
  const Film = films.find((film) => {
    if(film.id === Number(params.id)) {
      return true;
    }
    return false;
  });
  if(!Film) {
    return (
      <Navigate to='/'/>
    );
  }
  return (
    <AddReview film={Film}/>

  );
}

export default AddReviewScreen;
