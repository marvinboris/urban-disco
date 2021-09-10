import React from 'react';
import { Col, Table, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faArrowsAlt } from '@fortawesome/free-solid-svg-icons';

export default ({ fields, array, limit, bordered, xs, sm, md, lg, xl, className = '', title, icon, dark = false, borderless, innerClassName = '', outerClassName = '', p0, select, children, selectHandler, style, searchable, draggable, closable }) => {
    const titles = fields.map(({ name }) => <th className="align-middle text-nowrap" key={name}>{name}</th>);
    titles.unshift(<th className="text-center align-middle" key="#">SL</th>);
    if (select) titles.unshift(<th className="align-middle text-center" key="select_all">
        <input type="checkbox" onClick={selectHandler} className="select_all" />
    </th>);

    const content = array.map((item, index) => {
        if (limit && index >= limit) return null;
        let inside = [<th className="text-center align-middle" key={'primary' + index}>{index + 1}</th>];
        if (select) inside.unshift(<th className="text-center align-middle" key={'white' + index}>
            <input type="checkbox" value={item._id} />
        </th>);
        fields.forEach(({ key, minWidth, maxWidth }) => {
            inside.push(<td className="align-middle text-nowrap text-truncate" style={{ minWidth, maxWidth }} key={key}>{item[key]}</td>);
        });

        return <tr className="align-middle" key={index + 1}>{inside}</tr>;
    });


    return (
        <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} className={`pb-4 ${outerClassName}`}>
            <div className={`d-flex flex-column h-100 shadow-sm ${dark ? "text-light bg-darklight " : "text-secondary bg-soft"} ${className}`} style={style}>
                <div className={`p-3 border-bottom border-${dark ? "border" : "border-50"} text-700 text-brokenblue d-flex position-relative`}>
                    <span className={`d-inline-flex text-${dark ? "yellow" : "reset"} align-items-center`}>{icon ? <FontAwesomeIcon fixedWidth className={"mr-2 text-" + (dark ? "yellow" : "reset")} icon={icon} size="lg" /> : null}{title}</span>

                    <div className={"ml-auto d-none d-lg-flex justify-content-end align-items-center text-" + (dark ? "light" : "secondary") + " position-absolute"} style={{ top: '50%', right: 16, transform: 'translateY(-50%)' }}>
                        {searchable ? <Input type="search" name="search" className={`bg-${dark ? "darkblue border-0" : ""} rounded-2 mr-3`} placeholder={`Search here...`} /> : null}

                        {draggable ? <FontAwesomeIcon icon={faArrowsAlt} size="lg" className="mr-3" /> : null}

                        {closable ? <FontAwesomeIcon icon={faTimes} size="2x" /> : null}
                    </div>
                </div>
                <div className={"flex-fill d-flex flex-column " + (!p0 ? "p-3" : "p-0")}>
                    <div className="table-responsive flex-fill">
                        <Table dark={dark} bordered={bordered} hover borderless={borderless} className={`bg-${dark ? "darkblue" : ""} ${innerClassName}`}>
                            <thead className={dark ? "text-light" : "bg-white text-secondary"}><tr>{titles}</tr></thead>
                            <tbody className={dark ? "bg-darklight-50 text-light" : "bg-white-50 text-secondary"}>{content}</tbody>
                        </Table>
                    </div>

                    <div className="pt-3">
                        {children}
                    </div>
                </div>
            </div>
        </Col>
    );
};