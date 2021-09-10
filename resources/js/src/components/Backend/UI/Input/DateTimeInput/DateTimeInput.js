import React, { useState } from 'react';
import { DatetimeInput } from 'react-datetime-inputs';
import moment from 'moment';

import { parseMoment } from '../../../../../shared/utility';

export default (props) => {
    const [value, setValue] = useState(moment(props.value));
    const [parsedValue, setParsedValue] = useState(parseMoment(value))

    const onChange = value => {
        setValue(value);
        setParsedValue(parseMoment(value));
    };

    return <>
        <div className="h-100 position-relative" style={{ minHeight: 57 }}>
            <DatetimeInput datetime={value} onChange={onChange} className="h-100" />
        </div>

        <input type="hidden" name={props.name} value={parsedValue} />
    </>;
} 