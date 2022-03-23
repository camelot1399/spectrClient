import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import {Context} from '../index';
import { Card } from "./card/Card";


export const BrandBar = observer(() => {
    const {device} = useContext(Context);
    return (
        <div>
            {device.brands.map(brand => 
                <Card 
                    key={brand.id}
                    click={() => device.setSelectedBrand(brand)}
                    active={brand.id === device.selectedBrand.id ? true : false}

                >
                    {brand.name}
                </Card>
                )}
        </div>
    )
})