import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Context } from '..';
import { BrandBar } from '../components/BrandBar';
import { DeviceList } from '../components/DeviceList';
import { TypeBar } from '../components/TypeBar';
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceAPI';
import style from './style.module.scss';

const Shop = observer(() => {
    const {device} = useContext(Context);

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data));
        fetchBrands().then(data => device.setBrands(data));
        fetchDevices().then(data => device.setDevices(data.rows));
    }, []);

    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.col}>
                    <TypeBar />
                </div>
                <div className={style.col}>
                    <BrandBar />

                    <DeviceList />
                </div>
            </div>
        </div>
    );
});

export default Shop;