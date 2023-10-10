import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';
import CastList from './CastList/CastList';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    const getCast = async id => {
      try {
        const { cast } = await fetchMovieCast(id);
        setCast(cast);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    getCast(movieId);
  }, [movieId]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {cast.length === 0 ? (
            <h3>The cast is unavailable...</h3>
          ) : (
            <CastList cast={cast} />
          )}
        </>
      )}
      {error && <Error />}
    </>
  );
};

export default Cast;
