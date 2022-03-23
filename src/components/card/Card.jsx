import React, { useEffect } from "react";

export const Card = ({children, click, active}) => {
    return (
        <div 
            className={[
                'card', 
                active ? 'card__active' : ''
            ].join(' ')}
            onClick={click}
        >
            {children}
        </div>
    )
}