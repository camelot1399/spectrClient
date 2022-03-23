import React from 'react';
import {useLocation} from 'react-router-dom';
import {LOGIN_ROUTE} from '../utils/consts';


export const Auth = () => {
    const location = useLocation();
    console.log('location', location.pathname);
    const isLogin = location.pathname === LOGIN_ROUTE;
    const send = (e) => {
        e.preventDefault();
        console.log('send');
    }
    return (
        <div className="container">
            <h1>{isLogin ? "Авторизация" : "Регистрация"}</h1>
            <form action="#">
                login
                <input type="text" name="login" id="login" />
                password
                <input type="password" name="password" id="password" />

                <button onClick={(e) => send(e)}>Send</button>
            </form>
        </div>
    );
};