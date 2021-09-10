import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEdit, faEye, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';

import Delete from '../../Delete/Delete';

import * as actions from '../../../../../store/actions/backend';

import './Addon.css';

import Red from '../../../../../assets/images/red.png';
import Green from '../../../../../assets/images/green.png';

const Circle = ({ color, icon }) => <div style={{ height: 38, width: 38 }} className={`bg-white rounded-circle d-flex justify-content-center align-items-center border border-${color} border-2 text-${color}`}>
    <FontAwesomeIcon icon={icon} />
</div>;

class Addon extends Component {
    render() {
        const {
            id, name, photo, price, description, is_active,
            auth: { role },
            content: { currencies },
        } = this.props;
        let data, currency, position;

        if (role === 'restaurant') {
            data = this.props.auth.data;
        } else {
            data = this.props.backend.restaurants.data;
        }
        currency = data.currency;
        position = data.position;

        const currencyObj = currencies.find(c => c.cc === currency);
        const symbol = currencyObj && currencyObj.cc;

        return <div className={`Addon d-flex rounded-4 bg-white position-relative`}>
            <div>
                <div className="embed-responsive embed-responsive-1by1 rounded-left-4 position-relative overflow-hidden" style={{ width: 150 }}>
                    <div className="img position-absolute w-100 h-100" style={{ backgroundImage: `url('${photo}')` }} />
                </div>
            </div>

            <div className={`flex-fill overflow-hidden rounded-right-4 py-3 px-4 bg-${is_active ? "green" : "red"}-10`} style={{ height: 150 }}>
                <div className="d-flex mb-2 justify-content-between">
                    <div className="text-24 text-truncate name">{name}</div>

                    <div>
                        <div style={{ width: 22, height: 22, background: `url('${is_active ? Green : Red}') no-repeat center`, backgroundSize: 'cover' }} className="text-5 text-white d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon icon={is_active ? faCheck : faTimes} />
                        </div>
                    </div>
                </div>

                <div className="mb-2 text-14 text-300 text-truncate description">{description}</div>

                <div className="d-flex justify-content-between">
                    <div className="text-18 text-700 d-flex align-items-center text-truncate">
                        {position == 0 && <div className="text-10 text-300 mr-1">{currency}</div>}
                        <div>{price}</div>
                        {position == 1 && <div className="text-10 text-300 ml-1">{currency}</div>}
                    </div>

                    <div>
                        <div className="action text-10 d-flex position-relative">
                            <Link to={`addons`} className="text-decoration-none view">
                                <Circle color="green" icon={faEye} />
                            </Link>

                            <Link to={`addons/${id}/edit`} className="text-decoration-none edit">
                                <Circle color="orange" icon={faEdit} />
                            </Link>

                            <div className="delete">
                                <Delete deleteAction={() => this.props.delete(id)}>
                                    <Circle color="red" icon={faTrash} />
                                </Delete>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    delete: id => dispatch(actions.deleteAddons(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Addon);