import React from "react";
import PropTypes from 'prop-types';

const getYearMonthDay = (date) => {
  const dateObject = new Date(date);
  return `${dateObject.getFullYear()}-${dateObject.getMonth()}-${dateObject.getDay()}`;
};

const getFormattedDate = (date) => {
  return new Date(date).toLocaleString(`en-GB`, {
    year: `numeric`,
    month: `long`,
  });
};

const Review = (props) => {

  const {comment, date, rating, user} = props.review;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width={54} height={54} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${rating * 20}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={getYearMonthDay(date)}>{getFormattedDate(date)}</time>
      </div>
    </li>
  );
};

export default Review;

Review.propTypes = {
  review: PropTypes.shape({
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    user: PropTypes.shape({
      avatarUrl: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired4,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }),
};
