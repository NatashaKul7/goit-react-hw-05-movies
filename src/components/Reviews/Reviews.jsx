import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReview } from 'services/api';
import ReviewsList from './ReviewsList/ReviewsList';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const { movieId } = useParams();

  useEffect(() => {
       setLoading(true);

    const getReviews = async id => {
      try {
        const { results } = await fetchMovieReview(id);
        setReviews(results);
           setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    getReviews(movieId);
  }, [movieId]);

  return (
    <>
       {loading ? (
        <Loader />
      ) : (
        <>
          {reviews.length === 0 ? (
        <h3>No reviews yet...</h3>
      ) : (
        <ReviewsList reviews={reviews} />
      )}
        </>
      )}
      {error && <Error />}
      
    </>
  );
};
