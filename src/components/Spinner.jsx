import React from "react";
import spinnerImg from '../assets/img/spinner.gif';

export const Spinner = () => {
    return (
        <div>
            <img src={spinnerImg} alt="" />
            loading...
        </div>
    )
}