import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/Custom-Button/custom-button';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import {withTranslation} from 'react-i18next';

class SignUp extends React.Component {
     
    constructor(props) {
        super(props);
        this.state = {
            displayName : '',
            email: '',
            password: '',
            confirmPassword :''
        }
    }

    handleSubmit = async event => {
        event.preventDefault() ;
        const {displayName, email, password, confirmPassword} = this.state 

        if (password !== confirmPassword ) {
            alert("password do not match");
            return;
        }

        try {

            const {user} = await auth.createUserWithEmailAndPassword(email, password) //destruct the user from the result 

            
            await createUserProfileDocument(user, {displayName});

            this.setState({

                displayName : '',
            email: '',
            password: '',
            confirmPassword :''
            })
        }
        catch (error){
            console.log(error.message)
        }
    }

     handleChange = event =>{
         const { name, value }= event.target;

         this.setState({[name] : value});
     }


    render() {
        const { t } = this.props;
        const {displayName, email, password, confirmPassword} = this.state //destruct the values from our state
        return(
            <div className='sign-up'>
            <h2> {t("I do not have an account")}</h2>
            <span>{t("Sign up with email and password")}</span>
            <form className='sign-up-form' onSubmit= {this.handleSubmit}>
            <FormInput
            type = 'text'
            name = 'displayName'
            value = {displayName}
            onChange = {this.handleChange}
            label = {t("Display Name")}
            required
            />
            
            <FormInput
            type = 'email'
            name = 'email'
            value = {email}
            onChange = {this.handleChange}
            label = {t("email")}
            required
            />
            
            
           
            <FormInput
            type = 'password'
            name = 'password'
            value = {password}
            onChange = {this.handleChange}
            label = {t("password")}
            required
            />
            
            <FormInput
            type = 'password'
            name = 'confirmPassword'
            value = {confirmPassword}
            onChange = {this.handleChange}
            label = {t("Confirm Password")}
            required
            /> 
           
            <CustomButton  type='submit'>{t("Sign Up")} </CustomButton>
                        
            </form>


            </div>
        )
    }


}
export default   withTranslation("translations")(SignUp);