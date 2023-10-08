import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';
import CastList from './CastList/CastList';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async id => {
      try {
          const { cast} = await fetchMovieCast(id);
        setCast(cast);
      } catch (error) {
        setError(true);
      }
    };
    getCast(movieId);
  }, [movieId]);

  return (
      <>
          {cast.length === 0 ? (
        <h3>The cast is unavailable...</h3>
      ) : (
         <CastList cast={cast} />
      )}
     
    </>
  );
};
