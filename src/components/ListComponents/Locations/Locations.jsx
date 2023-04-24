import React from 'react';
import s from './Locations.module.scss'
import LocationCard from './LocationCard/LocationCard'
import { LocationConst } from '../../../constants/LocationConst'
import { useTheme } from '../../../hooks/theme';
import { useTranslation } from 'react-i18next';


function Locations(props) {
    const {t} = useTranslation()
    // const { theme, setTheme } = useTheme()
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