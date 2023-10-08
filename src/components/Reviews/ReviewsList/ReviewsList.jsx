import ReviewsItem from "../ReviewsItem/ReviewsItem";

const ReviewsList = ({ reviews }) => {
  return (
    <>
      {reviews &&
        reviews.map(({ author, content, id }) => {
            return <ReviewsItem
                key={id}
                author={author}
                content={content} />;
        })}
    </>
  );
};

export default ReviewsList;
