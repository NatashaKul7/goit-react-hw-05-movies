import { StyledReviewsItem } from './ReviewsItem.styled';

const ReviewsItem = ({ author, content }) => {
  return (
    <StyledReviewsItem>
      <h3>Author: {author}</h3>
      <p>{content}</p>
    </StyledReviewsItem>
  );
};

export default ReviewsItem;
