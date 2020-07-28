import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import {SortingTypes} from '../../const.js';

import {ActionCreator} from '../../reducers/offers/offers.js';
import {getSortingType} from '../../reducers/offers/selectors.js';

const Sorting = (props) => {
  const {isOpened, sortingType, onOpenClick, onSelectClick, onChangeSortingType} = props;
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={onOpenClick}>
        {sortingType}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={isOpened ? `places__options places__options--custom places__options--opened` : `places__options places__options--custom`}>
        {Object.entries(SortingTypes).map((it, i) => {
          const type = it[1];
          return (<li key={type + i}
            className={`places__option ${type === sortingType ? `places__option--active` : ``}`}
            tabIndex={0}
            onClick={() => {
              onSelectClick(type);
              onChangeSortingType(type);
            }}>
            {type}
          </li>);
        }
        )}
      </ul>
    </form>
  );
};

Sorting.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  sortingType: PropTypes.string.isRequired,
  onOpenClick: PropTypes.func.isRequired,
  onSelectClick: PropTypes.func.isRequired,
  onChangeSortingType: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  sortingType: getSortingType(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSortingType(newSortingType) {
    dispatch(ActionCreator.changeSorting(newSortingType));
  },
});

export {Sorting};
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
