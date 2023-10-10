import ReviewsItem from '../ReviewsItem/ReviewsItem';
import { StyledReviewsList } from './ReviewsList.styled';

const ReviewsList = ({ reviews }) => {
  return (
    <StyledReviewsList>
      {reviews &&
        reviews.map(({ author, content, id }) => {
          return <ReviewsItem key={id} author={author} content={content} />;
        })}
    </StyledReviewsList>
  );
};

export default ReviewsList;
