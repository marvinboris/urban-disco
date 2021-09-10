import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default ({ name, defaultValue, placeholder }) => {
    const [value, setValue] = useState(defaultValue);

    return <>
        <ReactQuill theme="snow" className="text-poppins" defaultValue={defaultValue} placeholder={placeholder} value={value || defaultValue || ""} onChange={setValue} />
        <input type="hidden" name={name} value={value} />
    </>;
}