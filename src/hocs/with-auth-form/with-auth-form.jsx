import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import {Operation as UserOperation} from '../../reducers/user/user';

import history from "../../history.js";
import {AppRoute} from "../../const.js";

const withAuthForm = (Component) => {
  class WithAuthForm extends PureComponent {

    constructor(props) {
      super(props);
      this.state = {
        email: ``,
        password: ``,
        isSending: false,
      };
      this.handleFormSumbit = this.handleFormSumbit.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleFormSumbit(evt) {
      evt.preventDefault();

      this.setState({
        isSending: true,
      });

      const {onLogin} = this.props;
      const {email, password} = this.state;

      const response = onLogin({
        email,
        password,
      });

      response.then(() => {
        this.setState({isSending: false});
        history.push(AppRoute.ROOT);
      });
    }

    handleInputChange(evt) {
      const {name, value} = evt.target;
      this.setState({
        [name]: value,
      });
    }

    render() {
      const {email, password, isSending} = this.state;
      return (
        <Component
          {...this.props}
          email={email}
          password={password}
          isSending={isSending}
          onSubmitForm={this.handleFormSumbit}
          onInputChange={this.handleInputChange}
        />
      );
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    onLogin(authData) {
      return dispatch(UserOperation.login(authData));
    },
  });

  WithAuthForm.propTypes = {
    onLogin: PropTypes.func,
  };

  return connect(null, mapDispatchToProps)(WithAuthForm);
};

export default withAuthForm;
