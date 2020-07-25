import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import {getReviews} from "../../reducers/offers/selectors.js";
import {Operation as OfferOperation} from "../../reducers/offers/offers.js";

import Review from "../review/review.jsx";

class ReviewList extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {onLoadReviews} = this.props;
    onLoadReviews();
  }

  render() {
    const {reviews} = this.props;
    let sortedReviews;
    if (reviews !== undefined) {
      sortedReviews = reviews.slice().sort((a, b) => (
        new Date(a.date).getTime() - new Date(b.date).getTime()
      ));
    }
    return (
      <React.Fragment>
        <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews ? reviews.length : ``}</span></h2>
        <ul className="reviews__list">
          {!sortedReviews ? `` : sortedReviews.map((it, i) =>
            <Review key={`${it.rating}-${i}`} review={it}/>
          )}
        </ul>
      </React.Fragment>
    );
  }
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
  onLoadReviews: PropTypes.func,
};


const mapStateToProps = (state) => ({
  reviews: getReviews(state),
});

const mapDispatchToProps = (dispatch) => ({
  // пока не определена логика перехода на ревью, будут загружаться ревью на четвертое предложение
  onLoadReviews() {
    dispatch(OfferOperation.loadReviews(3));
  },
});

export {ReviewList};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);

