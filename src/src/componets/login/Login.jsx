import React from "react";
import classes from "./Login.module.css"
import {Field, Form, reduxForm} from "redux-form";
import {maxLenght, required} from "../../utils/validators/validators";
import {Input} from "../common/FormContols";
import {connect} from "react-redux";
import {postAuthLogin} from "../../redux/auth-reducer";
import loginFon from "../../img/loginFon.png"

const maxLenght35 = maxLenght(35);
let Login = (props) => {
    const onSumbit = (formData) => {
        props.postAuthLogin(formData.login, formData.password, true);

    };
    return (
        <div>
            <div>{!props.login ?  <h1 className={classes.items}>Вход в систему !!!</h1>
                :<h1 className={classes.items}>Добро пожаловать {props.login}</h1>}

            </div>
            <div className={classes.container}>
                <div className={classes.items_block}>
                    <h2>Войти</h2>
                    <LoginReduxForm onSubmit={onSumbit}/>
                </div>
                <div>
                    <img src={loginFon} className={classes.img}/>
                </div>
            </div>
        </div>
    )
};


let FormLogin = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"login"}
                       component={Input}
                       label = {"Введите логин"}
                       validate={[required, maxLenght35]}/>

            </div>
            <div>
                <Field name={"password"}
                       component={Input}
                       label = {"Введите пароль"}
                       validate={[required, maxLenght35]}/>
                {props.error && <span className={classes.formError}>{props.error}</span>}
            </div>

            <div>
                <button className={classes.btn}>Ok</button>
            </div>
        </Form>
    )
};

let LoginReduxForm = reduxForm({
    form: "Login"
})(FormLogin);

const mapStateToProps = (state) => {
   return {
       login: state.authUser.login
    }
};


export default connect(mapStateToProps, {postAuthLogin})(Login);