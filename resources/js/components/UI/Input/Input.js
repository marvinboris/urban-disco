import React from 'react';
import { FormGroup, Label, Input, Col, CustomInput } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const input = ({ icon, name, type, check, placeholder, required, autoFocus, children, className, onChange, invalid, touched, shouldValidate, row, select, options, file, value }) => {
    let optionEls = null;
    if (select) {
        optionEls = options.array.map(option => <option key={option[options.value]} value={option[options.value]}>{option[options.name]}</option>);
    }

    return (
        <FormGroup row={row} className={className + (row ? " align-items-center" : '')} check={check}>
            {
                check ? (
                    <CustomInput type={type} name={name} id={name} label={children} value={value ? value : ''} />
                ) : (
                        <>
                            <Label sm={row ? 4 : null} className={(row ? " text-right font-weight-bold" : "")} for={name}>{icon ? <FontAwesomeIcon fixedWidth icon={icon} className="mr-1" /> : null}{children}</Label>
                            {row ? (
                                <Col sm={8}>
                                    {file ? <CustomInput
                                        type={type}
                                        invalid={invalid && touched && shouldValidate}
                                        valid={!invalid && touched && shouldValidate}
                                        name={name}
                                        id={name}
                                        required={required}
                                        autoFocus={autoFocus}
                                        placeholder={placeholder}
                                        onChange={onChange} /> :
                                        <Input
                                            type={type}
                                            value={value ? value : ''}
                                            invalid={invalid && touched && shouldValidate}
                                            valid={!invalid && touched && shouldValidate}
                                            name={name}
                                            id={name}
                                            required={required}
                                            autoFocus={autoFocus}
                                            placeholder={placeholder}
                                            onChange={onChange} />}
                                </Col>
                            ) : (
                                    select ? (
                                        <Input
                                            type={type}
                                            value={value ? value : ''}
                                            invalid={invalid && touched && shouldValidate}
                                            valid={!invalid && touched && shouldValidate}
                                            name={name}
                                            id={name}
                                            required={required}
                                            autoFocus={autoFocus}
                                            placeholder={placeholder}
                                            onChange={onChange}>
                                            {optionEls}
                                        </Input>
                                    ) : (
                                            file ? (
                                                <CustomInput
                                                    type={type}
                                                    invalid={invalid && touched && shouldValidate}
                                                    valid={!invalid && touched && shouldValidate}
                                                    name={name}
                                                    id={name}
                                                    required={required}
                                                    autoFocus={autoFocus}
                                                    placeholder={placeholder}
                                                    onChange={onChange} />
                                            ) : (
                                                    <Input
                                                        type={type}
                                                        value={value ? value : ''}
                                                        invalid={invalid && touched && shouldValidate}
                                                        valid={!invalid && touched && shouldValidate}
                                                        name={name}
                                                        id={name}
                                                        required={required}
                                                        autoFocus={autoFocus}
                                                        placeholder={placeholder}
                                                        onChange={onChange} />
                                                )
                                        )
                                )}
                        </>
                    )
            }
        </FormGroup>
    )
};

export default input;