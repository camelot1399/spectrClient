import React from "react";
import style from './style.module.scss';

export const Modal = ({children, show}) => {
    return (
        <div className={[style.modal, show ? '' : style.modal__hide].join(' ')}>
            {children}
        </div>
    )
}