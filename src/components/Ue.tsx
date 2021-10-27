import * as React from 'react';
import strings from '../utils/strings.utils';
import { createRow, createHeader } from '../utils/table.utils';
import type { UeData, ResourceData } from '../types/Data';

const Ue = (ue: UeData) => {
    return (
        <div className="column-wrapper">
            <h6 className="lpb-ue-name">{ ue.name }</h6>
            <div className="column header">
                { createHeader(strings.thead) }
            </div>
            { ue.resources 
                && ue.resources.map((resource: ResourceData): JSX.Element => {
                return createRow(resource, "resource")
            }) }
        </div> 
    );
};

export default Ue;
