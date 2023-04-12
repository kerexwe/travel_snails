import React from 'react';
import s from './Locations.module.scss'
import LocationCard from './LocationCard/LocationCard'
import { LocationConst } from '../../../constants/LocationConst'

function Locations(props) {
    return (
        <div className='container' >
            <div className={s.wrapper}>
                {
                    LocationConst.map((item) => <LocationCard key={item.id} {...item} />)
                }
            </div>
        </div>
    );
}

export default Locations;