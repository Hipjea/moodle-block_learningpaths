import React, { useState } from 'react';
import Ue from './Ue';
import type { YearData } from '../types/Data';


const Year = (year: YearData) => {
    const [selected, setSelected] = useState<boolean>(false);

    const handleSelection = () => setSelected(!selected);

    const handleKeypress = (event: KeyboardEvent) => {
        if (event.key == '13' || event.keyCode === 13) {
            setSelected(!selected);
        }
    }

    return (
        <>
            <h5 
                id={`lpb-year-name-${year.name}`}
                className={`lpb-year-name ${selected ? 'active' : ''}`}
                onClick={() => handleSelection()}
                onKeyDown={(event: any) => handleKeypress(event)}
                tabIndex={0}
            >
                {year.name}
            </h5>
            <div className={`flex-table ${selected ? 'active' : ''}`}>
                { year.ue && year.ue.map((ue : any) => {
                    return ue.resources && ue.name
                        ?   <Ue {...ue} /> 
                        :   null
                }) }
                <div className="top-anchor">
                    <a 
                        title={`Revenir au titre ${year.name}`} 
                        href={`#lpb-year-name-${year.name}`} 
                        className="top-anchor-href"
                    >
                    </a>
                </div>
            </div>
        </>
    );
};

export default Year;
