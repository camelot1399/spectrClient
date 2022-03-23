import React, { useContext } from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import { Context } from '..';
import {authRoutes, publicRoutes} from "../routes";
import { SHOP_ROUTE } from '../utils/consts';

const AppRouter = () => {
    const {user, device} = useContext(Context);

    console.log('device', device);
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route path={path} element={<Component />} key={path}/>
            )}

            {publicRoutes.map(({path, Component}) =>
                <Route path={path} element={<Component />} key={path}/>
            )}

            <Route path="*" element={<Navigate to={SHOP_ROUTE} />}/>
        </Routes>
    );
};

export default AppRouter;