import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import LoginReduxForm from './form';
import { Creators as Actions } from '../../core/actions';
import { unauthenticated } from '../../common/components';

const LoginPage = ({ token, login }) =>
  <div className="login-register-page">
    <div className="form">
      <LoginReduxForm onSubmit={login}/>
    </div>
  </div>

const mapDispatchToProps = dispatch => ({
  login: (data) => dispatch(Actions.loginUserAttempt(data))
})

export default compose(
  unauthenticated,
  connect(null, mapDispatchToProps)
)(LoginPage);