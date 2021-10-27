import * as React from 'react';
import type { ResourceData } from '../types/Data';

export const createHeader = (obj: Object): JSX.Element[] => {
    return Object.entries(obj).map(([_, v]) => <div className="cell th">{ v }</div>);
}

export const createRow = (
    object: ResourceData, 
    name: string
): JSX.Element => {
    const rows = Object.keys(object).map(key => {
        return key != 'url' 
            ?   <div className={`cell lpb-${name}-${key}`}>
                    { key === 'name'
                        ? <a href={object['url']} target="_blank">{object['name']}</a>
                        : object[key]
                    }
                </div>
            :   null;
    });
    return <div className="column">{ rows }</div>;
};
