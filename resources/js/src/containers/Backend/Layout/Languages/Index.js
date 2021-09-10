import React from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';

export default ({ languages, language, set }) => {
    const dropdownItems = languages.map(l => <DropdownItem onClick={() => set(l.id)} key={JSON.stringify(l) + Math.random()} className="px-3">
        <span className={`flag-icon flag-icon-${l.flag.toLowerCase()}`} /> {l.name}
    </DropdownItem>);

    return <UncontrolledDropdown className="Languages">
        <DropdownToggle className="text-secondary text-12 text-md-14 text-xxl-16 position-relative d-flex justify-content-around align-items-center bg-soft rounded-pill border-0 p-2 m-0" style={{ boxShadow: 'none' }} caret>
            <span className="language-flag shadow-lg mr-1 mr-md-2 overflow-hidden d-inline-flex justify-content-center align-items-center position-relative">
                <span className={`flag-icon position-absolute text-30 flag-icon-${language && language.flag.toLowerCase()}`} />
            </span>

            <span className="text-400">{language && language.name}</span>
        </DropdownToggle>

        <DropdownMenu style={{ minWidth: '5rem' }}>
            {dropdownItems}
        </DropdownMenu>
    </UncontrolledDropdown>;
}