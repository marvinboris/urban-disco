import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Button, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import './List.css';

let timeout;

class List extends Component {
    state = {
        search: '',
    }

    inputChangedHandler = e => {
        const { name, value } = e.target;
        if (name === 'search') {
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(() => {
                this.props.get(value);
                clearTimeout(timeout);
            }, 1000);
            return this.setState({ search: value });
        }
    }

    render() {
        const {
            array, total = 0, icon, title, subtitle, add, link, className = '', dark = false, outerClassName = '',
            xs = 12, sm = 12, md = 12, lg = 12, xl = 12, render, content: {
                cms: {
                    pages: { components: { list: { search: search_ } } }
                }
            }
        } = this.props;
        const { search } = this.state;

        const content = array.map(item => render({ ...item, key: JSON.stringify(item) + Math.random() }));

        return (
            <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} className={`List ${outerClassName}`}>
                <input type="hidden" id="table-search" value={search} />

                <div className={`rounded-4 d-flex align-items-center mb-3 mb-sm-4 py-3 py-sm-4 px-4 px-sm-5 bg-${dark ? "grayblue" : "blue-10"} ${className}`}>
                    <div className="d-flex align-items-center">{
                        icon ? <FontAwesomeIcon fixedWidth className="mr-3 mr-sm-4 text-30 text-blue-20" icon={icon} size="lg" /> : null}

                        <div>
                            <div className={`text-${dark ? "light" : "blue"} text-700 text-20 mb-1`}>{title}</div>

                            <div className="text-10">{subtitle}</div>
                        </div>
                    </div>

                    <div className="ml-auto d-none d-md-block mr-3 mr-sm-4">
                        <Input type="search" name="search" onChange={this.inputChangedHandler} value={search} placeholder={`${search_}...`} className="rounded-6 border-blue text-16" />
                    </div>

                    {add && <Link className="d-none d-md-inline" to={link}>
                        <Button color="green" className="rounded-2 py-2 text-16 text-500 px-4">
                            <FontAwesomeIcon icon={faPlus} fixedWidth className="mr-3" />

                            {add}
                        </Button>
                    </Link>}
                </div>

                <div className="p-3 p-sm-4 shadow bg-white">
                    <div className="py-1 px-3 d-flex flex-column">
                        <div className="scrollbar-blue" style={{ overflowX: 'auto' }}>
                            <div className="flex-container">{content}</div>
                        </div>

                        <div className="mt-3 text-right pr-4 text-18">
                            {"Total Count"} : <span className="text-blue text-700">{total}</span>
                        </div>
                    </div>
                </div>
            </Col>
        );

    }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(List);