import React from 'react';
import { connect } from 'react-redux';

const Header = props => {
  return (
    <div className='content'>
      <figure className="image is-2by1">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2 className='has-text-weight-bold'>{props.car.name}</h2>
      <p className='has-text-primary'>Base Amount: ${props.car.price}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car
  }
}

export default connect(mapStateToProps, {})(Header);
