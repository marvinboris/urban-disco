import React, { useState } from 'react';
import { FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input, CustomInput } from 'reactstrap';

import DateTimeInput from './DateTimeInput/DateTimeInput';
import WithTooltip from '../../UI/WithTooltip/WithTooltip';

import { checkValidity } from '../../../shared/utility';

import './Input.css';

export default ({ icon, addon, onChange, className = '', id, name, type = 'text', required, readonly, disabled, placeholder, value = '', defaultValue, validation = {}, append, children, dark = false, bonus, min, max, step }) => {
    const [touched, setTouched] = useState(false);

    const inputChangedHandler = e => {
        setTouched(true);
        onChange(e);
    }

    let content;

    if (type === 'datetime-local') content = <DateTimeInput id={id} name={name} required={required} readOnly={readonly} className={"w-100 d-flex text-10 text-md-12 text-xxl-14 h-100"} value={value} defaultValue={!value && defaultValue} placeholder={placeholder} />
    else content = <>
        <WithTooltip content={placeholder && <>{placeholder}{required && <span className="text-red">*</span>}</>} id={'tooltip-' + (id ? id : name)}>
            <InputGroup className={`bg-${dark ? "grayblue" : "white border border-soft"} rounded-6 d-flex align-items-center`} size="lg">
                {(icon || addon) && <InputGroupAddon addonType="prepend">
                    <InputGroupText className="bg-transparent d-block border-0 px-4 py-0 my-1 text-center text-16" style={{ width: 77 }}>
                        {icon ? <i className={"fas fa-" + icon + " text-border mx-1 fa-fw"} /> : addon}
                    </InputGroupText>
                </InputGroupAddon>}

                {children ?
                    <CustomInput valid={touched && !!value && checkValidity(value, validation)} invalid={touched && !checkValidity(value, validation)} onChange={inputChangedHandler} type={type} id={name} name={name} required={required} readOnly={readonly} disabled={disabled} defaultValue={defaultValue} value={value} className={`bg-${dark ? "grayblue" : ""} ${((icon || addon) ? "border-top-0 border-right-0 border-bottom-0 border-soft" : "")} rounded-right-6 text-10 text-md-12 text-xxl-14 text-secondary h-100 px-4 py-3`}>{children}</CustomInput>
                    :
                    <>
                        <Input valid={touched && !!value && checkValidity(value, validation)} invalid={touched && !checkValidity(value, validation)} onChange={inputChangedHandler} id={id ? id : name} type={type} name={name} required={required} readOnly={readonly} disabled={disabled} defaultValue={defaultValue} value={value} min={min} max={max} step={step} className={((icon || addon) ? "border-top-0 border-right-0 border-bottom-0 border-soft" : "border-0") + " rounded-right-6 text-10 text-md-12 text-xxl-14 text-secondary h-100 px-4 py-3"} />
                        {placeholder && type !== 'date' && <label className="text-10 text-md-12 text-xxl-14 text-light text-truncate m-0" htmlFor={id ? id : name}>{placeholder}</label>}
                    </>
                }

                {append && <InputGroupAddon addonType="append">
                    <InputGroupText className="bg-transparent border-0 text-secondary text-10 text-md-12 text-xxl-14 px-4">
                        {append}
                    </InputGroupText>
                </InputGroupAddon>}
            </InputGroup>
        </WithTooltip>


        {bonus}
    </>;

    return <FormGroup className={`Backend Input ${className}`}>
        {content}
    </FormGroup>;
};