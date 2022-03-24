import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceAPI';

const DevicePage = () => {
    const [device, setDevice] = useState({info: []});
    const {id} = useParams();

    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data));
    }, [])
    return (
        <div className='devicePage'>
            <div>Название товара: {device.name}</div>
            <div>цена товара: {device.price}</div>
            <div>рейтинг товара: {device.rating}</div>

            <button>Добавить в корзину</button>
        </div>
    );
};

export default DevicePage;