import React from 'react';

const DevicePage = () => {
    const device = {id: 1, name: 'Iphone 12', price: 1200, rating: 5, img: ''};
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