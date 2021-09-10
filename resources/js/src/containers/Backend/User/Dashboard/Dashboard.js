import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { faTachometerAlt, faEye, faEdit, faHome, faBox, faMoneyBillWaveAlt, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import Table from '../../../../components/Backend/UI/Table/Table';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import Card from '../../../../components/Backend/Dashboard/Card/Card';
import TitleWrapper from '../../../../components/Backend/UI/TitleWrapper';
import Error from '../../../../components/Error/Error';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';
import FinanceTracker from './FinanceTracker/FinanceTracker';

import { getDashboard, resetDashboard } from '../../../../store/actions/backend/dashboard';
import { updateObject } from '../../../../shared/utility';


class Dashboard extends Component {
    componentDidMount() {
        this.props.get();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { backend: { pages: { dashboard: { user: { title, subtitle, blocks: { total_restaurants, total_plans, total_plans_amount, total_recharges } } } } } }
                }
            },
            backend: { dashboard: { loading, error, blocksData, totalRestaurants, totalPlans, totalRecharges, financeTrackerData } },
        } = this.props;

        let content = null;
        let errors = null;

        if (loading) content = <Col xs={12}>
            <CustomSpinner />
        </Col>;
        else {
            errors = <>
                <Error err={error} />
            </>;
            if (blocksData) {
                const data = [
                    {
                        children: blocksData.totalRestaurants,
                        icon: faHome,
                        link: '/user/restaurants/',
                        color: 'red',
                        details: total_restaurants,
                    },
                    {
                        children: blocksData.totalPlans,
                        icon: faBox,
                        link: '/user/plans/',
                        color: 'green',
                        details: total_plans,
                    },
                    {
                        children: blocksData.totalPlansAmount,
                        icon: faMoneyBillWaveAlt,
                        link: '/user/plans/',
                        color: 'blue',
                        details: total_plans_amount,
                    },
                    {
                        children: blocksData.totalRecharges,
                        icon: faMoneyBillAlt,
                        link: '/user/recharges/',
                        color: 'orange',
                        details: total_recharges,
                    },
                ];

                const cards = data.map(({ title, titleColor, icon, link, color, details, children, circleBorder, circleColor, light }, index) => <Card color={color} details={details} key={index} title={title} titleColor={titleColor} circleBorder={circleBorder} circleColor={circleColor} icon={icon} link={link} light={light}>{children}</Card>);

                const restaurantsData = totalRestaurants.map(restaurant => updateObject(restaurant, {
                    action: <div className="text-center">
                        <Link className="text-blue mr-2" to={`/user/restaurants/${restaurant.id}`}><FontAwesomeIcon icon={faEye} fixedWidth /></Link>
                        <Link className="text-green mr-2" to={`/user/restaurants/${restaurant.id}/edit`}><FontAwesomeIcon icon={faEdit} fixedWidth /></Link>
                    </div>
                }));

                const plansData = totalPlans.map(restaurant => updateObject(restaurant, {
                    action: <div className="text-center">
                        <Link className="text-blue mr-2" to={`/user/plans/${restaurant.id}`}><FontAwesomeIcon icon={faEye} fixedWidth /></Link>
                        <Link className="text-green mr-2" to={`/user/plans/${restaurant.id}/edit`}><FontAwesomeIcon icon={faEdit} fixedWidth /></Link>
                    </div>
                }));

                const rechargesData = totalRecharges.map(restaurant => updateObject(restaurant, {
                    action: <div className="text-center">
                        <Link className="text-blue mr-2" to={`/user/recharges/${restaurant.id}`}><FontAwesomeIcon icon={faEye} fixedWidth /></Link>
                        <Link className="text-green mr-2" to={`/user/recharges/${restaurant.id}/edit`}><FontAwesomeIcon icon={faEdit} fixedWidth /></Link>
                    </div>
                }));

                content = (
                    <>
                        <Row>
                            {cards}
                        </Row>

                        <Row className="mt-5">
                            <Table array={restaurantsData} title="Total Restaurants" icon={faHome} bordered limit={5} lg={6}
                                fields={[
                                    { name: 'Name', key: 'name' },
                                    { name: 'Token', key: 'token' },
                                    { name: 'Owner', key: 'owner' },
                                    { name: 'E-Mail Address', key: 'email' },
                                    { name: 'Action', key: 'action' }
                                ]}>
                                <Link to="/user/restaurants" className="text-reset">{'View full restaurant list | >'}</Link>
                            </Table>

                            <Col lg={6} className="pb-4">
                                <div className="bg-soft shadow-sm text-secondary h-100 d-flex flex-column">
                                    <div className="p-3 border-bottom border-border-50 text-700 position-relative d-flex">
                                        <span className="d-inline-flex align-items-center"><FontAwesomeIcon size="lg" className="mr-2" fixedWidth icon={faMoneyBillWaveAlt} />{"Finance Tracker"}</span>
                                    </div>

                                    <Row className="p-3 flex-fill">
                                        <Col xs={12} lg={11}>
                                            <FinanceTracker data={financeTrackerData} />
                                        </Col>
                                    </Row>
                                </div>
                            </Col>

                            <Table array={plansData} title="Total Plans" icon={faBox} bordered limit={5} lg={6}
                                fields={[
                                    { name: 'Restaurant Name', key: 'restaurant' },
                                    { name: 'Plan Name', key: 'plan' },
                                    { name: 'Subscription Type', key: 'type' },
                                    { name: 'Action', key: 'action' }
                                ]}>
                                <Link to="/user/plans" className="text-reset">{'View full plan list | >'}</Link>
                            </Table>

                            <Table array={rechargesData} title="Total Recharges" icon={faMoneyBillAlt} bordered limit={5} lg={6}
                                fields={[
                                    { name: 'Restaurant Name', key: 'restaurant' },
                                    { name: 'Payment Method', key: 'method' },
                                    { name: 'Amount', key: 'amount' },
                                    { name: 'Action', key: 'action' }
                                ]}>
                                <Link to="/user/recharges" className="text-reset">{'View full recharge list | >'}</Link>
                            </Table>
                        </Row>
                    </>
                );
            }
        }

        return (
            <>
                <TitleWrapper>
                    <Breadcrumb main={subtitle} icon={faTachometerAlt} />
                    <SpecialTitle>{title}</SpecialTitle>
                    <Subtitle>{subtitle}</Subtitle>
                </TitleWrapper>
                <div>
                    {errors}
                    {content}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: () => dispatch(getDashboard()),
    reset: () => dispatch(resetDashboard()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));