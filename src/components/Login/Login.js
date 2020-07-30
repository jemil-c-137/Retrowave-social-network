import React from "react";
import styles from '../common/FormsControls/FormControl.module.css'
import {reduxForm} from "redux-form";
import {Field} from "redux-form";

import {Textarea} from "../common/FormsControls";
import {connect} from "react-redux";
import {login} from "../../Redux/authReducer";
import Redirect from "react-router-dom/es/Redirect";
import {maxLengthCreator, required} from "../../utils/validators";

const maxLength30 = maxLengthCreator(30)

const LoginForm = (props) => {

  return (

    <form onSubmit={props.handleSubmit}>
      <div><Field name={'login'} placeholder={'login'} type={'input'} component={Textarea} validate={[required, maxLength30]}/></div>
      <div><Field name={'password'} placeholder={'password'} type={'input'} component={Textarea} validate={[required, maxLength30]}/></div>
      <div><Field name={'rememberMe'} component={'input'} type={"checkbox"}/>Remember me</div>
      <div>

        <button>
          sign in
        </button>
        {props.error && <div className={styles.formSummaryError}>
          {props.error /* error text from stopSubmit*/}
        </div>}
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {

  const onSubmit = (formData) => {
    debugger;
    props.login(formData.login, formData.password)
  }

  if(props.isAuth) {
    return <Redirect to={'/profile'}/>
  }

  return <div>
    <h1>Sign in</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
    <div >
    </div>
  </div>
}

export const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, {login}) (Login)