import React, { useState } from 'react';
import { CreateDevice } from '../components/modals/CreateDevice';
import { CreateType } from '../components/modals/CreateType';
import { CreateBrand } from '../components/modals/СreateBrand';

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);

    return (
        <div className='adminPanel'>
            <h1>Админ панель</h1>

            <button onClick={() => setTypeVisible(!typeVisible)}>Добавить тип</button>
            <button onClick={() => setBrandVisible(!brandVisible)}>Добавить бренд</button>
            <button onClick={() => setDeviceVisible(!deviceVisible)}>Добавить устройство</button>

            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </div>
    );
};

export default Admin;