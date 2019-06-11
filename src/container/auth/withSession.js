import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../services/auth';
import { getToken } from '../../selectors/sessionSelector';
export const withSession = Component => {
  class withSession extends PureComponent{
    static propTypes = {
      token: PropTypes.string,
      match: PropTypes.object
    }

    componentDidMount(){
      if(!this.props.token)
        login();
    }
    
    render(){
      if(!this.props.token) return <h1>Loading</h1>;
      return <Component match={this.props.match}/>;
    }
  }
  
  const mapStateToProps = state => ({
    token: getToken(state)
  });
  
  return connect(
    mapStateToProps,
    null
  )(withSession);
};



