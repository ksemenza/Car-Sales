import React from 'react';
import { connect } from 'react-redux';

import AddedFeature from './AddedFeature';


const AddedFeatures = props => {
  return (
    <div className="content">
      <h6 className='has-text-weight-bold'>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => {
            console.log("Time to make an AddedFeature");
            return (
            <AddedFeature key={item.id} feature={item} removeItem={props.removeItem} />
          )})}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car
  };
}

export default connect(mapStateToProps, {})(AddedFeatures);
