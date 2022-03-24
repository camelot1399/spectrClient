import React, { useContext } from "react";
import { Context } from "..";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavLink, useNavigate } from "react-router-dom";
import { SHOP_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, ADMIN_ROUTE } from "../utils/consts";
import {observer} from 'mobx-react-lite';


export const NavBar = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate();
    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <NavLink to={SHOP_ROUTE} >Названме магазина</NavLink>
            {user.isAuth ? 
            (<Nav className="ml-auto">
                <button onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</button>
                <button onClick={() => logOut()}>Выйти</button>
            </Nav>)
             : 
            (<Nav className="ml-auto">
                <button onClick={() => navigate(REGISTRATION_ROUTE)}>Регистрация</button>
                <button onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</button>
            </Nav>)
            }
            
            </Container>
        </Navbar>
    )
});