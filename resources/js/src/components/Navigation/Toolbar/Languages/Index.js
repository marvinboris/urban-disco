import React from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';

export default ({ languages, language, set }) => {
    const dropdownItems = languages.map(l => <DropdownItem onClick={() => set(l.abbr)} key={JSON.stringify(l) + Math.random()} className="px-3 text-12 text-md-16 text-xxl-20 text-400 text-capitalize">
        <span className={`flag-icon flag-icon-${l.flag.toLowerCase()} mr-2`} />

        {l.name}
    </DropdownItem>);

    return <UncontrolledDropdown className="Languages">
        <DropdownToggle className="position-relative d-flex justify-content-around align-items-center rounded-pill p-0 bg-transparent border-0 m-0" style={{ boxShadow: 'none' }} caret>
            <div className="border-right border-white-50 mr-2 pr-2">
                <span className="language-flag shadow-lg overflow-hidden d-flex justify-content-center align-items-center position-relative">
                    <span className={`fad position-absolute fa-globe-africa text-secondary`} />

                    <span className={`flag-icon position-absolute text-30 flag-icon-${language && language.flag.toLowerCase()}`} />
                </span>
            </div>

            <span className="text-12 text-md-16 text-xxl-20 text-400 text-capitalize">{language && language.abbr}</span>
        </DropdownToggle>

        <DropdownMenu style={{ minWidth: '5rem' }}>
            {dropdownItems}
        </DropdownMenu>
    </UncontrolledDropdown>;
}