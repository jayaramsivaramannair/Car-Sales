import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../Actions/featureActions';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} id={item.id} removeFeature={props.removeFeature} />
          ))}
        </ol>
      ) : (
          <p>You can purchase items from the store.</p>
        )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    car: state.car
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFeature: (id) => dispatch(removeFeature(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddedFeatures);
