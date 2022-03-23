import React from "react";
import {useNavigate} from 'react-router-dom';
import { DEVICE_ROUTE } from "../../utils/consts";

export const DeviceItem = ({device}) => {
    const navigate = useNavigate();

    return (
        <div className="deviceItem" onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            name: {device.name}
        </div>
    )
}