import React from 'react';
import { connect } from 'react-redux';

const Total = props => {
  return (
    <div className="content">
      <h4><span className='has-text-weight-bold'>Total Amount:</span> ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
  car: state.car,
  additionalPrice: state.additionalPrice
  }
}

export default connect(mapStateToProps, {})(Total);
