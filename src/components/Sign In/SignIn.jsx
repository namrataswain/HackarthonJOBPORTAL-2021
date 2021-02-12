import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../Custom-Button/custom-button';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';
import './signIn.styles.scss';
import {withTranslation} from 'react-i18next';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    
    //this is a method which cancels the event if it is canceable 


    const {email, password} = this.state;
    try {
        await auth.signInWithEmailAndPassword(email, password);
        this.setState({
            email : '',
            password :''
        })
    }
    catch(error) {
        console.log(error);
    }
    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { t } = this.props;
    return (
      <div className='sign-in'>
        <h2>{t("I already have an account")}</h2>
        <span>{t("Sign in with your email and password")}</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label={t("email")}
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label= {t("password")}
            required
          />
          <div className="buttons">
          <CustomButton type='submit'> {t("Sign In")} </CustomButton>
          <CustomButton  type ="button" onClick ={signInWithGoogle} isGoogleSignIn>{t("Sign in with google")}{''} </CustomButton>
          </div>
          
        </form>
      </div>
    );
  }
}

export default withTranslation("translations")(SignIn);