import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import { DeviceItem } from "./device/DeviceItem";

export const DeviceList = observer(() => {
    const {device} = useContext(Context);
    return (
        <div className="DeviceList">
            {device.devices.map(device => 
                <DeviceItem 
                    key={device.id} 
                    device={device}
                />
                )}
        </div>
    )
})