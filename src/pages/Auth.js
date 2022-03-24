import React, { useContext, useState } from 'react';
import { observer } from "mobx-react-lite";
import {useLocation, useNavigate} from 'react-router-dom';
import { registration, login } from '../http/userAPI';
import {LOGIN_ROUTE, SHOP_ROUTE} from '../utils/consts';
import { Context } from '..';


export const Auth = observer(() => {
    const {user} = useContext(Context);
    const location = useLocation();
    console.log('location', location.pathname);
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    console.log(isLogin);


    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login();
            } else {
                data = await registration(email, password);
            }

            user.setUser(data);
            user.setIsAuth(true);

            navigate(SHOP_ROUTE);
        } catch (e) {
            console.log(e.response.data.message);
        }
        
       
    }

    const send = (e) => {
        e.preventDefault();
        console.log('send');
    }
    return (
        <div className="container">
            <h1>{isLogin ? "Авторизация" : "Регистрация"}</h1>
            login
            <input type="text" name="login" id="login" value={email} onChange={(e) => setEmail(e.target.value)} />
            password
            <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

            <button onClick={() => click()}>Send</button>
        </div>
    );
});