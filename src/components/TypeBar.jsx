import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import style from './typeBar.scss';

export const TypeBar = observer(() => {
    const {device} = useContext(Context);

    return (
        <div className="container">
            <ul className="listGroupe">
                {device.types.map(type => 
                    <li 
                        key={type.id}
                        onClick={() => device.setSelectedType(type)}
                        className={type.id === device.selectedTypes.id ? style['active'] : ''}
                        // active={type.id === device.selectType.id}
                    >{type.name}</li>
                )}
            </ul>
        </div>
    )
})