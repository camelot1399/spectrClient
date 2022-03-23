import React from 'react';
import { BrandBar } from '../components/BrandBar';
import { DeviceList } from '../components/DeviceList';
import { TypeBar } from '../components/TypeBar';
import style from './style.module.scss';

const Shop = () => {
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
};

export default Shop;