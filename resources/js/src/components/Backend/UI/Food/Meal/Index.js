import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';

import Delete from '../../Delete/Delete';
import Stars from '../../../../UI/Stars';

import * as actions from '../../../../../store/actions/backend';

import './Meal.css';

const Circle = ({ color, icon }) => <div style={{ height: 38, width: 38 }} className={`bg-white rounded-circle d-flex justify-content-center align-items-center border border-${color} border-2 text-${color}`}>
    <FontAwesomeIcon icon={icon} />
</div>;

class Meal extends Component {
    render() {
        const {
            id, name, photo, price, is_active, description, mark, comments, className = '',
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

        return <div className={`Meal ${className}`}>
            <div className={`rounded-4 bg-white shadow-sm`}>
                <div>
                    <div className="embed-responsive embed-responsive-4by3 w-100 rounded-top-4 shadow-sm position-relative overflow-hidden">
                        <div className="bg position-absolute w-100 h-100" style={{ backgroundImage: `url('${photo}')` }} />

                        <div className="actions text-10 d-flex justify-content-center align-items-center position-absolute w-100 h-100 bg-black-30">
                            <Link to={`meals`} className="text-decoration-none mr-2">
                                <Circle color="green" icon={faEye} />
                            </Link>

                            <Link to={`meals/${id}/edit`} className="text-decoration-none mr-2">
                                <Circle color="primary" icon={faEdit} />
                            </Link>

                            <div>
                                <Delete deleteAction={() => this.props.delete(id)}>
                                    <Circle color="red" icon={faTrash} />
                                </Delete>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-3 bg-white overflow-hidden">
                    <div className="mb-2 text-14 text-300 text-truncate overflow-hidden position-relative pb-1">
                        {name}

                        <div className="position-absolute bg-orange rounded-pill" style={{ width: 14.5, height: 1, bottom: 0, left: 0 }} />
                    </div>

                    <div className="overflow-hidden text-truncate text-10 text-300 mb-1">{description}</div>

                    <div className="mb-2">
                        <div className="d-flex align-items-center">
                            <div className="text-10 text-300">Ratings</div>

                            <div className="mx-1">
                                <Stars readOnly lg mark={mark} />
                            </div>

                            <div className="text-orange text-8 text-700">
                                ({(mark).toFixed(1)})
                            </div>

                            <div className="ml-auto">
                                <div className="text-green bg-green-10 text-8 px-1 rounded-pill">
                                    <FontAwesomeIcon icon={faCommentAlt} className="mr-1" />

                                    {comments >= 1000 ? `${(comments / 1000).toFixed(1)}k` : comments}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-12 text-700 d-flex align-items-center text-truncate">
                        {position == 0 && <div className="text-6 text-300 mr-1">{currency}</div>}
                        <div>{price}</div>
                        {position == 1 && <div className="text-6 text-300 ml-1">{currency}</div>}
                    </div>
                </div>
            </div>
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    delete: id => dispatch(actions.deleteMeals(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Meal);